// Function that checks if a number is a Narcissistic (Armstrong) number
function narcissisticNums(val) {
  // Convert the number to a string to easily access individual digits
  let valString = val.toString();

  // Calculate the length of the string, which represents the number of digits
  // This length is also the exponent for each digit
  let exponent = valString.length;

  // Initialize a sum variable to accumulate the results of each digit raised to the exponent
  let sum = 0;

  // Iterate over each character (digit) in the string
  for (let i = 0; i < exponent; i++) {
    // Convert the current character back to an integer for calculation
    const currentChar = parseInt(valString[i]);

    // Raise the current digit to the power of the total number of digits (exponent) and add to sum
    sum += currentChar ** exponent;
  }

  // Return true if the sum equals the original value, meaning it's a Narcissistic number
  return sum === val;
}

// Example 153 is a known Narcissistic number (1^3 + 5^3 + 3^3 = 153)
console.log(narcissisticNums(153)); // Output: true
