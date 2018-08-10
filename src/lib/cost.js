import * as math from 'mathjs'

export function calculateGrossProfit (costItem) {
  costItem.sellRate = math.multiply(costItem.sellBaseRate, costItem.sellExchangeRate)
  costItem.sellTotal = math.multiply(costItem.sellRate, costItem.quantity)
  costItem.costRate = math.multiply(costItem.costBaseRate, costItem.costExchangeRate)
  costItem.costTotal = math.multiply(costItem.costRate, costItem.quantity)
  costItem.grossProfit = math.chain(costItem.accountReceivable || 0)
    .subtract(costItem.accountPayable || 0)
    .subtract(costItem.cashBook || 0)
    .subtract(costItem.blankCheque || 0)
    .done()
  costItem.estimatedProfit = math.subtract(costItem.sellTotal || 0, costItem.costTotal || 0)

  return costItem
}

// import { find, countBy, sortBy, flow, isEmpty, mapValues } from 'lodash'
// import { map as mapFp, flatten as flattenFp, filter as filterFp, reduce as reduceFp, compact, uniq, sumBy as sumByFp, groupBy as groupByFp } from 'lodash/fp'
// import * as _promise from 'bluebird'

// // export default function (app) {
// //   const {
// //     models,
// //     sequelize
// //   } = app

//   const getBookingVouchers = flow(
//     mapFp((booking) => {
//       if (booking && booking.vouchers) {
//         return booking.vouchers
//       } else {
//         return []
//       }
//     }),
//     flattenFp
//   )

//   const getVoucherItems = flow(
//     mapFp((voucher) => {
//       if (voucher && voucher.voucherItems) {
//         return voucher.voucherItems
//       } else {
//         return []
//       }
//     }),
//     flattenFp
//   )

//   const getRate = ({ vouchers, voucherStatus, costItemUuid, transactionType }) =>
//     flow(
//       filterFp((voucher) => voucher.status === voucherStatus && voucher.transactionType === transactionType),
//       getVoucherItems,
//       filterFp((voucherItem) => voucherItem.costItem.uuid === costItemUuid),
//       reduceFp((sum, voucherItem) => {
//         const viValue = math.multiply(voucherItem.quantity, voucherItem.rate)
//         return math.chain(sum).add(viValue).done()
//       }, 0)
//     )(vouchers)

//   class CostService {
//     // async getCostItems (uuid, company) {
//     //   let [costItems, booking] = await Promise.all([
//     //     models.costItem.findAll({
//     //       where: {
//     //         bookingUuid: uuid,
//     //         isDeleted: false
//     //       },
//     //       include: [
//     //         { model: models.currency, as: 'sellCurrency' },
//     //         { model: models.currency, as: 'costCurrency' },
//     //         { model: models.tax, as: 'sellTax' },
//     //         { model: models.tax, as: 'costTax' },
//     //         { model: models.chargeItem },
//     //         {
//     //           model: models.booking,
//     //           include: [{
//     //             model: models.voucher,
//     //             include: [models.voucherItem]
//     //           }]
//     //         }
//     //       ]
//     //     }),
//     //     app.svc.booking.getByUuidWithRelationships({
//     //       uuid,
//     //       relationships: [
//     //         'portOri',
//     //         'portDest',
//     //         'jobs',
//     //         // 'bookingDocuments',
//     //         'vouchers',
//     //         'quotation'
//     //       ]
//     //     })
//     //   ])

//     //   const vouchers = getBookingVouchers(booking)

//     //   booking = Object.assign(booking, app.svc.booking.checkImportExport(booking, company))

//     //   costItems = app.svc.cost.computeArAp(costItems, vouchers)
//     //   costItems = app.svc.cost.computeCostSheetError(booking, costItems)
//     //   costItems = app.svc.cost.sortCostItems(costItems)

//     //   return costItems
//     // }

//     computeArAp (costItems, vouchers) {
//       for (let costItem of costItems) {
//         costItem.accountPayable = getRate({ costItemUuid: costItem.uuid, vouchers, voucherStatus: 'APPROVED', transactionType: 'ACCPAY' })
//         costItem.accountReceivable = getRate({ costItemUuid: costItem.uuid, vouchers, voucherStatus: 'APPROVED', transactionType: 'ACCREC' })
//         costItem.accountPayableDraft = getRate({ costItemUuid: costItem.uuid, vouchers, voucherStatus: 'DRAFT', transactionType: 'ACCPAY' }) +
//           getRate({ costItemUuid: costItem.uuid, vouchers, voucherStatus: 'SUBMITTED', transactionType: 'ACCPAY' })
//         costItem.accountReceivableDraft = getRate({ costItemUuid: costItem.uuid, vouchers, voucherStatus: 'DRAFT', transactionType: 'ACCREC' }) +
//           getRate({ costItemUuid: costItem.uuid, vouchers, voucherStatus: 'SUBMITTED', transactionType: 'ACCREC' })
//         costItem.cashBook = 0
//         costItem.blankCheque = 0
//         costItem = this.calculateGrossProfit(costItem)
//       }

