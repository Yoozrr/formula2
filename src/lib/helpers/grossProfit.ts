import * as math from 'mathjs'

export const sellMinusCostGreater = ({ sellTotal, costTotal, accountReceivable, accountPayable, accrual }) => {
  let grossProfit
  // Gross profit computed if no cost or both AP and AR exisit
  // GP = Only compute after AR
  // (SellTotal > AR ? SellTotal : AR) -
  // (CostTotal > (AP + Accrual) ? CostTotal-Accrual : (AP + Accrual))
  const sellAmt = sellTotal > accountReceivable 
    ? math.bignumber(sellTotal || 0 )
    : math.bignumber(accountReceivable || 0)

  const costAmt = costTotal > (math.add(math.bignumber(accountPayable || 0), math.bignumber(accrual || 0)))
    ? math.subtract(math.bignumber(costTotal || 0), math.bignumber(accrual || 0))
    : math.add(math.bignumber(accountPayable || 0), math.bignumber(accrual || 0))

  grossProfit = accountReceivable > 0 
    ? math.chain(sellAmt)
      .subtract(costAmt)
      .done() 
    : 0
  
  grossProfit = math.number(grossProfit)

  return grossProfit
}

export default ({ costTotal, accountReceivable, accountPayable, cashBook, accrual, blankCheque }) => {
  let grossProfit
  
  grossProfit = costTotal === 0 || (accountReceivable > 0 && accountPayable > 0) ?
    math.chain(math.bignumber(accountReceivable || 0))
      .subtract(math.bignumber(accountPayable || 0))
      .subtract(math.bignumber(cashBook || 0))
      .subtract(math.bignumber(accrual || 0))
      .subtract(math.bignumber(blankCheque || 0))
      .done() :
    0

  grossProfit = math.number(grossProfit)

  return grossProfit
}
