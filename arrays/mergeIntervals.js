const mergeIntervalItem = (arr1, arr2) => {
  const retList = [];
  let index1 = 0;
  let index2 = 0;
  while (true) {
    if (
      typeof arr1[index1] !== "undefined" &&
      typeof arr2[index2] !== "undefined"
    ) {
      const [a, b] = arr1[index1];
      const [c, d] = arr2[index2];
      if (a < c) {
        if (b < c) {
          retList.push([a, b], [c, d]);
          index1++;
          index2++;
        } else if (d >= b) {
          retList.push([a, d]);
          index1++;
          index2++;
        } else {
          retList.push([a, b]);
          index1++;
          index2++;
        }
      } else {
        if (d < a) {
          retList.push([c, d], [a, b]);
          index1++;
          index2++;
        } else if (d <= b) {
          retList.push([c, b]);
          index1++;
          index2++;
        } else {
          retList.push([c, d]);
          index1++;
          index2++;
        }
      }
    } else if (typeof arr1[index1] !== "undefined") {
      retList.push(arr1[index1]);
      index1++;
    } else if (typeof arr2[index2] !== "undefined") {
      retList.push(arr2[index2]);
      index2++;
    } else {
      break;
    }
  }
  return retList;
};

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

const merge = (intervals, start = 0, end = intervals.length - 1) => {
  if (start === end) {
    return [intervals[start]];
  }
  const mid = Math.floor((start + end) / 2);
  const left = merge(intervals, start, mid);
  const right = merge(intervals, mid + 1, end);
  const result = mergeIntervalItem(left, right);
  console.log(start, end, result);
  return result;
};

console.log(
  mergeIntervalItem(
    [
      [2, 3],
      [6, 7],
      [4, 5],
    ],
    [[1, 10]]
  )
);

console.log(merge([[2,3],[4,5],[6,7],[8,9]]));
