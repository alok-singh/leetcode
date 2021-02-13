// https://leetcode.com/problems/subsets/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsets_a = (nums, currentIndex = 0, currentArray = [], mainArray = []) => {
  if (currentIndex === nums.length) {
      mainArray.push(currentArray);
      return;
  }
  subsets_a(nums, currentIndex + 1, [...currentArray, nums[currentIndex]], mainArray);
  subsets_a(nums, currentIndex + 1, [...currentArray], mainArray);
  return mainArray;
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsets_b = (nums, currentIndex = 0) => {
  if (currentIndex === nums.length) {
    return [[]];
  }
  const selectWays = subsets_b(nums, currentIndex + 1);
  return [
    ...selectWays,
    ...selectWays.map((subArr) => subArr.concat(nums[currentIndex])),
  ];
};


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsets_c = (nums) => {
  let retArray = [[]];
  for(let index = 0; index < nums.length; index++) {
    retArray = [...retArray, ...retArray.map(subArr => subArr.concat(nums[index]))];
  }
  return retArray;
};



// console.log(subsets_a([1, 2,3,4,5,6,7,8,9]).length);
// console.log(subsets_b([1, 2,3,4,5,6,7,8,9]).length);

const testArr = new Array(21).fill(0).map((item, index) => index + 1);

console.time('subsets_a');
console.log(subsets_a(testArr).length);
console.timeEnd('subsets_a');

console.time('subsets_b');
console.log(subsets_b(testArr).length);
console.timeEnd('subsets_b');

console.time('subsets_c');
console.log(subsets_c(testArr).length);
console.timeEnd('subsets_c');