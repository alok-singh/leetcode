const { arr } = require("./longArray");

// const canJump = (arr) => {
//   const queue = [0];
//   let maxQueueLength = 0;
//   while (queue.length) {
//     maxQueueLength = queue.length > maxQueueLength ? queue.length : maxQueueLength
//     const currentIndex = queue.shift();
//     if (currentIndex === arr.length - 1) {
//       console.log(maxQueueLength);
//       return true;
//     }
//     for (let i = 1; i <= arr[currentIndex]; i++) {
//       if (arr[currentIndex + i] >= 0) {
//         queue.push(currentIndex + i);
//       }
//       if (arr[currentIndex + i] >= arr.length - (currentIndex + i) - 1) {
//         console.log(maxQueueLength);
//         return true;
//       }
//     }
//     arr[currentIndex] = -1; // visited
//   }
//   console.log(maxQueueLength);
//   return false;
// };

/**
 * @param {number[]} nums
 * @return {boolean}
 */
// const canJump = (arr, currentIndex = 0, memo = {}, visited = {}) => {
//   // if(Object.keys(visited).length > 10) {
//   //   process.exit(1);
//   // }
//   visited[currentIndex] = true;
//   // console.log(visited);
//   if(typeof memo[currentIndex] !== 'undefined') {
//     return memo[currentIndex];
//   }
//   if (currentIndex >= arr.length - 1) {
//     memo[currentIndex] = true;
//     return true;
//   }
//   const postionOptions = arr[currentIndex];
//   for (let jump = postionOptions; jump > 0; jump--) {
//     if(!visited[currentIndex + jump]) {
//       let result = canJump(arr, currentIndex + jump, memo, visited);
//       memo[currentIndex + jump] = result;
//       if(result) {
//         return true;
//       }
//     }
//   }
//   memo[currentIndex] = false;
//   return false;
// };


// const canJump = (arr) => {
  
//   // if array lenght is 1 then alwyas can reach the end
//   if(arr.length <= 1) {
//     return true;
//   }
  
//   // can reach the end if there is no 0 in the array
//   if(arr.indexOf(0) === -1) {
//     return true;
//   }

//   // itreate through every point and maintain a the maxium distance 
//   // that can be reached from there

//   let maxReachIndex = 0;
//   for(let i = 0; i < arr.length; i++) {
//     console.log(maxReachIndex);
//     if(maxReachIndex >= arr.length - 1) {
//       return true;
//     }
//     if(arr[i]) {
//       maxReachIndex = Math.max(arr[i] + i, maxReachIndex);
//     } else {
//       if(maxReachIndex === i) {
//         return false;
//       }
//     }
//   }
//   return false;
// }

var canJump = function(nums) {
  let lP = nums.length-1;
  for(let i=nums.length-2; i>=0; i--){
      if(nums[i]+i>=lP){
          lP=i
      }
  }
  return lP===0
};



console.log(arr.length);
console.time("runtime");
console.log(canJump([5, 1, 2, 0, 2, 2, 2, 0, 1, 0]));
// console.log(canJump(arr));
console.timeEnd("runtime");
