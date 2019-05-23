import * as math from 'mathjs'
import { addDays, startOfDay } from 'date-fns'
import { sortBy, isNumber } from 'lodash'

export function calculateDueDate (voucher) {
  return addDays(startOfDay(voucher.issueDate), voucher.term)
}

export function calculateVoucherItem (voucherItem) {
  let rate = math.multiply(math.bignumber(voucherItem.exchangeRate), math.bignumber(voucherItem.baseRate))
  let subTotal = math.multiply(math.bignumber(voucherItem.quantity), rate)
  let baseSubTotal = math.multiply(math.bignumber(voucherItem.quantity), math.bignumber(voucherItem.baseRate))
  let taxTotal = math.chain(subTotal).multiply(math.bignumber(voucherItem.taxPercentage)).divide(100).done()
  let baseTaxTotal = math.chain(baseSubTotal).multiply(math.bignumber(voucherItem.taxPercentage)).divide(100).done()
  let total = math.add(subTotal, taxTotal)

  return {
    ...voucherItem,
    rate,
    subTotal,
    baseSubTotal,
    taxTotal,
    baseTaxTotal,
    total
  }
}

export function calculateVoucher (voucher) {
  let newVoucher = { ...voucher }

  const voucherItems = newVoucher.voucherItems || []
  newVoucher.voucherItems = voucherItems.map(calculateVoucherItem)

  const validVoucherItems = newVoucher.voucherItems.filter(vi => !vi.isDeleted)

  newVoucher.subTotal = validVoucherItems.reduce((sum, voucherItem) => math.sum(sum, math.bignumber(voucherItem.subTotal)), math.bignumber(0))
  newVoucher.baseSubTotal = validVoucherItems.reduce((sum, voucherItem) => math.sum(sum, math.bignumber(voucherItem.baseSubTotal)), math.bignumber(0))
  newVoucher.taxTotal = validVoucherItems.reduce((sum, voucherItem) => math.sum(sum, math.bignumber(voucherItem.taxTotal)), math.bignumber(0))
  newVoucher.baseTaxTotal = validVoucherItems.reduce((sum, voucherItem) => math.sum(sum, math.bignumber(voucherItem.baseTaxTotal)), math.bignumber(0))
  newVoucher.total = math.sum(math.bignumber(newVoucher.subTotal), math.bignumber(newVoucher.taxTotal))
  newVoucher.balance = math.subtract(math.bignumber(newVoucher.total), 0)

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

  voucher.subTotal = validVoucherItems.reduce((sum, voucherItem) => math.sum(sum, math.bignumber(voucherItem.subTotal)), math.bignumber(0))
  voucher.taxTotal = validVoucherItems.reduce((sum, voucherItem) => math.sum(sum, math.bignumber(voucherItem.taxTotal)), math.bignumber(0))
  voucher.total = math.sum(math.bignumber(voucher.subTotal), math.bignumber(voucher.taxTotal))
  voucher.issueDate = startOfDay(voucher.issueDate)
  voucher.voucherDate = startOfDay(voucher.voucherDate)
  voucher.dueDate = calculateDueDate(voucher)

  const validPayments = payments.filter(vi => vi.status === 'PAID')
  const totalVoucherPayment = validPayments.reduce((sum, vp) => math.sum(sum, math.bignumber(vp.amount)), math.bignumber(0))
  voucher.balance = math.subtract(math.bignumber(voucher.total), totalVoucherPayment)

  return voucher
}

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
