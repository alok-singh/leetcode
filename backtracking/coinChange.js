/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
const coinChange = (coins, amount) => {
  if (amount === 0) {
    return [[]];
  }
  if (amount < 0) {
    return null;
  }
  const resultList = [];
  for (let i = 0; i < coins.length; i++) {
    let result = coinChange(coins, amount - coins[i]);
    if (result) {
      result = result.map(item => {
        item.push(coins[i]);
        return item;
      });
      resultList.push(...result);
    }
  }
  return resultList;
};

const testCases = [
  {
    array: [2,5],
    amount: 11,
  },
  {
    array: [2],
    amount: 3,
  },
  {
    array: [2],
    amount: 0,
  }
];

for (let test of testCases) {
  let result = coinChange(test.array, test.amount);
  console.log(result);
}