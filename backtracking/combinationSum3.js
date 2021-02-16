/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
const combinationSum3 = (k, n, startNumber = 1) => {
  if(k === 0 && n === 0) {
      return [[]];
  }
  if(k < 0 || n < 0) {
      return null;
  }
  
  let resultList = [];
  for(let number = startNumber; number <= 9; number++) {
      let result = combinationSum3(k - 1, n - number, number + 1);
      if (result) {
        result = result.map(subArr => {
          subArr.push(number);
          return subArr;
        });
        resultList = resultList.concat(result);
      }
  }
  return resultList;
};

// console.log(combinationSum3(3, 7)); // [[1,2,4]]
console.log(combinationSum3(100, 450)); // [[1,2,6],[1,3,5],[2,3,4]]