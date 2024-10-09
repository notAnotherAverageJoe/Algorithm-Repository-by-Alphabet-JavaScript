function bubbleSort(arr) {
  // make a variable for the arr length
  let n = arr.length; // This is the initial length of the array. We'll decrease it each time we finish a pass.

  // this is how we can break out of the loop
  let swapped; // This will help us keep track if any swaps happened during a pass. If no swaps happened, the array is sorted.

  do {
    // change swapped to false at the start of each pass
    swapped = false;

    // We go from 0 to n-1 because we compare each element with the next one (arr[i] with arr[i+1])
    // If we don't do n-1, arr[i+1] would go out of bounds on the last iteration
    for (let i = 0; i < n - 1; i++) {
      // Check if the current element is greater than the next one
      if (arr[i] > arr[i + 1]) {
        // If true, we swap the elements
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;

        // Since we made a swap, the array is not fully sorted yet, so we set swapped to true
        swapped = true;
      }
    }

    // After each pass, the largest element "bubbles up" to the end of the array.
    // We can reduce the effective length of the array (n) for the next pass because the last element is already sorted.
    n--;
  } while (swapped); // If no swaps occurred during the pass, swapped remains false, and the loop breaks because the array is sorted.

  // Return the sorted array
  return arr;
}

// Examples
let array = [64, 34, 25, 12, 22, 11, 90];
console.log("Original array:", array);
console.log("Sorted array:", bubbleSort(array));
