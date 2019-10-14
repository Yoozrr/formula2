import * as math from 'mathjs'
import { opBigNumber } from "./opBigNumber"

const sellMinusCostGreater = (ic) => {
  let grossProfit
  // Gross profit computed if no cost or both AP and AR exisit
  // GP = Only compute after AR
  // (SellTotal > AR ? SellTotal : AR) -
  // (CostTotal > (AP + Accrual) ? CostTotal-Accrual : (AP + Accrual))
  const sellAmt = ci.sellTotal > ci.accountReceivable 
    ? math.bignumber(ci.sellTotal || 0 )
    : math.bignumber(ci.accountReceivable || 0)

  const costAmt = ci.costTotal > (math.add(math.bignumber(ci.accountPayable || 0), math.bignumber(ci.accrual || 0)))
    ? math.subtract(math.bignumber(ci.costTotal || 0), math.bignumber(ci.accrual || 0))
    : math.add(math.bignumber(ci.accountPayable || 0), math.bignumber(ci.accrual || 0))

  grossProfit = ci.accountReceivable > 0 
    ? math.chain(sellAmt)
      .subtract(costAmt)
      .done() 
    : 0
  
  grossProfit = math.number(grossProfit)

  return grossProfit
}

const defaultFnc = (ci) => {
  let grossProfit
  
  grossProfit = ci.costTotal === 0 || (ci.accountReceivable > 0 && ci.accountPayable > 0) ?
    math.chain(math.bignumber(ci.accountReceivable || 0))
      .subtract(math.bignumber(ci.accountPayable || 0))
      .subtract(math.bignumber(ci.cashBook || 0))
      .subtract(math.bignumber(ci.accrual || 0))
      .subtract(math.bignumber(ci.blankCheque || 0))
      .done() :
    0

  grossProfit = math.number(grossProfit)

  return grossProfit
}

export default {
  sellMinusCostGreater,
  default: defaultFnc
}