//       return costItems
//     }

//     sortCostItems (costItems) {
//       return sortBy(costItems, (c) => {
//         let sequence = c.sequence || c.chargeItem.sequence
//         let code = c.code || c.chargeItem.code

//         return parseInt(sequence) * 1000 + parseInt(code)
//       })
//     }

//     formatCostItem (quoteItem, quantity = 1) {
//       let costItem = {
//         chargeItemUuid: quoteItem.chargeItem.uuid,
//         code: quoteItem.chargeItem.code,
//         description: quoteItem.description,
//         sequence: quoteItem.chargeItem.sequence,
//         unit: quoteItem.unit || quoteItem.chargeItem.unit,
//         size: quoteItem.size || quoteItem.chargeItem.size,
//         quantity,
//         sellCurrencyUuid: quoteItem.sellCurrencyUuid,
//         sellBaseRate: quoteItem.sellRate,
//         sellExchangeRate: quoteItem.sellExchangeRate,
//         costCurrencyUuid: quoteItem.costCurrencyUuid,
//         costBaseRate: quoteItem.costRate,
//         costExchangeRate: quoteItem.costExchangeRate,
//         vendorUuid: quoteItem.vendorUuid,

//         costTaxUuid: quoteItem.chargeItem.costTax.uuid,
//         costTaxCode: quoteItem.chargeItem.costTax.code,
//         costTaxPercentage: quoteItem.chargeItem.costTax.percentage,
//         sellTaxUuid: quoteItem.chargeItem.sellTax.uuid,
//         sellTaxCode: quoteItem.chargeItem.sellTax.code,
//         sellTaxPercentage: quoteItem.chargeItem.sellTax.percentage
//       }

//       costItem = this.calculateGrossProfit(costItem)
//       return costItem
//     }

//     async computeCost (bk) {
//       let containerUnits
//       // TODO (SL): Query from DB if exist first.
//       let forwarderCompanyUuid = bk.isExport ? bk.forwarderOriUuid : bk.forwarderDestUuid

//       // Find matching quotation
//       let [quotation, forwarderCompany] = await Promise.all([
//         app.svc.quotation.getQuotation(bk.quotationUuid),
//         models.company.findById(forwarderCompanyUuid)
//       ])

//       if (!quotation) {
//         throw new Error('No Quotation found. Unsure what to do.')
//       }

//       // *******************************
//       // Compute quotation Cost Here...
//       // *******************************

//       if (bk.shipmentType === 'FCL') {
//         containerUnits = countBy(bk.jobs, (c) => { return c.details.size })
//       }

//       const getCurrencies = flow(
//         mapFp((qi) => [qi.sellCurrencyUuid, qi.costCurrencyUuid]),
//         flattenFp,
//         uniq,
//         compact,
//         filterFp((currency) => currency !== forwarderCompany.currencyUuid),
//         reduceFp((total, currency) => {
//           total[currency] = currency
//           return total
//         }, {})
//       )
//       const currencies = getCurrencies(quotation.quotationItems)

//       let exchangeRates
//       if (!isEmpty(currencies)) {
//         exchangeRates = await _promise.props(mapValues(currencies, (currency) => models.exchangeRate.findOne({
//           where: {
//             companyUuid: forwarderCompanyUuid,
//             start: { [sequelize.Op.lte]: new Date() },
//             end: { [sequelize.Op.gte]: new Date() },
//             fromUuid: currency,
//             toUuid: forwarderCompany.currencyUuid
//           },
//           raw: true
//         })))
//       }

//       const prepareCostItems = flow(
//         mapFp((qi) => {
//           // No need if it's not default
//           if (!qi.isDefault) { return }

//           qi.sellExchangeRate = (qi.sellCurrencyUuid === forwarderCompany.currencyUuid)
//             ? 1 : exchangeRates[qi.sellCurrencyUuid]
//           qi.costExchangeRate = (qi.costCurrencyUuid === forwarderCompany.currencyUuid)
//             ? 1 : exchangeRates[qi.costCurrencyUuid]
//           qi.vendorUuid = forwarderCompanyUuid

//           if (!qi[`isFor${bk.shipmentType}`] && !qi.isForCON) { return }

//           if (qi.unit === 'CNTR') {
//             // precompute container size....
//             if (containerUnits[qi.size.toString()]) {
//               return this.formatCostItem(qi, containerUnits[qi.size.toString()])
//             }
//             // Loop though each container size...
//           } else if (['PALLET', 'BAG', 'KGS', 'M3MT', 'HOUR', 'M3', 'MT'].includes(qi.unit)) {
//             return this.formatCostItem(qi)
//           } else if (['SHPMT', 'TRIP', 'ATTAND', 'ATTEND', 'BL', 'SET'].includes(qi.unit)) {
//             return this.formatCostItem(qi)
//           } else if (qi.unit === 'OT') {
//             return this.formatCostItem(qi)
//           }

