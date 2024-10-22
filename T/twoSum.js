// take an array of numbers and a target
// return the two indexes of the numbers that add up to the target
// this solution is time complexity O(n) && space complexity of O(n)
function twoSum(arr, target) {
  if (!Array.isArray(arr)) {
    return "Invalid Array";
  }
  if (isNaN(target)) {
    return "Invalid target, enter a valid integer";
  }
  let seen = {};
  for (let i = 0; i < arr.length; i++) {
    let neededValue = target - arr[i];
    if (neededValue in seen) {
      return [seen[neededValue], i];
    } else {
      seen[arr[i]] = i;
    }
  }
  return null;
}

console.log(twoSum([2, 11, 7, 15], 9)); // Output: [0, 1]
console.log(twoSum([1, 3, 5, 7], 10)); // Output: [2, 3]
console.log(twoSum([1, 2, 3], 7));
console.log(twoSum([1, 2, 3], 7));
