// in 2d matrix we can use the same binary search algorithm
//  we just need to change the way we treat indices

const binarySearch2D = (arr, start, end, k) => {
  if (start > end) {
    return -1;
  }
  const mid = Math.floor((start + end) / 2);
  const row = Math.floor((mid / arr[0].length));
  const column = mid % arr[0].length;
  // console.log(mid, row, column, arr[row][column]);
  if (arr[row][column] === k) {
    return [row, column];
  }
  if (arr[row][column] < k) {
    return binarySearch2D(arr, mid + 1, end, k);
  } else {
    return binarySearch2D(arr, start, mid - 1, k);
  }
};

const array = [
  [0, 1, 2, 3],
  [4, 5, 6, 7],
  [8, 9, 10, 11],
];

console.log(binarySearch2D(array, 0, array.length*array[0].length - 1, 0)); // [0, 0]
console.log(binarySearch2D(array, 0, array.length*array[0].length - 1, 1)); // [0, 1]
console.log(binarySearch2D(array, 0, array.length*array[0].length - 1, 7)); // [1, 3]
console.log(binarySearch2D(array, 0, array.length*array[0].length - 1, 9)); // [2, 1]
console.log(binarySearch2D(array, 0, array.length*array[0].length - 1, 3)); // [0, 3]
console.log(binarySearch2D(array, 0, array.length*array[0].length - 1, 11)); // [2, 3]
console.log(binarySearch2D(array, 0, array.length*array[0].length - 1, 18)); // -1
console.log(binarySearch2D(array, 0, array.length*array[0].length - 1, -1)); // -1
