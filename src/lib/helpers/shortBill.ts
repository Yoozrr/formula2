import * as math from 'mathjs'

export default ({ accrual, costTotal, accountPayable, accountPayableDraft }) => {
  // Short Bill = cost - AP - APDraft
  //   show If AR < AP (neg accrual)
  //   Or show If EstCost < AP (neg accrual)
  let shortBill = accrual < 0 ?
      math.chain(math.bignumber(costTotal))
      .subtract(math.bignumber(accountPayable || 0))
      .subtract(math.bignumber(accountPayableDraft || 0))
      .done() : 0

  shortBill = math.number(shortBill)

  return shortBill
}
