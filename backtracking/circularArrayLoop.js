/**
 * @param {number[]} nums
 * @return {boolean}
 */
const circularArrayLoop = (nums) => {
  if (nums.length === 0) {
    return false;
  }
  let visited = {};
  let index = 0;
  const isForwardDirection = nums[index] > 0;
  while (true) {
    let newIndex = index + nums[index];
    if (visited[index]) {
      if (Object.keys(visited).length > 2) {
        return true;
      }
      return false;
    } else {
      if (isForwardDirection && index < newIndex) {
        visited[index] = true;
      } else if (!isForwardDirection && index > newIndex) {
        visited[index] = true;
      } else if (isForwardDirection && index > newIndex) {
        return false;
      } else if (!isForwardDirection && index < newIndex) {
        return false;
      }
      index = (newIndex + nums.length) % nums.length;
    }
  }
};

const testCases = [
  { nums: [2, -1, 1, 2, 2], result: true },
  { nums: [-1, 2], result: false },
  { nums: [-2, 1, -1, -2, -2], result: false },
  { nums: [], result: false },
  { nums: [-1, -2, -3, -4, -5], result: false },
];

for (test of testCases) {
  const result = circularArrayLoop(test.nums);
  if (result !== test.result) {
    console.log("failed");
    console.log("returned", result);
    console.log("expected", test.result);
    console.log(test);
  } else {
    console.log("passed");
  }
}
