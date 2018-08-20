import * as math from 'mathjs'
import { addDays, startOfDay } from 'date-fns'
import { sortBy } from 'lodash'

export function calculateDueDate (voucher) {
  return addDays(startOfDay(voucher.issueDate), voucher.term)
}

export function calculateVoucherItem ({ ...voucherItem }) {
  voucherItem.rate = math.multiply(voucherItem.exchangeRate, voucherItem.baseRate)
  voucherItem.subTotal = math.multiply(voucherItem.quantity, voucherItem.rate)
  voucherItem.taxTotal = math.chain(voucherItem.subTotal).multiply(voucherItem.taxPercentage).divide(100).done()
  voucherItem.total = math.add(voucherItem.subTotal, voucherItem.taxTotal)
  return voucherItem
}

export function calculateVoucher ({ ...voucher }) {
  const voucherItems = voucher.voucherItems || []
  voucher.voucherItems = voucherItems.map(calculateVoucherItem)
  const validVoucherItems = voucher.voucherItems.filter(vi => !vi.isDeleted)

  voucher.subTotal = validVoucherItems.reduce((sum, voucherItem) => math.sum(sum, voucherItem.subTotal), 0)
  voucher.taxTotal = validVoucherItems.reduce((sum, voucherItem) => math.sum(sum, voucherItem.taxTotal), 0)
  voucher.total = math.sum(voucher.subTotal, voucher.taxTotal)
  voucher.balance = math.subtract(voucher.total, 0)
  if (voucher.issueDate) {
    voucher.issueDate = startOfDay(voucher.issueDate)
  }
  if (voucher.voucherDate) {
    voucher.voucherDate = startOfDay(voucher.voucherDate)
  }
  if (voucher.issueDate && voucher.term) {
    voucher.dueDate = calculateDueDate(voucher)
  }

  return voucher
}

export function calculateVoucherWithBalance ({ voucher: { ...voucher }, payments }) {
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
