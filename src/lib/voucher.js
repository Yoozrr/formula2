import * as math from 'mathjs'
import { addDays, startOfDay } from 'date-fns'
import { sortBy, isNumber } from 'lodash'

export function calculateDueDate (voucher) {
  return addDays(startOfDay(voucher.issueDate), voucher.term)
}

export function calculateVoucherItem (voucherItem) {
  let rate = math.multiply(voucherItem.exchangeRate, voucherItem.baseRate)
  let subTotal = math.multiply(voucherItem.quantity, rate)
  let taxTotal = math.chain(subTotal).multiply(voucherItem.taxPercentage).divide(100).done()
  let total = math.add(subTotal, taxTotal)

  return {
    ...voucherItem,
    rate,
    subTotal,
    taxTotal,
    total
  }
}

export function calculateVoucher (voucher) {
  let newVoucher = { ...voucher }

  const voucherItems = newVoucher.voucherItems || []
  newVoucher.voucherItems = voucherItems.map(calculateVoucherItem)

  const validVoucherItems = newVoucher.voucherItems.filter(vi => !vi.isDeleted)
  
  newVoucher.subTotal = validVoucherItems.reduce((sum, voucherItem) => math.sum(sum, voucherItem.subTotal), 0)
  newVoucher.taxTotal = validVoucherItems.reduce((sum, voucherItem) => math.sum(sum, voucherItem.taxTotal), 0)
  newVoucher.total = math.sum(newVoucher.subTotal, newVoucher.taxTotal)
  newVoucher.balance = math.subtract(newVoucher.total, 0)
  
  if (newVoucher.issueDate) {
    newVoucher.issueDate = startOfDay(newVoucher.issueDate)
  }

  if (newVoucher.voucherDate) {
    newVoucher.voucherDate = startOfDay(newVoucher.voucherDate)
  }

  if (newVoucher.issueDate && isNumber(newVoucher.term)) {
    newVoucher.dueDate = calculateDueDate(voucher)
  }

  return newVoucher
}

export function calculateVoucherWithBalance (params) {
  let { voucher, payments } = params

  const voucherItems = voucher.voucherItems || []
  voucher.voucherItems = voucherItems.map(calculateVoucherItem)
  const validVoucherItems = voucher.voucherItems.filter(vi => !vi.isDeleted)

  voucher.subTotal = validVoucherItems.reduce((sum, voucherItem) => math.sum(sum, voucherItem.subTotal), 0)
  voucher.taxTotal = validVoucherItems.reduce((sum, voucherItem) => math.sum(sum, voucherItem.taxTotal), 0)
  voucher.total = math.sum(voucher.subTotal, voucher.taxTotal)
  voucher.issueDate = startOfDay(voucher.issueDate)
  voucher.voucherDate = startOfDay(voucher.voucherDate)
  voucher.dueDate = calculateDueDate(voucher)
  
  const validPayments = payments.filter(vi => vi.status === 'PAID')
  const totalVoucherPayment = validPayments.reduce((sum, vp) => math.sum(sum, vp.amount), 0)
  voucher.balance = math.subtract(voucher.total, totalVoucherPayment)

  return voucher
}

export function sortVoucherItems (voucherItems) {
  return sortBy(voucherItems, (vi) => {
    if (!vi.costItem || !vi.costItem.chargeItem) {
      throw new Error(`Cannot sort Voucher Items without Chargeitems.`)
    }
    let sequence = vi.costItem.chargeItem.sequence
    let code = vi.costItem.chargeItem.code

    // Current issue is sorted by number.
    return (vi.isDeleted ? 10000000 : 0) +
      (parseInt(sequence) * 1000) + 
      parseInt(code)
  })
}
