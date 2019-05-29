import * as math from 'mathjs'
import { find, countBy, sortBy, flow, isEmpty, mapValues } from 'lodash'
import { map as mapFp, filter as filterFp, flatten as flattenFp, reduce as reduceFp, compact, uniq, sumBy as sumByFp, groupBy as groupByFp } from 'lodash/fp'

import { opBigNumber } from "./opBigNumber"

const getBookingVouchers = flow(
  mapFp((booking) => {
    if (booking && booking.vouchers) {
      return booking.vouchers
    } else {
      return []
    }
  }),
  flattenFp
)

  const getVoucherItems = flow(
    mapFp((voucher) => {
      if (voucher && voucher.voucherItems) {
        return voucher.voucherItems.map(vi => {
          vi.isCreditNote = voucher.isCreditNote
          return vi
        })
      } else {
        return []
      }
    }),
    flattenFp
  )

const getRate = ({ vouchers, voucherStatus, costItemUuid, transactionType }) =>
  flow(
    filterFp((voucher) => voucherStatus.indexOf(voucher.status) >= 0 && voucher.transactionType === transactionType),
    getVoucherItems,
    filterFp((voucherItem) => voucherItem.costItem.uuid === costItemUuid && !voucherItem.isDeleted),
    reduceFp((sum, voucherItem) => {
      const viValue = voucherItem.localSubTotal

      const result = voucherItem.isCreditNote 
        ? opBigNumber(math.subtract, sum, viValue)
        : opBigNumber(math.add, sum, viValue)

      return result
    }, 0)
  )(vouchers)

export function calculateGrossProfit (costItem) {
  // console.log('!!! To deprecate calculateGrossProfit function in @shipx/formula because gross profit cannot be computed without accurals. !!!')  
  costItem.sellRate = opBigNumber(math.multiply, costItem.sellBaseRate, costItem.sellExchangeRate)
  costItem.sellTotal = opBigNumber(math.multiply, costItem.sellRate, costItem.quantity)
  costItem.costRate = opBigNumber(math.multiply, costItem.costBaseRate, costItem.costExchangeRate)
  costItem.costTotal = opBigNumber(math.multiply, costItem.costRate, costItem.quantity)
  costItem.estimatedProfit = opBigNumber(math.subtract, costItem.sellTotal || 0, costItem.costTotal || 0)

  // Gross profit computed if no cost or both AP and AR exisit
  costItem.grossProfit = costItem.costTotal === 0 || (costItem.accountReceivable > 0 && costItem.accountPayable > 0) ?
    math.chain(math.bignumber(costItem.accountReceivable || 0))
      .subtract(math.bignumber(costItem.accountPayable || 0))
      .subtract(math.bignumber(costItem.cashBook || 0))
      .subtract(math.bignumber(costItem.accrual || 0))
      .subtract(math.bignumber(costItem.blankCheque || 0))
      .done() :
    0

  costItem.grossProfit = math.number(costItem.grossProfit)

  return costItem
}

