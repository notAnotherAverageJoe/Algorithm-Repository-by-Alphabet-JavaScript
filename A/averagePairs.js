/**
 * The function relies on the fact that the array is sorted
 *  to calculate the running average of every two numbers.
 */

function averagePairs(arr, num) {
  let i = 0;
  let e = arr.length - 1;

  while (i < e) {
    let avg = arr[i] + arr[e] / 2;
    if (avg === num) {
      return true;
    } else if (avg < num) {
      i++;
    } else {
      e--;
    }
  }
  return false;
}
console.log(averagePairs([1, 2, 3, 4, 6], 3.5)); // true (Pair: [3, 4])
console.log(averagePairs([1, 2, 3, 4, 6], 5)); // true (Pair: [4, 6])
console.log(averagePairs([1, 2, 3, 4, 6], 8)); // false (No such pair)
