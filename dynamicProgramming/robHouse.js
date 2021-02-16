/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = (nums) => {
  if (!nums.length) {
    return 0;
  }
  const M = [];
  let selectionList = [];
  for (let i in nums) {
    const option1 = (M[i - 2] || 0) + nums[i];
    const option2 = (M[i - 1] || 0);
    M[i] = Math.max(option1, option2);
    if (option1 > option2) {
      selectionList.push([...(selectionList[i - 2] || []), i]);
    } else {
      selectionList.push([...(selectionList[i - 1] || [])]);
    }
  }
  const value = M.pop();
  console.log(selectionList.pop(), value);
  return value;
};

const testCases = [
  {
    array: [2, 3, 2, 4],
    result: 7,
  },
  {
    array: [2, 0, 0, 2],
    result: 4,
  },
  {
    array: [],
    result: 0,
  },
  {
    array: [1, 2, 0, 3, 100, 0, 5],
    result: 107,
  },
  {
    array: [100, 2, 10, 30, 100, 0],
    result: 210,
  },
  {
    array: [1,2,3],
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
