const isPalindrome = (string, start, end) => {
  let result = true;
  let i = start;
  let j = end;
  while(i < j) {
    if(string[i] !== string[j]) {
      return false;
    }
    i++;
    j--;
  }
  return result;
}

/**
 * @param {string} s
 * @return {number}
 */
const brute_force_countSubstrings = string => {
  let count = 0;
  // brute force solution
  // O(n^3)
  for(let i = 0; i < string.length; i++) {
    for(let j = i; j < string.length; j++) {
      if(isPalindrome(string, i, j)) {
        // console.log(string.substring(i, j + 1));
        count++;
      }
    }
  }
  return count;
};

/* const countSubstrings = string => {
  // NP[i] = NP[i - 1] + No. of palindrome ending at string[i];
  // O(n^3) lol
  let NP = [0];
  for(let i = 0; i < string.length; i++) {
    NP[i] = NP[i - 1] || 0;
    for(let j = i; j >= 0; j--) {
      if(isPalindrome(string, j, i)){
        NP[i] = NP[i] + 1;
      }
    }
  }
  return NP[string.length - 1];
}; */

const countSubstrings = string => {
  // DP[start][end] = if(start === end) true;
  // else if (end - start + 1 === 2 && string[start] === string[end]) true;
  // else if (string[start] === string[end] && DP[start + 1][end - 1]) true;

  const DP = [];  
  // for(let start = 0; start < string.length; start++) {
  //   DP[start] = [];
  //   for(let end = 0; end < string.length; end++) {
  //     DP[start][end] = false;
  //   }
  // }
  
  let count = 0;
  // const result = [];
  for(let end = 0; end < string.length; end++) {
    DP[end] = [];
    for(let start = 0; start <= end; start++) {
      if(start === end) {
        // DP[`${start}-${end}`] = true;
        DP[start][end] = true;
        // result.push(string.substring(start, end + 1));
        count++;
      } else if(end - start === 1 && string[end] === string[start]) {
        // DP[`${start}-${end}`] = true;
        DP[start][end] = true;
        // result.push(string.substring(start, end + 1));
        count++;
      // } else if((end - start >= 2) && string[end] === string[start] && DP[`${start + 1}-${end - 1}`]) {
      } else if((end - start >= 2) && string[end] === string[start] && DP[start + 1][end - 1]) {
        // DP[`${start}-${end}`] = true;
        DP[start][end] = true;
        // result.push(string.substring(start, end + 1));
        count++;
      }
    }  
  }
  return count;
};

const testCases = [
  {
    string: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    result: 500500
  },
  // {
  //   string: 'aaa',
  //   result: 6,
  // },
  // {
  //   string: 'aba',
  //   result: 4,
  // },
  {
    string: 'abbaba',
    result: 6 + 1 + 2 + 1,
    // a, b, b, a, b, a
    // bb,
    // bab, aba
    // abba
  }
];

console.time('start');
for (let test of testCases) {
  let result = countSubstrings(test.string);
  if (result === test.result) {
    console.log("pass");
  } else {
    console.log("fail");
    console.log({ test, result });
  }
}
console.timeEnd('start');


// const used = process.memoryUsage().heapUsed / 1024 / 1024;
// console.log(`The script uses approximately ${Math.round(used * 100) / 100} MB`);