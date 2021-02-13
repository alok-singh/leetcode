const findPalindrome = (string, left, right) => {
  while (string[left] === string[right] && left >= 0 && right < string.length) {
    left--;
    right++;
  }
  return string.substring(left + 1, right);
};

const longestPalindrome = (string) => {
  let longest = '';
  for(let i = 0; i < string.length; i++) {
    let oddLengthed = findPalindrome(string, i, i);
    let evenLengthed = '';
    if(i < string.length - 1 && string[i] === string[i + 1]) {
      evenLengthed = findPalindrome(string, i, i + 1);
    }
    if(evenLengthed.length > oddLengthed.length) {
      if(longest.length < evenLengthed.length) {
        longest = evenLengthed;
      }
    } else {
      if(longest.length < oddLengthed.length) {
        longest = oddLengthed;
      }
    }
  }
  return longest;
}

// const inputString = `civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth`;

const inputString = 'bb';

console.time("start");
console.log(inputString.length, longestPalindrome(inputString));
console.timeEnd("start");

// console.log(findPalindrome(inputString, 0, 0))