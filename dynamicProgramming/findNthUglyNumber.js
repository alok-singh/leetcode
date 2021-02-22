/**
 * @param {number} n
 * @return {number}
 */
const nthUglyNumber = (n) => {
  const dp = [1, 2, 3, 4, 5];

  if (dp[n - 1]) {
    return dp[n - 1];
  }

  for (let i = 4; i < n; i++) {
    let lastNumber = dp[dp.length - 1];
    let min = Number.POSITIVE_INFINITY;
    for (let j = 0; j < dp.length; j++) {
      if (min > dp[j] * 2 && dp[j] * 2 > lastNumber) {
        min = dp[j] * 2;
      }
      if (min > dp[j] * 3 && dp[j] * 3 > lastNumber) {
        min = dp[j] * 3;
      }
      if (min > dp[j] * 5 && dp[j] * 5 > lastNumber) {
        min = dp[j] * 5;
      }
    }
    dp[dp.length] = min;
  }
  return dp[n - 1];
};


for(let i = 0; i < 20; i++) {
  console.log(nthUglyNumber(i+1));
}