export function computeCostItems (costItems, vouchers, currency) {
  return costItems.map((ci) => {
    ci.sellRate = opBigNumber(math.multiply, ci.sellBaseRate, ci.sellExchangeRate)
    ci.sellTotal = opBigNumber(math.multiply, ci.sellRate, ci.quantity)
    ci.costRate = opBigNumber(math.multiply, ci.costBaseRate, ci.costExchangeRate)
    ci.costTotal = opBigNumber(math.multiply, ci.costRate, ci.quantity)
    ci.estimatedProfit = opBigNumber(math.subtract, ci.sellTotal || 0, ci.costTotal || 0)

    ci.accountPayable = getRate({
      costItemUuid: ci.uuid,
      vouchers,
      voucherStatus: ['APPROVED', 'PARTIALLY_PAID', 'PAID'],
      transactionType: 'ACCPAY'
    })
    ci.accountReceivable = getRate({
      costItemUuid: ci.uuid,
      vouchers,
      voucherStatus: ['APPROVED', 'PARTIALLY_PAID', 'PAID'],
      transactionType: 'ACCREC'
    })
    ci.accountPayableDraft = getRate({
      costItemUuid: ci.uuid,
      vouchers,
      voucherStatus: ['DRAFT', 'SUBMITTED'],
      transactionType: 'ACCPAY'
    })
    ci.accountReceivableDraft = getRate({
      costItemUuid: ci.uuid,
      vouchers,
      voucherStatus: ['DRAFT', 'SUBMITTED'],
      transactionType: 'ACCREC'
    })

    // Gross profit computed if no cost or both AP and AR exisit
    // GP = Only compute after AR
    // (SellTotal > AR ? SellTotal : AR) -
    // (CostTotal > (AP + Accrual) ? CostTotal-Accrual : (AP + Accrual))
    const sellAmt = ci.sellTotal > ci.accountReceivable 
      ? math.bignumber(ci.sellTotal || 0 )
      : math.bignumber(ci.accountReceivable || 0)

    const costAmt = ci.costTotal > (math.add(math.bignumber(ci.accountPayable || 0), math.bignumber(ci.accrual || 0)))
      ? math.subtract(math.bignumber(ci.costTotal || 0), math.bignumber(ci.accrual || 0))
      : math.add(math.bignumber(ci.accountPayable || 0), math.bignumber(ci.accrual || 0))

    ci.grossProfit = ci.accountReceivable > 0 
      ? math.chain(sellAmt)
        .subtract(costAmt)
        .done() 
      : 0
    ci.grossProfit = math.number(ci.grossProfit)

    // Short Bill = cost - AP - APDraft
    //   show If AR < AP (neg accrual)
    //   Or show If EstCost < AP (neg accrual)

    ci.shortBill = ci.accrual < 0 ?
      math.chain(math.bignumber(ci.costTotal))
      .subtract(math.bignumber(ci.accountPayable || 0))
      .subtract(math.bignumber(ci.accountPayableDraft || 0))
      .done() : 0
    ci.shortBill = math.number(ci.shortBill)

    ci.cashBook = 0
    ci.blankCheque = 0

    return ci
  })
}

export function summarizeCostItems (costItems) {
  const rtnObj = {}
  const totals = ['estimatedProfit', 'grossProfit', 'costTotal', 'sellTotal', 'accrual', 'accountPayable', 'accountReceivable', 'accountPayableDraft', 'accountReceivableDraft', 'shortBill']

  totals.map(t => {
    rtnObj[t] = 0
  })

  for (let costItem of costItems) {
    totals.map(t => {
      if (!costItem.isDeleted) {
        rtnObj[t] = opBigNumber(math.add, costItem[t] || 0, rtnObj[t])
      }
    })
  }

  totals.map(t => {
    rtnObj[t] = rtnObj[t]
  })

  rtnObj.shortBillPercentage = rtnObj.sellTotal > 0 
    ? math.chain(math.bignumber(rtnObj.shortBill))
      .divide(math.bignumber(rtnObj.sellTotal))
      .multiply(100)
      .done() 
    : 0
  rtnObj.shortBillPercentage = math.number(rtnObj.shortBillPercentage)

  return rtnObj
}

export function sortCostItems (costItems) {
  return sortBy(costItems, (ci) => {
    const deletedField = (ci.isDeleted ? '10000000' : '0')

    const chargeItem = ci.chargeItem

    const chargeItemField = (
      ((ci.sequence) || (chargeItem && chargeItem.sequence && chargeItem.sequence.padStart(10, '0'))) ||
      (chargeItem && chargeItem.name) ||
      (ci.code || (chargeItem && chargeItem.code)) ||
      ''
    )

    const unitField = ci.unit || ''
    const sizeField = ci.size || ''

    return `${deletedField}-${chargeItemField}-${unitField}-${sizeField}`
  })
}
