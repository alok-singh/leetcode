/* const merge = (l1, start1, end1, start2, end2) => {
  let index = start1;
  let retList = [];
  let value1 = l1[start1];
  let value2 = l1[start2];
  
  while (true) {
    if (start1 <= end1 && start2 <= end2) {
      if (value1 <= value2) {
        retList[index] = value1;
        start1++;
        value1 = l1[start1];
      } else {
        retList[index] = value2;
        start2++;
        value2 = l1[start2];
      }
    } else if (start1 <= end1) {
      retList[index] = value1;
      start1++;
      value1 = l1[start1];
    } else if (start2 <= end2) {
      retList[index] = value2;
      start2++;
      value2 = l1[start2];
    } else {
      break;
    }
    index++;
  }
  return retList;
};
 */

const merge = (l1, l2) => {
  let index = 0;
  let start1 = 0;
  let start2 = 0;
  let retList = [];
  while (true) {
    if (l1[start1] && l2[start2]) {
      if (l1[start1] <= l2[start2]) {
        retList[index] = l1[start1];
        start1++;
      } else {
        retList[index] = l2[start2];
        start2++;
      }
    } else if (l1[start1]) {
      retList[index] = l1[start1];
      start1++;
    } else if (l2[start2]) {
      retList[index] = l2[start2];
      start2++;
    } else {
      break;
    }
    index++;
  }
  return retList;
};

const mergeSort = (list, start = 0, end = list.length) => {
  if (start === end) {
    return [list[start]];
  }
  let newEnd = Math.floor((start + end) / 2);
  let list1 = mergeSort(list, start, newEnd);
  let list2 = mergeSort(list, newEnd + 1, end);
  return merge(list1, list2);
};

// console.log(merge([1, 9, 14, 3, 5], 0, 2, 3, 4));
console.log(mergeSort([1, 9, 14, 3, 4, 2, 1, 0, 1, 5]));
