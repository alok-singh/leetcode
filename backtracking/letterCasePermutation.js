// https://leetcode.com/problems/letter-case-permutation/

/**
 * @param {string} S
 * @return {string[]}
 */
// const letterCasePermutation = (S, currentString = '') => {
//   if(currentString.length === S.length) {
//     return [''];
//   }

//   let currentChar = S[currentString.length];
//   if(currentChar.toUpperCase() === currentChar.toLowerCase()) {
//     let resultCapital = letterCasePermutation(S, currentString + currentChar.toUpperCase());
//     resultCapital = resultCapital.map(string => `${currentChar.toUpperCase()}${string}`);
//     return resultCapital;
//   } else {
//     let resultCapital = letterCasePermutation(S, currentString + currentChar.toUpperCase());
//     let resultSmall = letterCasePermutation(S, currentString + currentChar.toLowerCase());
//     resultCapital = resultCapital.map(string => `${currentChar.toUpperCase()}${string}`);
//     resultSmall = resultSmall.map(string => `${currentChar.toLowerCase()}${string}`);
//     return [...resultCapital, ...resultSmall];
//   }

// };

const letterCasePermutation = (S, currentString = '') => {
    const retList = [];
    for(let i = 0; i < S.length - 1; i++) {
        if(isNaN(parseInt(S[i]))) {
            retList.push(`${S.substring(0, i)}${S[i].toUpperCase()}${S.substring(i + 1)}`);
            retList.push(`${S.substring(0, i)}${S[i].toLowerCase()}${S.substring(i + 1)}`);
        }
    }
    return retList;
}

console.log(letterCasePermutation('abc'));