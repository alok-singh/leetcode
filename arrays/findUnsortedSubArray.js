/**
 * @param {number[]} nums
 * @return {number}
 */
const findUnsortedSubarray = (nums) => {
  // if the array is not sorted
  // the most obvious answer would be
  // the whole array

  // starting from begining the element can be
  // left if and only if it is the minimum of the
  // array right of it

  // starting from the end the element can be
  // left if and only if that number is the maximum of the
  // array left of it

  let start = 0;
  let end = nums.length - 1;
  let maxArray = [];
  let minArray = [];

  let max = Number.NEGATIVE_INFINITY;
  let min = Number.POSITIVE_INFINITY;

  for (let i = nums.length - 1; i >= 0; i--) {
    if (min > nums[i]) {
      min = nums[i];
    }
    minArray[i] = min;
  }
  for (let i = 0; i < nums.length; i++) {
    if (max < nums[i]) {
      max = nums[i];
    }
    maxArray[i] = max;
  }

  while (start <= end) {
    if (nums[start] <= minArray[start]) {
      start++;
    }
    if (nums[end] >= maxArray[end]) {
      end--;
    }
    if (nums[start] > minArray[start] && nums[end] < maxArray[end]) {
      break;
    }
  }
  return end - start + 1 < 0 ? 0 : end - start + 1;
};

// findUnsortedSubarray([2,6,4,8,10,9,15]);
console.log(findUnsortedSubarray([8, 1, 3, 4, 2, 9, 10, 11]));
console.log(findUnsortedSubarray([1, 3, 4, 9, 10, 11]));
console.log(findUnsortedSubarray([1, 2, 3, 3, 3]));
console.log(findUnsortedSubarray([]));
console.log(findUnsortedSubarray([1]));
console.log(findUnsortedSubarray([2, 1]));
