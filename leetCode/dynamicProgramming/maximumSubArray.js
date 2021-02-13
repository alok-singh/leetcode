/**
 * @param {number[]} nums
 * @return {number}
 */
// const maxSubArray = function (nums) {
//   let globalMax = undefined;

//   const cumulativeSum = nums.reduce((acc, item, index) => {
//     acc[index] = (acc[index - 1] || 0) + item;
//     return acc;
//   }, []);

//   globalMax = cumulativeSum[cumulativeSum.length - 1];
//   const matrix = cumulativeSum.reduce((acc, item, index) => {
//     acc[index] = [item];
//     if (globalMax < item) {
//       globalMax = item;
//     }
//     let subCumulativeSum = 0;
//     for (let i = 0; i < index; i++) {
//       subCumulativeSum = subCumulativeSum + nums[i];
//       acc[index].push(item - subCumulativeSum);
//       if (globalMax < item - subCumulativeSum) {
//         globalMax = item - subCumulativeSum;
//       }
//     }
//     return acc;
//   }, []);

//   console.log(matrix);
//   return globalMax;
// };



const maxSubArray = (nums) => {
  let maxSum = nums[0];
  let sum = 0;
  for(let index = 0; index < nums.length; index++) {
    sum = Math.max(nums[index], nums[index] + sum);
    maxSum = Math.max(maxSum, sum);
  }
  return maxSum;
}


console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
