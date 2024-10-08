// One way to handle QuickSort algorithms

// Create a function that accepts an array
function QuickSortExample(arr) {
  // Base case: If the array has 1 or 0 elements, return it
  if (arr.length <= 1) {
    return arr;
  }

  // Create a variable for the pivot point (first index in the array)
  let pivot = arr[0];

  // Create left and right arrays to hold items based on the pivot
  let left = [];
  let right = [];

  // Loop through the array starting from index 1 (skip the pivot)
  for (let i = 1; i < arr.length; i++) {
    const item = arr[i];
    // Check if the current item is greater than the pivot
    if (item > pivot) {
      // Push this item to the right array
      right.push(item);
    } else {
      // Push the item to the left array
      left.push(item);
    }
  }

  // Return the sorted array
  return [...QuickSortExample(left), pivot, ...QuickSortExample(right)];
}

// Example
console.log(QuickSortExample([3, 6, 8, 10, 1, 2, 1])); // Output: [1, 1, 2, 3, 6, 8, 10]
