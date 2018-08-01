// tslint:disable:no-expression-statement
import { test } from 'ava';
import { calculateGrossProfit } from './cost';

test('getABC', async t => {
  t.deepEqual(await calculateGrossProfit({}), ['a', 'b', 'c']);
});
