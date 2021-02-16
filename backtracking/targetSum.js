// https://leetcode.com/problems/target-sum/

/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
const findTargetSumWays = (nums, S, currentIndex = 0) => {
  if (currentIndex === nums.length && S === 0) {
    return 1;
  }
  if (currentIndex >= nums.length) {
    return 0;
  }
  return (
    findTargetSumWays(nums, S - nums[currentIndex], currentIndex + 1) +
    findTargetSumWays(nums, S + nums[currentIndex], currentIndex + 1)
  );
};

// /**
//  * @param {number[]} nums
//  * @param {number} S
//  * @return {number}
//  */
// var findTargetSumWays = function(nums, S) {
//   let cache = [];
//   return helper(nums, 0, 0, S);
// };

// var helper = function(nums, i, sum, S) {
//   if (nums.length === i) {
//       if (sum === S) {
//           return 1;
//       } else {
//           return 0;
//       }
//   }
//   return helper(nums, i + 1, sum + nums[i], S) + helper(nums, i + 1, sum - nums[i], S);
// }


console.time('start');
console.log(
  findTargetSumWays(
    [1, 1, 1],
    3
  )
); // 5
console.timeEnd('start');