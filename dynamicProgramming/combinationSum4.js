/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const combinationSum4 = (nums, target) => {
  const CS = [1];
  for (let currentTarget = 1; currentTarget <= target; currentTarget++) {
    CS[currentTarget] = 0;
    for (let i = 0; i < nums.length; i++) {
      if (currentTarget - nums[i] >= 0) {
        CS[currentTarget] = CS[currentTarget] + CS[currentTarget - nums[i]];
      }
    }
  }
  return CS[target] || 0;
};


const testCases = [
  {
    array: [1, 2, 3],
    target: 4,
    result: 7
  },
  {
    array: [2, 3],
    target: 4,
    result: 1
  },
  {
    array: [3, 5],
    target: 4,
    result: 0
  }
];

for (let test of testCases) {
  let result = combinationSum4(test.array, test.target);
  if (result === test.result) {
    console.log("pass");
  } else {
    console.log("fail");
    console.log({ test, result });
  }
}