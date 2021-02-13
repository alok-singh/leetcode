// a < b > c < d > e < f
// 0   1   2   3   4   5
const zigZag = (arr) => {
  for(let index = 0; index < arr.length; index++) {
    if(index === 0) {
      if(arr[index + 1] < arr[index]) {
        let temp = arr[index + 1];
        arr[index + 1] = arr[index];
        arr[index] = temp;
      }
    }
    else if(index % 2 === 0) {
      if(arr[index - 1] < arr[index]) {
        let temp = arr[index - 1];
        arr[index - 1] = arr[index];
        arr[index] = temp;
      }
      if(arr[index + 1]) {
        if(arr[index + 1] < arr[index]) {
          let temp = arr[index + 1];
          arr[index + 1] = arr[index];
          arr[index] = temp;
        }
      }
    } else {
      if(arr[index - 1] > arr[index]) {
        let temp = arr[index - 1];
        arr[index - 1] = arr[index];
        arr[index] = temp;
      }
      if(arr[index + 1]) {
        if(arr[index + 1] > arr[index]) {
          let temp = arr[index + 1];
          arr[index + 1] = arr[index];
          arr[index] = temp;
        }
      }
    }
  }
}

// const arr = [4, 3, 7, 8, 6, 2, 1];
const arr = [1,2,3,4,5,6,7,8,9].reverse();
zigZag(arr);
console.log(arr.join(' ')); // 3 7 4 8 2 6 1
