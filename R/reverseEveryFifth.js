// Create a function that reverses any part of the string that is 5 characters or more.
// Words with fewer than 5 characters will remain unchanged.
function reverseFiveOrMore(str) {
  // Split the input string into an array of words
  return str
    .split(" ")
    .map((word) => {
      // Check if the current word has 5 or more characters
      return word.length >= 5
        ? // If true, reverse the word; otherwise, return the original word
          word.split("").reverse().join("")
        : word;
    })
    .join(" "); // Join the transformed words back into a single string
}

// Example
console.log(reverseFiveOrMore("Hello there world! This is amazing."));
// Output: "olleH there !dlrow This is .gnizama"
