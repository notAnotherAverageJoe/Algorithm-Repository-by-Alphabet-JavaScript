// Create a function that accepts a string and reverses it
function reverseString(str) {
  // Split the string into an array of characters
  let reversedString = str
    .split("")
    // Reverse the array of characters
    .reverse()
    // Join the reversed array back into a string
    .join("");

  // Return the reversed string
  return reversedString;
}

// Example : Log the reversed string of "hello" to the console
console.log(reverseString("hello")); // Output: "olleh"
