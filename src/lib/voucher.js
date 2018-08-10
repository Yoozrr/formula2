import * as math from 'mathjs'
import { addDays, startOfDay } from 'date-fns'

export function calculateDueDate (voucher) {
  return addDays(startOfDay(voucher.issueDate), voucher.term)
}

export function calculateVoucherItem (voucherItem) {
  voucherItem.rate = math.multiply(voucherItem.exchangeRate, voucherItem.baseRate)
  voucherItem.subTotal = math.multiply(voucherItem.quantity, voucherItem.rate)
  voucherItem.taxTotal = math.chain(voucherItem.subTotal).multiply(voucherItem.taxPercentage).divide(100).done()
  voucherItem.total = math.add(voucherItem.subTotal, voucherItem.taxTotal)
  return voucherItem
}

export function calculateVoucher ({ ...voucher }) {
  const voucherItems = voucher.voucherItems || []
  voucher.voucherItems = voucherItems.map(calculateVoucherItem)
  voucher.subTotal = voucherItems.reduce((sum, voucherItem) => math.sum(sum, voucherItem.subTotal), 0)
  voucher.taxTotal = voucherItems.reduce((sum, voucherItem) => math.sum(sum, voucherItem.taxTotal), 0)
  voucher.total = math.sum(voucher.subTotal, voucher.taxTotal)
  voucher.balance = math.subtract(voucher.total, 0)
  voucher.issueDate = startOfDay(voucher.issueDate)
  voucher.voucherDate = startOfDay(voucher.voucherDate)
  voucher.dueDate = this.calculateDueDate(voucher)

  return voucher
}
