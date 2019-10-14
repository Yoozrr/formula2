import * as math from 'mathjs'

export const opBigNumber = (fn, arg1, arg2) => {
  return math.number(fn(math.bignumber(arg1), math.bignumber(arg2)))
}
