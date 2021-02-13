const isPalindrome = (s, startIndex, endIndex) => {
  let start = startIndex;
  let end = endIndex;
  while (start < end) {
    if (s[start] !== s[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;
};

/**
 * Backtracking
 * @param {string} s
 * @return {string}
 */
// var longestPalindrome = function(s, memo = {}) {
//   if(memo[s]) {
//     return memo[s];
//   }
//   if(isPalindrome(s)) {
//       memo[s] = s;
//       return s;
//   }
//   if(s.length === 0) {
//       memo[s] = s;
//       return '';
//   }
//   let resultLeft = longestPalindrome(s.substring(0, s.length - 1), memo);
//   let resultRight = longestPalindrome(s.substring(1), memo);
//   if(resultLeft.length > resultRight.length) {
//     memo[s] = resultLeft;
//     return resultLeft;
//   }

//   memo[s] = resultRight;
//   return resultRight;
// };

/**
 * DP
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = function (s) {
  let retMax = [0, 0];

  for(let i = 0; i <= s.length; i++) {
    
    let maxSizedPalindrome = retMax;
    // for all the string that ends on i
    // find maxlength palindrome 
    
    for(let j = i - 1; j >= 0; j--) {
      if(isPalindrome(s, j, i) && (i - j) > (maxSizedPalindrome[1] - maxSizedPalindrome[0])) {
        maxSizedPalindrome = [j, i];
      }
    }

    // string ending on i has maxim sized palindrome 
    retMax = maxSizedPalindrome;
  }
  return s.substring(retMax[0], retMax[1] + 1);
};


// LP(0, n) = Math.max(LP(i, n - 1) + s[i]);

const string = "abcd";
const longPalindromString = string + string.split("").reverse().join("");
const inputString = `${longPalindromString}`;
// const inputString = `civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth`;

console.time("start");
console.log(inputString.length, longestPalindrome(inputString));
console.timeEnd("start");

// console.log(isPalindrome(inputString, 0, inputString.length - 1));
