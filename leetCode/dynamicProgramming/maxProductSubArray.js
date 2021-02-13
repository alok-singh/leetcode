/* const maxProduct = (arr) => {
  let start = 0;
  let end = 0;
  let maxEnd = 0;
  let maxStart = 0;
  let maxProduct = Number.NEGATIVE_INFINITY;
  let currentProduct = 1;
  for(let i = 0; i < arr.length; i++) {
    if(currentProduct > currentProduct * arr[i]) {
      currentProduct = 1;
      start = i;
      end = i + 1;
    } else {
      currentProduct = currentProduct * arr[i];
      end = i;
    }
    if(currentProduct > maxProduct) {
      maxEnd = end;
      maxStart = start;
      maxProduct = currentProduct;
    }
  }
  console.log({maxStart, maxEnd, arr});
  maxProduct = 1;
  for(let i = maxStart; i <= maxEnd; i++){
    maxProduct = maxProduct * arr[i];
  }
  return maxProduct
} */

/* const maxProduct = (arr) => {
  let start = 0;
  let end = 0;
  let maxEnd = 0;
  let maxStart = 0;
  let maxProduct = Number.NEGATIVE_INFINITY;
  let currentProduct = 1;
  for(let i = 0; i < arr.length; i++) {
    if(currentProduct * arr[i] > currentProduct) {
      end = i;
      currentProduct = currentProduct * arr[i];
      if(maxProduct < currentProduct) {
        maxProduct = currentProduct;
        maxStart = start;
        maxEnd = end;
      }
    } else {
      start = i;
      end = i;
      currentProduct = arr[i];
    }
  }
  console.log({maxStart, maxEnd, arr});
  maxProduct = 1;
  for(let i = maxStart; i <= maxEnd; i++){
    maxProduct = maxProduct * arr[i];
  }
  return maxProduct
} */

// n^2
/* const maxProduct = (arr) => {
  let maxProductValue = arr[0];
  for(let start = 0; start < arr.length; start++) {
    let currentProduct = arr[start];
    if(currentProduct > maxProductValue) {
      maxProductValue = currentProduct;
    }
    for(let end = start + 1; end < arr.length; end++) {
      currentProduct = currentProduct * arr[end];
      if(currentProduct > maxProductValue) {
        maxProductValue = currentProduct;
      }
    }  
  }
  return maxProductValue;
} */


const maxProduct = (arr) => {
  let currentMax = 1;
  let currentMin = 1;
  let result = Number.NEGATIVE_INFINITY;
  for(let value of arr) {
    let temp = currentMax;
    currentMax = Math.max(currentMax * value, currentMin * value, value);
    currentMin = Math.min(temp * value, currentMin * value, value);
    result = Math.max(currentMax, result);
  }
  return result;
}


const testCases = [
  {
    array: [2,3,-2,4],
    result: 6,
  },
  {
    array: [2,3,-2,4,2],
    result: 8,
  },
  {
    array: [1,2,0,1,2,3],
    result: 6,
  },
  {
    array: [-2,0,-1],
    result: 0,
  },
  {
    array: [-2,0,0, 2, 3],
    result: 6,
  },
  {
    array: [-2,0,-1, 2, 3, -6],
    result: 36,
  }
];

for (let test of testCases) {
  let result = maxProduct(test.array);
  if(result === test.result) {
    console.log('pass');
  } else {
    console.log('fail');
    console.log({test, result});
  }
}