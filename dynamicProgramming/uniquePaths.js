/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n, memo = {}) {
  const key = `${m}-${n}`;
  if(memo[key]) {
      return memo[key];
  }    
  if(m < 1 || n < 1) {
      return 0n;
  }
  if(m === 1 && n === 1) {
      return 1n;
  }
  const result = uniquePaths(m - 1, n, memo) + uniquePaths(m, n - 1, memo);
  memo[key] = result;
  return result;
};

console.log(uniquePaths(1000, 1000));