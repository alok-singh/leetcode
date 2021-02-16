// var concatNextParanthesis = function (arr) {
//   return arr.reduce((acc, item) => {
//     acc.push("(" + item + ")");
//     acc.push(item + "()");
//     acc.push("()" + item);
//     return acc;
//   }, []);
// };

// /**
//  * @param {number} n
//  * @return {string[]}
//  */
// var generateParenthesis = function (n) {
//   if (n == 1) {
//     return ["()"];
//   }
//   let retArray = ["()"];
//   for (let i = 1; i < n; i++) {
//     retArray = concatNextParanthesis(retArray);
//   }
//   return Object.keys(
//     retArray.reduce((acc, item) => {
//       acc[item] = true;
//       return acc;
//     }, {})
//   );
// };

// [
//   "(((())))",
//   "((()()))",
//   "((())())",
//   "((()))()",
//   "(()(()))",
//   "(()()())",
//   "(()())()",
//   // "(())(())",
//   "(())()()",
//   "()((()))",
//   "()(()())",
//   "()(())()",
//   "()()(())",
//   "()()()()",
// ];

// [
//   "(((())))",
//   "((()))()",
//   "()((()))",
//   "((())())",
//   "(())()()",
//   "()(())()",
//   "(()(()))",
//   "()()(())",
//   "((()()))",
//   "(()())()",
//   "()(()())",
//   "(()()())",
//   "()()()()",
// ];


const paranthesisValidator = (arr) => {
  const validateList = [];
  for(let index = 0; index < arr.length; index++) {
    if(arr[index] === '(') {
      validateList.push(arr[index]);
    } else if(validateList.length){
      validateList.pop();
    } else {
      return false;
    }
  }
  return validateList.length === 0;
}

// storing in arguments
// const generateParenthesis = (n, currentString = '', mainArray = []) => {
//   if(currentString.length === 2*n) {
//     // console.log(currentString);
//     const isValid = paranthesisValidator(currentString);
//     if(isValid) {
//       mainArray.push(currentString);
//     }
//     return;
//   }
//   generateParenthesis(n, `${currentString}(`, mainArray);
//   generateParenthesis(n, `${currentString})`, mainArray);

//   return mainArray;
// }


// storing backtracking

const generateParenthesis = (n, opening = 0, closing = 0, memo = {}) => {
  const key = `${opening}-${closing}`;
  if(memo[key]) {
    return memo[key];
  }
  if(opening === n && closing === n) {
    return [''];
  }
  let resultOpening = [];
  let resultClosing = [];
  resultOpening = opening < n ? generateParenthesis(n, opening + 1, closing, memo) : [];
  resultClosing = closing < opening ? generateParenthesis(n, opening, closing + 1, memo) : [];
  const result = [
    ...resultOpening.map(item => `(${item}`),
    ...resultClosing.map(item => `)${item}`)
  ];
  memo[key] = result;
  return result;
}

console.time('time');
console.log(generateParenthesis(13).filter(item => paranthesisValidator(item)).length);
console.timeEnd('time');


var generateParenthesis_solution = function(n) {
  if (n === 0) {
    return [];
  }
  
  const result = [];
  
  let openParens = n;
  let closedParens = n;
  
  const createCombinations = (openParensRemaining, closedParensRemaining, combo) => {
	if (openParensRemaining === 0 && closedParensRemaining === 0) {
	  result.push(combo);
	}

    if (openParensRemaining > 0) {
      createCombinations(openParensRemaining - 1, closedParensRemaining, combo +"(")
    }
    if (closedParensRemaining > 0 && closedParensRemaining > openParensRemaining) {
      createCombinations(openParensRemaining, closedParensRemaining - 1, combo + ")")
    }
  }
  createCombinations(openParens, closedParens, "")
  
  return result;
};

// console.time('time');
// console.log(generateParenthesis_solution(20).length);
// console.timeEnd('time');