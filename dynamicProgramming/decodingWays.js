// incorrect
const map = {
  1: 1,
  2: 1,
  3: 1,
  4: 1,
  5: 1,
  6: 1,
  7: 1,
  8: 1,
  9: 1,
  10: 1,
  11: 1,
  12: 1,
  13: 1,
  14: 1,
  15: 1,
  16: 1,
  17: 1,
  18: 1,
  19: 1,
  20: 1,
  21: 1,
  22: 1,
  23: 1,
  24: 1,
  25: 1,
  26: 1,
};
/* 
const alphabets = {
  1: 'a',
  2: 'b',
  3: 'c',
  4: 'd',
  5: 'e',
  6: 'f',
  7: 'g',
  8: 'h',
  9: 'i',
  10: 'j',
  11: 'k',
  12: 'l',
  13: 'm',
  14: 'n',
  15: 'o',
  16: 'p',
  17: 'q',
  18: 'r',
  19: 's',
  20: 't',
  21: 'u',
  22: 'v',
  23: 'w',
  24: 'x',
  25: 'y',
  26: 'z',
}; */

/**
 * @param {string} s
 * @return {number}
 */
const numDecodings = (string) => {
  let doubleCount = 0;
  let overlapping = 0;
  if(string[0] === '0') {
    return 0;
  }
  for (let i = 0; i < string.length; i++) {
    if(map[string[i - 1] + string[i]]) {
      // console.log('add', string[i - 1] + string[i]);
      doubleCount = doubleCount + 1;
      if(map[string[i - 2] + string[i - 1]]) {
        // console.log('remove', string[i - 2] + string[i - 1]);
        overlapping = overlapping + 1;
      }
    }
  }
  
  const formula = (Math.pow(2, doubleCount) - Math.pow(2, overlapping)) + 1;
  return formula;
};

// let string = '123';
// console.log(map[string[0]]);
// console.log(map[string[1]]);
// console.log(map[string[2]]);
// console.log(map[string[0] + string[1]]);
// console.log(map[string[1] + string[2] + string[3]]);


console.log(numDecodings("123")); // 3
// abc, aw, lc

console.log(numDecodings("1212")); // 5
// abab, aub, lab, ll, abl

console.log(numDecodings("414")); // 2
// dad, dn

console.log(numDecodings("4114")); // 3
// daad, dan, dkd

console.log(numDecodings("1111")); // 5
// aaaa, aka, kaa, aak, kk

console.log(numDecodings("10"));


