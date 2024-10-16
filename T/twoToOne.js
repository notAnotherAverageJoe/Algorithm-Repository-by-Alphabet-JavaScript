// Codewars question
// Take 2 strings s1 and
// s2 including only letters
// from a to z. Return a new sorted string (alphabetical ascending),
// the longest possible, containing
// distinct letters - each taken only once - coming from s1 or s2.

//solution1

function longest(str1, str2) {
  let combined = str1 + str2;
  let uniqueChars = new Set(combined);
  let sortedChars = Array.from(uniqueChars).sort();
  return sortedChars.join("");
}
// Example test cases:
console.log(longest("aaaaaaaabc", "ddffhddsddeeeeeeeeeeef"));

//fun version

const longest2 = (str1, str2) => [...new Set(str1 + str2)].sort().join("");

console.log(longest2("aaaaaaaabc", "ddffhddsddeeeeeeeeeeef"));
