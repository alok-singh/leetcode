const kthSmallest = (matrix, k) => {
  const flattenList = [];
  const headArray = (new Array(matrix.length)).fill(0);
  
  while(flattenList.length < k) {
    let minIndex = -1;
    let min = Number.POSITIVE_INFINITY;
    for(let i = 0; i < matrix.length; i++) {
      if(typeof matrix[i][headArray[i]] !== "undefined" && min > matrix[i][headArray[i]]) {
        minIndex = i;
        min = matrix[i][headArray[i]];
      }
    }
    headArray[minIndex]++;
    flattenList.push(min);
  }
  console.log(flattenList);
  return flattenList[flattenList.length - 1];
};

console.log(kthSmallest([[0,0,0],[2,7,9],[7,8,11]], 7));

// 1, 5, 9, 10, 11, 12, 13, 13, 15