function secondLongestSubstring(inputString) {
  if (typeof inputString !== "string") {
    return "Invalid input";
  }
  let longest = "";
  let secondLongestSubstring = "";

  let revampedString = inputString.trim().split(" ");
  for (let word of revampedString) {
    if (word.length > longest.length) {
      secondLongestSubstring = longest;
      longest = word;
    } else if (
      word.length > secondLongestSubstring.length &&
      word.length < longest.length
    ) {
      secondLongestSubstring = word;
    }
  }
  return secondLongestSubstring;
}

console.log(secondLongestSubstring("hello me good friendsss wooooooooooooooo")); // Output: "friendsss"
console.log(secondLongestSubstring("I am learning JavaScript")); // Output: "learning"
console.log(secondLongestSubstring("single")); // Output: ""
console.log(secondLongestSubstring("")); // Output: ""
console.log(secondLongestSubstring(123)); // Output: "Invalid input: not a string"