//           // TODO (SL): Include Base-pre-computed prices (in green in FMS)

//           // Check Container Type & Size
//           // matches qi.unit
//         }),
//         compact,
//         this.sortCostItems
//       )

//       const costItems = prepareCostItems(quotation.quotationItems)
//       return costItems
//     }

//     // let results = {
//     //   'a3a5db93-d9b9-462d-aa97-ab176d5b55c2ACCPAY':
//     //     { costItem: 'a3a5db93-d9b9-462d-aa97-ab176d5b55c2',
//     //       transactionType: 'ACCPAY',
//     //       rate: 323.04,
//     //       draftRate: 0 },
//     //   'a3a5db93-d9b9-462d-aa97-ab176d5b55c2ACCREC':
//     //     { costItem: 'a3a5db93-d9b9-462d-aa97-ab176d5b55c2',
//     //       transactionType: 'ACCREC',
//     //       rate: 347.62,
//     //       draftRate: 347.62 }
//     //   }
//     sumByCostItemTransactionType (bk) {
//       const getVoucherItems = flow(
//         filterFp(v => (v.status !== 'VOID' && v.status !== 'DELETED')),
//         mapFp(v => {
//           const isDraft = v.status === 'DRAFT' || v.status === 'WORKING_DRAFT'
//           return v.voucherItems.map(vi => {
//             return {
//               costItem: vi.costItem.uuid,
//               transactionType: v.transactionType,
//               rate: isDraft ? 0 : vi.rate,
//               draftRate: isDraft ? vi.rate : 0
//             }
//           })
//         }),
//         flattenFp,
//         reduceFp((iter, vi) => {
//           const key = vi.costItem + vi.transactionType
//           if (iter[key]) {
//             iter[key].rate = math.add(vi.rate, iter[key].rate)
//             iter[key].draftRate = math.add(vi.draftRate, iter[key].draftRate)
//           } else {
//             iter[key] = vi
//           }

//           return iter
//         }, {})
//       )

//       return getVoucherItems(bk.vouchers)
//     }

//     computeShortBill (bk) {
//       const costItemTransType = this.sumByCostItemTransactionType(bk)

//       const amount = bk.costItems.reduce((accum, ci) => {
//         return accum
//       }, 0)

//       // console.log(amount)
//       return amount
//     }

//     computeErrorFromQuote (bk, bu, { size, unit = '', quantity, sellRate, costRate, rateType }) {
//       let quoteItem = find(bk.quotation.quotationItems, (qi) => {
//         return qi.unit === bu &&
//           qi.size == size && // Needs to be == coz data is of type string.
//           qi.containerType === unit
//       })

//       if (quoteItem && quoteItem.sellRate !== sellRate) {
//         return {
//           msg: `Unit Sell missmatch from Quotation`,
//           field: 'sellRate',
//           urgency: 'INFO',
//           expectedValue: quoteItem.sellRate,
//           receivedValue: sellRate
//         }
//       }

//       if (quoteItem && quoteItem.costRate !== costRate) {
//         return {
//           msg: `Unit Cost missmatch from Quotation`,
//           field: 'costRate',
//           urgency: 'INFO',
//           expectedValue: quoteItem.costRate,
//           receivedValue: costRate
//         }
//       }

//       return []
//     }

//     computeCostSheetError (bk, costItems) {
//       return costItems.map((ci) => {
//         let error = []
//         let bu = ci.chargeItem.unit

//         ci.errors = error.concat(this.computeErrorFromQuote(bk, bu, ci))
//         return ci
//       })

//       // // Check papers
//       // if (bk.isImport) {
//       //   // Validate bookingDocuments
//       // } else if (bk.isExport) {
//       //   // Validate bookingDocuments
//       // }

//       // // Validate costItems and jobs.
//     }

//     calculateGrossProfit (costItem) {
//       costItem.sellRate = math.multiply(costItem.sellBaseRate, costItem.sellExchangeRate)
//       costItem.sellTotal = math.multiply(costItem.sellRate, costItem.quantity)
//       costItem.costRate = math.multiply(costItem.costBaseRate, costItem.costExchangeRate)
//       costItem.costTotal = math.multiply(costItem.costRate, costItem.quantity)
//       costItem.grossProfit = math.chain(costItem.accountReceivable || 0)
//         .subtract(costItem.accountPayable || 0)
//         .subtract(costItem.cashBook || 0)
//         .subtract(costItem.blankCheque || 0)
//         .done()
//       costItem.estimatedProfit = math.subtract(costItem.sellTotal || 0, costItem.costTotal || 0)

//       return costItem
//     }
//   }

//   return new CostService()
// // }
