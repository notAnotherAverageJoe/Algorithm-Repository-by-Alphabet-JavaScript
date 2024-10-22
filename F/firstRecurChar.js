//return the first recurring char in a string

function firstRecurChar(str) {
  if (typeof str !== "string") {
    return "Invalid string";
  }
  if (str.length === 0) return "";
  if (str.length === 1) return str;

  let counter = {};
  for (let char of str) {
    counter[char] = (counter[char] || 0) + 1;
    if (counter[char] > 1) {
      return char;
    }
  }
  return null;
}
console.log(firstRecurChar("hello")); // Output: "l"
console.log(firstRecurChar("swiss")); // Output: "s"
console.log(firstRecurChar("abcdef")); // Output: null
