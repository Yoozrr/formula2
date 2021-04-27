import * as math from 'mathjs'
import { addDays } from 'date-fns'
import { isUndefined, sortBy, isNumber } from 'lodash'

import { opBigNumber } from "./helpers/opBigNumber"
/******************************
 * Calculate Due Date
 ******************************/
export function calculateDueDate (voucher) {
  return addDays(voucher.issueDate || new Date(), voucher.term || 0)
}

const validateVoucherItem = (vi) => {
  const validPairs = [ 'isDeleted', 'baseRate', 'quantity', 'taxPercentage']

  validPairs.map(val => {
    if (val === 'isDeleted') {
      if (isUndefined(vi[val])) {
        throw new Error(`Incomplete parameters for VoucherItem: ${val}`)
      }
    } else if(!isNumber(parseFloat(vi[val]))) {
      throw new Error(`Incomplete parameters for VoucherItem: ${val}`)
    }
  })
}

/******************************
 * Calculate Due Date, returns a copy of the voucherItem
 ******************************/
export function calculateVoucherItem (voucherItem) {
  validateVoucherItem(voucherItem)

  const rate = opBigNumber(math.multiply, voucherItem.exchangeRate || 1, voucherItem.baseRate)
  // ********** SubTotals
  const baseSubTotal = opBigNumber(math.multiply, voucherItem.quantity, voucherItem.baseRate)
  const subTotal = math.round(opBigNumber(math.multiply, voucherItem.quantity, rate), 2)

  const localSubTotal = math.multiply(subTotal, voucherItem.localExchangeRate || 1)

  // ********** Taxes
  const baseTaxTotal = math.number(
    math.chain(math.bignumber(baseSubTotal))
      .multiply(math.bignumber(voucherItem.taxPercentage))
      .divide(100)
      .done()
  )

  const taxTotal = math.number(
    math.chain(math.bignumber(subTotal))
      .multiply(math.bignumber(voucherItem.taxPercentage))
      .divide(100)
      .done()
  )

  const localTaxTotal = math.multiply(taxTotal, voucherItem.localExchangeRate || 1)

  // ********** Totals
  const total = opBigNumber(math.add, subTotal, taxTotal)

  const localTotal = math.add(localSubTotal, localTaxTotal)

  return {
    ...voucherItem,
    rate,
    subTotal,
    baseSubTotal,
    taxTotal,
    baseTaxTotal,
    total,
    localSubTotal,
    localTaxTotal,
    localTotal
  }
}

/******************************
 * Calculate the voucher.
 ******************************/
export function calculateVoucher (paramVoucher) {
  let voucher = { ...paramVoucher }

  const voucherItems = voucher.voucherItems || []
  voucher.voucherItems = voucherItems.map(calculateVoucherItem)
  const validVoucherItems = voucher.voucherItems.filter(vi => !vi.isDeleted)

  // ********** SubTotals
  voucher.baseSubTotal = validVoucherItems.reduce(
    (sum, voucherItem) => opBigNumber(math.sum, sum, voucherItem.baseSubTotal),
    0
  )

  voucher.subTotal = validVoucherItems.reduce(
    (sum, voucherItem) => opBigNumber(math.sum, sum, voucherItem.subTotal),
    0
  )

  voucher.localSubTotal = validVoucherItems.reduce(
    (sum, voucherItem) => opBigNumber(math.sum, sum, voucherItem.localSubTotal),
    0
  )

  // ********** Taxes

  voucher.baseTaxTotal = validVoucherItems.reduce(
    (sum, voucherItem) => opBigNumber(math.sum, sum, voucherItem.baseTaxTotal),
    0
  )

  voucher.taxTotal = validVoucherItems.reduce(
    (sum, voucherItem) => opBigNumber(math.sum, sum, voucherItem.taxTotal),
    0
  )

  voucher.localTaxTotal = validVoucherItems.reduce(
    (sum, voucherItem) => opBigNumber(math.sum, sum, voucherItem.localTaxTotal),
    0
  )

  // ********** Totals
  voucher.total = opBigNumber(math.sum, voucher.subTotal, voucher.taxTotal)

  voucher.localTotal = opBigNumber(math.sum, voucher.localSubTotal, voucher.localTaxTotal)

  voucher.dueDate = calculateDueDate(voucher)

  voucher.balance = opBigNumber(math.subtract, voucher.total, 0)

  return voucher
}

/******************************
 * Calculate the voucher with balance.
 ******************************/
export function calculateVoucherWithBalance (params) {
  let { voucher, payments } = params

  const calculatedVoucher = calculateVoucher(voucher)

  const validPayments = payments.filter(vi => vi.status === 'PAID')

  const totalVoucherPayment = validPayments.reduce(
    (sum, vp) => opBigNumber(math.sum, sum, vp.amount),
    0
  )

  calculatedVoucher.balance = opBigNumber(math.subtract, calculatedVoucher.total, totalVoucherPayment)

  return calculatedVoucher
}

/******************************
 * Sort
 ******************************/
export function sortVoucherItems (voucherItems) {
  return sortBy(voucherItems, (vi) => {
    if (!vi.costItem || !vi.costItem.chargeItem) {
      throw new Error(`Cannot sort Voucher Items without Chargeitems.`)
    }

    const deletedField = (vi.isDeleted ? '10000000' : '0')
    const jobField = (vi.job && (vi.job.no || vi.job.uuid)) || ''

    const chargeItem = vi.costItem.chargeItem

    const chargeItemField = (
      (chargeItem.sequence && chargeItem.sequence.padStart(10, '0')) ||
      chargeItem.name ||
      chargeItem.code ||
      ''
    )

    const unitField = vi.unit || ''
    const sizeField = vi.size || ''

    return `${deletedField}-${jobField}-${chargeItemField}-${unitField}-${sizeField}`
  })
}
