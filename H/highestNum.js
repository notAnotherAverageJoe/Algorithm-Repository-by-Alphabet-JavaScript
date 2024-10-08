// Function to find the highest number in an array of numbers
function highestNumber(arr) {
  // Initialize a variable for maxNum with the first value in the array
  // This will be the starting point to compare other numbers in the array
  let maxNum = arr[0];

  // Loop through the array starting from the second element (index 1)
  for (let i = 1; i < arr.length; i++) {
    // Store the current number at the i-th index for comparison
    const currentNum = arr[i];

    // If the current number is greater than maxNum, update maxNum
    if (currentNum > maxNum) {
      maxNum = currentNum; // Set maxNum to the current number
    }
  }

  // Return the highest number found in the array
  return maxNum;
}
// BIG O = O(n)
// Example Log the highest number in the array to the console
console.log(highestNumber([1, 2, 3, 4, 66, 7, 8, 99, 3])); // Output: 99
