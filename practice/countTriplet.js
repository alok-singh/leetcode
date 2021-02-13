const countTriplet = (arr) => {
  const retArr = [];
  const map = arr.reduce((acc, item) => {
    acc[item] = true;
    return acc;
  }, {});
  for(let i = 0; i < arr.length; i++) {
    for(let j = i + 1; j < arr.length; j++) {
      if(map[arr[i] + arr[j]]) {
        retArr.push([arr[i], arr[j], arr[i] + arr[j]]);
      }
    }
  }
  return retArr;
}

const initialArray = [];
for(let i = 0; i < 100; i++) {
  initialArray.push(i + 1);
}

console.log(countTriplet([1,2,5,6]));