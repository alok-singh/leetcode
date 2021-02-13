/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

// var combinationSum = function (candidates, target, currentArr = [], mainArr = {}) {
//   const key = currentArr.sort((a, b) => a - b).join('-');
//   if(mainArr[key]) {
//     return true;
//   }
//   if (target === 0) {
//     mainArr[key] = currentArr;
//     return true;
//   }
//   if (target < 0) {
//     mainArr[key] = true;
//     return true;
//   }
//   for (let i = 0; i < candidates.length; i++) {
//     const remainder = target - candidates[i];
//     const result = combinationSum(candidates, remainder, [...currentArr, candidates[i]], mainArr);    
//   }
//   return Object.values(mainArr).filter(item => typeof item !== 'boolean');
// };

const combinationSum = (candidates, target) => {
  if(target === 0) return [[]];
  if(target < 0) return [];

  let list = [];
  for(let i = 0; i < candidates.length; i++) {
    const result = combinationSum(candidates, target - candidates[i]);
    if (result) {
      list = list.concat(result.map(item => {
        return [...item, candidates[i]];
      }));
    }
  }

  return list;
}


console.log(combinationSum([2,3,6,7], 7));
// console.log(combinationSum([1,2,5,25], 100)); 
