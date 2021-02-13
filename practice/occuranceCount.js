// given a sorted array arr, and a number k find the number of occurance of k

const occuranceCount = (arr, k) => {
  const firstOccurance = binarySearch(arr, 0, arr.length, k, 'first');
  const lastOccurance = binarySearch(arr, 0, arr.length, k, 'last');
  return lastOccurance - firstOccurance + 1;
};

/**
 * @param {number[]} arr
 * @param {number} start
 * @param {number} end
 * @param {number} k
 * @param {string} type
 * @returns {number}
 */
const binarySearch = (arr, start, end, k, type) => {
  if (arr.length === 0 || start > end) {
    return -1;
  }
  const mid = Math.floor((start + end) / 2);
  if (arr[mid] === k) {
    if(type === 'first') {
      // at the first position
      if(!arr[mid - 1]) {
        return mid;
      }
      // go to left if previous element is also same
      if(arr[mid - 1] === arr[mid]) {
        return binarySearch(arr, start, mid - 1, k, type);
      }
      // return if previous not same as k
      return mid;
    }
    if(type === 'last') {
      // at the last position
      if(!arr[mid + 1]) {
        return mid;
      }
      // go to right if next element is also same
      if(arr[mid + 1] === arr[mid]) {
        return binarySearch(arr, mid + 1, end, k, type);
      }
      // return if next is not same as k
      return mid;
    }
    return mid;
  } else if (arr[mid] > k) {
    return binarySearch(arr, start, mid - 1, k, type);
  } else if (arr[mid] < k) {
    return binarySearch(arr, mid + 1, end, k, type);
  }
};


console.log(occuranceCount([1,2,3,3,3,3,3,3,4,5,5,7], 3));