const countBits = n => {
  let powOf2 = 1;
  const countArr = [0, 1];
  for(let i = 2; i <= n; i++) {
    if(i % powOf2 === 0) {
      powOf2 = 2 * powOf2;
    }
    countArr[i] = 1 + countArr[i % powOf2];
  }
  return countArr;
}

countBits(1000).forEach((item, index) => {
  const numOfOnes = index.toString(2).split('').filter(item => item === '1').length;
  if(numOfOnes !== item) {
    console.log('fail', index);
    console.log('expected', numOfOnes);
    console.log('result', item);
  }
});



/* for(let i = 0; i <= n; i++) {
    
  
  console.log(i.toString(2).padStart(5, '0'), Math.floor(count));
  if((i + 1) % powOf2 === 0) {
    powOf2 = 2 * powOf2;
    console.log('--------------------------', powOf2/2);
    count = 1;
  }
} */