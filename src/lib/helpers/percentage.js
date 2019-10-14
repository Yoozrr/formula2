import * as math from 'mathjs'
import { opBigNumber } from "./opBigNumber"

const defaultFnc = ({ accountReceivable, grossProfit }) => {
  const percentage = accountReceivable
    ? opBigNumber(
      math.multiply, 
      opBigNumber(math.divide, grossProfit, accountReceivable), 
      100)
    : 0
  
  return percentage
}

export default {
  default: defaultFnc
}