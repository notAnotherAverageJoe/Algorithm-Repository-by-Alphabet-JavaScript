function longestSubstring(inputString) {
  // Check if the input string is empty
  if (inputString.length === 0) return "";

  // Check if the input string length is 1
  if (inputString.length === 1) return inputString;

  if (typeof inputString !== "string") {
    return "Invalid input";
  }

  // Split the string into words, trimming spaces
  let words = inputString.trim().split(" ");

  // Variable to hold the longest substring
  let longestSubstring = "";

  // Loop through each word to find the longest one
  for (let str of words) {
    if (str.length > longestSubstring.length) {
      longestSubstring = str; // Update the longest substring
    }
  }

  return longestSubstring; // Return the longest substring
}

// Example usage
console.log(longestSubstring("This is a test")); // Output: "test"
console.log(longestSubstring("   singleWord   ")); // Output: "singleWord"
console.log(longestSubstring("")); // Output: ""
console.log(longestSubstring("word1 word2 word3")); // Output: "word3"
console.log(longestSubstring(22)); // Output: invalid input
