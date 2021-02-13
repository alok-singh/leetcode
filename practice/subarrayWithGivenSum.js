/**
 * @param {number} targetSum  
 * @param {Array} list 
 */

const subArrayWithGivenSum = (targetSum, list) => {
  for(let i = 0; i < list.length; i++) {
    let count = 0;
    let currentSum = 0;
    while(currentSum < targetSum && list[count + i]) {
      currentSum = currentSum + list[count + i]; 
      count = count + 1;
    }
    if(currentSum === targetSum) {
      return [i + 1, i + count];
    }
  }
  return -1;
};

/**
targetSum = 12
list = [1,2,3,7,5]
Output: 1 3
 */

console.log(subArrayWithGivenSum(12, [1,2,3,7,5])); // [2, 4]
console.log(subArrayWithGivenSum(15, [1,2,3,4,5,6,7,8,9,10])); // [1, 5]


