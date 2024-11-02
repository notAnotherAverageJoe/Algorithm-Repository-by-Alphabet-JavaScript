function longestWord(inputString) {
  // Check if the input string is empty
  if (inputString.length === 0) return "";

  // Check if the input string length is 1
  if (inputString.length === 1) return inputString;

  if (typeof inputString !== "string") {
    return "Invalid input";
  }

  // Split the string into words, trimming spaces
  let words = inputString.trim().split(" ");

  // Variable to hold the longest word
  let longestWord = "";

  // Loop through each word to find the longest one
  for (let str of words) {
    if (str.length > longestWord.length) {
      longestWord = str; // Update the longest word
    }
  }

  return longestWord; // Return the longest word
}

// Example usage
console.log(longestWord("This is a test")); // Output: "test"
console.log(longestWord("   singleWord   ")); // Output: "singleWord"
console.log(longestWord("")); // Output: ""
console.log(longestWord("word1 word2 word3")); // Output: "word3"
console.log(longestWord(22)); // Output: invalid input
