const helper = (nums) => {
  if (!nums.length) {
    return 0;
  }
  const M = [];
  for (let i in nums) {
    const option1 = (M[i - 2] || 0) + nums[i];
    const option2 = M[i - 1] || 0;
    M[i] = Math.max(option1, option2);
  }
  const value = M.pop();
  return value;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = nums => {
  if(nums.length === 0) {
    return 0;
  }
  if(nums.length === 1) {
    return nums[0];
  }
  let option1 = helper(nums.slice(1));
  let option2 = helper(nums.slice(0, nums.length - 1));
  return Math.max(option1, option2);
};

const testCases = [
  {
    array: [2, 3, 2, 4],
    result: 7,
  },
  {
    array: [2, 5],
    result: 5,
  },
  {
    array: [],
    result: 0,
  },
  {
    array: [0],
    result: 0,
  },
  {
    array: [1, 2, 3, 1],
    result: 4,
  },
];

for (let test of testCases) {
  let result = rob(test.array);
  if (result === test.result) {
    console.log("pass");
  } else {
    console.log("fail");
    console.log({ test, result });
  }
}
