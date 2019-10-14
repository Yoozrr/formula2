import * as math from 'mathjs'
import { find, countBy, sortBy, flow, isEmpty, mapValues } from 'lodash'
import { map as mapFp, filter as filterFp, flatten as flattenFp, reduce as reduceFp, compact, uniq, sumBy as sumByFp, groupBy as groupByFp } from 'lodash/fp'

import { opBigNumber } from "./helpers/opBigNumber"
import grossProfit from './helpers/grossProfit'
import percentage from './helpers/percentage'
import shortBill from './helpers/shortBill'

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

  
const getFunction = (fnc, optionName) => {
  return fnc[optionName] || fnc.default
}

const getSellCostTotal = ({ quantity, 
  sellBaseRate, sellExchangeRate, 
  costBaseRate, costExchangeRate }) => {
  const sellRate = opBigNumber(math.multiply, sellBaseRate, sellExchangeRate)
  const sellTotal = opBigNumber(math.multiply, sellRate, quantity)
  const costRate = opBigNumber(math.multiply, costBaseRate, costExchangeRate)
  const costTotal = opBigNumber(math.multiply, costRate, quantity)
  const estimatedProfit = opBigNumber(math.subtract, sellTotal || 0, costTotal || 0)

  return {
    sellRate,
    sellTotal,
    costRate,
    costTotal,
    estimatedProfit
  }
}

export function calculateGrossProfit (ci, options = {}) {
  // console.log('!!! To deprecate calculateGrossProfit function in @shipx/formula because gross profit cannot be computed without accurals. !!!')  
    ci = Object.assign(ci, getSellCostTotal(ci))

    ci.grossProfit = getFunction(grossProfit, options.grossProfit)(ci)

  // Compute percentage
  ci.percentage = getFunction(percentage, options.percentage)(ci)

  return ci
}

export function computeCostItems (costItems, vouchers, currency, options = {}) {
  return costItems.map((ci) => {
    ci = Object.assign(ci, getSellCostTotal(ci))

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

    ci.grossProfit = getFunction(grossProfit, options.grossProfit)(ci)

    // Compute percentage
    ci.percentage = getFunction(percentage, options.percentage)(ci)

    // Compute shortBill
    ci.shortBill = getFunction(shortBill, options.shortBill)(ci)

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
