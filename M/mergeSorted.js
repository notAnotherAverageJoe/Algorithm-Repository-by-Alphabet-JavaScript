// Function to merge two sorted arrays into one sorted array
function mergeSortedArrays(arr1, arr2) {
  // Create a result array to hold the merged items
  let result = [];
  // Create pointers to track positions in both arrays
  let i = 0;
  let j = 0;

  // Use a while loop to iterate over both arrays until the end of one of them is reached
  while (i < arr1.length && j < arr2.length) {
    // Compare the elements at the current pointers of both arrays
    if (arr1[i] < arr2[j]) {
      // If arr1's element is smaller, push it to the result array and move the pointer i forward
      result.push(arr1[i]);
      i++;
    } else {
      // Otherwise, push the arr2's element and move the pointer j forward
      result.push(arr2[j]);
      j++;
    }
  }

  // Once we have exhausted one of the arrays, append the remaining elements of arr1 (if any) to the result
  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }

  // Similarly, append the remaining elements of arr2 (if any) to the result
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  // Return the merged array
  return result;
}

// Example usage:
let first = [1, 3, 5, 7, 9];
let second = [2, 4, 6, 8, 10];

console.log(mergeSortedArrays(first, second));
// Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
