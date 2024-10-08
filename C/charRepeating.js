// Function to return the first character that appears in both arrays
function charRepeating(str1, str2) {
  // Create an object to store characters that appear in the first array
  const seenChar = {};

  // Loop through the first array of characters
  for (let i = 0; i < str1.length; i++) {
    const char1 = str1[i];
    // If the character hasn't been added to seenChar, add it
    if (!seenChar[char1]) {
      seenChar[char1] = true;
    } else {
      // If a repeating character is found in the first array, return it immediately
      return `Match found: ${char1}`;
    }
  }

  // Loop through the second array of characters
  for (let j = 0; j < str2.length; j++) {
    const char2 = str2[j];
    // If a character from the second array matches one from the first array, return it
    if (seenChar[char2]) {
      return `Match found: ${char2}`;
    }
  }

  // If no match is found, return a message saying so
  return "No match found";
}

// Example usage:
console.log(charRepeating(["a", "b", "c"], ["d", "a", "e"])); // Output: "Match found: a"
