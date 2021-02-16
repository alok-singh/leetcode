// const getRemainingString = (small, big) => {
//   if(small.length > big.length) {
//     return false;
//   }
//   let index = 0;
//   for(index = 0; index < small.length; index++) {
//     if(small[index] !== big[index]) {
//       return false;
//     }
//   }
//   return big.substring(index);
// }


// const canConstruct = (word, wordBank, memo = {}) => {
//   if(memo[word]) return memo[word];
//   if(word === '') return true;
//   for(let index = 0; index < wordBank.length; index++) {
//     let remainingString = getRemainingString(wordBank[index], word);
//     if (typeof remainingString === 'string') {
//       const result = canConstruct(remainingString, wordBank, memo);
//       if(result) {
//         memo[word] = result;
//         return true;
//       }
//     }
//   }
//   memo[word] = false;
//   return false;
// };


const canConstruct = (word, wordBank, memo = {}) => {
  if(memo[word]) return memo[word];
  if(word === '') return true;
  for(let index = 0; index < wordBank.length; index++) {
    if (word.indexOf(wordBank[index]) === 0) {
      const suffix = word.slice(wordBank[index].length)
      const result = canConstruct(suffix, wordBank, memo);
      if(result === true) {
        memo[word] = true;
        return true;
      }
    }
  }
  memo[word] = false;
  return false;
};



// console.log(canConstruct('abc', ['ab', 'c'])); // true
console.log(canConstruct('eeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee'])); // false
// console.log(canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee'])); // false