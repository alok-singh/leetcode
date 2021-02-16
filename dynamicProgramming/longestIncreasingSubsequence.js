/**
 * @param {number[]} nums
 * @return {number}
 */
const lengthOfLIS = (nums) => {
  if (nums.length === 0) {
    return 0;
  }
  if (nums.length === 1) {
    return 1;
  }
  const LIS = new Array(nums.length).fill(1);
  for (let i = 0; i < nums.length; i++) {
    let max = -1;
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        if (max < LIS[j] + 1) {
          max = LIS[j] + 1;
          LIS[i] = max;
        }
      }
    }
  }
  // console.log(LIS);
  return Math.max(...LIS);
};

const testCases = [
  {
    array: [2, 3, 2, 4],
    result: 3,
  },
  {
    array: [2, 5],
    result: 2,
  },
  {
    array: [],
    result: 0,
  },
  {
    array: [0],
    result: 1,
  },
  {
    array: [1, 2, 3, 1],
    result: 3,
  },
  {
    array: [4, 10, 4, 3, 8, 9],
    result: 3,
  },
];

for (let test of testCases) {
  let result = lengthOfLIS(test.array);
  if (result === test.result) {
    console.log("pass");
  } else {
    console.log("fail");
    console.log({ test, result });
  }
}
