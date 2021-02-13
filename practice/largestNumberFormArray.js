/*

Given a list of non negative integers, arrange them in such a manner that they form the largest number possible.
The result is going to be very large, hence return the result in the form of a string.

Example 1:

Input: 
  N = 5
  Arr[] = {3, 30, 34, 5, 9}
  Output: 9534330
Explanation: 
  Given numbers are 
  {3, 30, 34, 5, 9}, 
  the arrangement 9534330 gives the largest value.
*/


const largestNumberFormFromArray = (arr) => {
  arr = arr.sort((a, b) => {
    let aComp = String(a); 
    let bComp = String(b);
    if(aComp.length > bComp.length) {
      const zeros = new Array(aComp.length - bComp.length).fill(0).join('');
      bComp = `${bComp}${zeros}`;
    } else if (aComp.length < bComp.length) {
      const zeros = new Array(bComp.length - aComp.length).fill(0).join('');
      aComp = `${aComp}${zeros}`;
    }
    if(bComp === aComp) {
      return a - b;
    }
    return bComp - aComp;
  });
  return arr.join('');
};


console.log(largestNumberFormFromArray([30, 3, 34, 5, 9])); // 9534330
console.log(largestNumberFormFromArray([3, 30, 34, 5, 9])); // 9534330

console.log(largestNumberFormFromArray([1, 3, 90, 99, 9])); // 9999031
