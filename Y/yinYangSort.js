// Input: [3, -2, -5, 6, -1, 4, -3]
// Output: [-2, -5, -1, -3, 3, 6, 4]

function yinYang(arr) {
  let yinNum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      if (i !== yinNum) {
        [arr[i], arr[yinNum]] = [arr[yinNum], arr[i]];
      }
      yinNum++;
    }
  }
  return arr;
}

let a1 = [3, -2, -5, 6, -1, 4, -3];
console.log(yinYang(a1));
