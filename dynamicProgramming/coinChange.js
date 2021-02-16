const coinChange = (coins, amount) => {
  if (amount === 0) {
    return 0;
  }
  if (coins.length === 0) {
    return 0;
  }
  // bottom up approach
  // MC[n] = min of (MC[n - coins[i]] + 1) where i varies from 0 to coins.length
  const MC = [0];
  for (let i = 1; i <= amount; i++) {
    let min = Number.POSITIVE_INFINITY;
    for (let j = 0; j < coins.length; j++) {
      if(typeof MC[i - coins[j]] !== 'undefined') {
        if (min >  MC[i - coins[j]]) {
          min =  MC[i - coins[j]];
        }
      }
    }
    MC[i] = min + 1;
  }
  let result = MC.pop();
  result = (result === Number.POSITIVE_INFINITY) ? -1 : result
  return result;
};


const testCases = [
  {
    array: [1,2,5],
    amount: 11,
    result: 3
  },
  {
    array: [1],
    amount: 2,
    result: 2
  },
  {
    array: [2],
    amount: 3,
    result: -1
  },
  {
    array: [2],
    amount: 0,
    result: 0
  },
  // {
  //   array: [1],
  //   amount: 1,
  // }
];

for (let test of testCases) {
  let result = coinChange(test.array, test.amount);
  if (result === test.result) {
    console.log("pass");
  } else {
    console.log("fail");
    console.log({ test, result });
  }
}