import * as math from 'mathjs'
import { addDays } from 'date-fns'
import { sortBy, isNumber } from 'lodash'

import { opBigNumber } from "./opBigNumber"

export function calculateDueDate (voucher) {
  return addDays(voucher.issueDate || new Date(), voucher.term || 0)
}

export function calculateVoucherItem (voucherItem) {
  let rate = opBigNumber(math.multiply, voucherItem.exchangeRate, voucherItem.baseRate)
  let subTotal = opBigNumber(math.multiply, voucherItem.quantity, rate)
  let baseSubTotal = opBigNumber(math.multiply, voucherItem.quantity, voucherItem.baseRate)

  let taxTotal = math.number(
    math.chain(math.bignumber(subTotal))
      .multiply(math.bignumber(voucherItem.taxPercentage))
      .divide(100)
      .done()
  )

  let baseTaxTotal = math.number(
    math.chain(math.bignumber(baseSubTotal))
      .multiply(math.bignumber(voucherItem.taxPercentage))
      .divide(100)
      .done()
  )

  let total = opBigNumber(math.add, subTotal, taxTotal)

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

  newVoucher.subTotal = validVoucherItems.reduce(
    (sum, voucherItem) => opBigNumber(math.sum, sum, voucherItem.subTotal), 
    0
  )

  newVoucher.baseSubTotal = validVoucherItems.reduce(
    (sum, voucherItem) => opBigNumber(math.sum, sum, voucherItem.baseSubTotal),
    0
  )
  
  newVoucher.taxTotal = validVoucherItems.reduce(
    (sum, voucherItem) => opBigNumber(math.sum, sum, voucherItem.taxTotal),
    0
  )
  
  newVoucher.baseTaxTotal = validVoucherItems.reduce(
    (sum, voucherItem) => opBigNumber(math.sum, sum, voucherItem.baseTaxTotal),
    0
  )
  
  newVoucher.total = opBigNumber(math.sum, newVoucher.subTotal, newVoucher.taxTotal)
  newVoucher.balance = opBigNumber(math.subtract, newVoucher.total, 0)

  newVoucher.dueDate = calculateDueDate(voucher)

  return newVoucher
}

export function calculateVoucherWithBalance (params) {
  let { voucher, payments } = params

  const voucherItems = voucher.voucherItems || []
  voucher.voucherItems = voucherItems.map(calculateVoucherItem)
  const validVoucherItems = voucher.voucherItems.filter(vi => !vi.isDeleted)

  voucher.subTotal = validVoucherItems.reduce(
    (sum, voucherItem) => opBigNumber(math.sum, sum, voucherItem.subTotal),
    0
  )
  
  voucher.taxTotal = validVoucherItems.reduce(
    (sum, voucherItem) => opBigNumber(math.sum, sum, voucherItem.taxTotal),
    0
  )

  voucher.total = opBigNumber(math.sum, voucher.subTotal, voucher.taxTotal)

  voucher.dueDate = calculateDueDate(voucher)

  const validPayments = payments.filter(vi => vi.status === 'PAID')

  const totalVoucherPayment = validPayments.reduce(
    (sum, vp) => opBigNumber(math.sum, sum, vp.amount),
    0
  )
  
  voucher.balance = opBigNumber(math.subtract, voucher.total, totalVoucherPayment)

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
