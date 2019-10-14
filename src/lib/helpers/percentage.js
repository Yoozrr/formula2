import * as math from 'mathjs'
import { opBigNumber } from "./opBigNumber"

export default ({ accountReceivable, grossProfit }) => {
  const percentage = accountReceivable
    ? opBigNumber(
      math.multiply, 
      opBigNumber(math.divide, grossProfit, accountReceivable), 
      100)
    : 0
  
  return percentage
}
