// Function to find even numbers within an array
function evens(arr) {
  if (!Array.isArray(arr)) {
    return "Invalid Array";
  }
  // Initialize an empty array to store even numbers
  let evenNums = [];

  // Loop through each element of the array
  for (let i = 0; i < arr.length; i++) {
    // Get the current number in the array
    const currentNum = arr[i];

    // Check if the current number is even (divisible by 2 with no remainder)
    if (currentNum % 2 === 0) {
      // If the number is even, add it to the evenNums array
      evenNums.push(currentNum);
    }
  }

  // Return the array containing only even numbers
  return evenNums;
}

// Example array of numbers
array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Call the function and log the result to the console
console.log(evens(array1)); // Output: [2, 4, 6, 8, 10]
