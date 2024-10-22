function isAnagram(s, t) {
  if (typeof s !== "string" || typeof t !== "string") {
    return "Invalid inputs";
  }
  let counter = {};
  for (let char of s) {
    counter[char] = (counter[char] || 0) + 1;
  }
  for (let char of t) {
    if (!counter[char]) {
      return false;
    } else {
      counter[char]--;
    }
  }
  for (let keys in counter) {
    if (counter[keys] !== 0) {
      return false;
    }
  }
  return true;
}
console.log(isAnagram("anagram", "nagaram")); // true
console.log(isAnagram("rat", "car")); // false
console.log(isAnagram("rat", "car")); // false
console.log(isAnagram("rat", 24)); // Invalid input
