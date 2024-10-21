//return the index of the first non repeating char in a string
// if no result return -1

// aaab = 3
// abc = 0
// aabb = -1

function firstNonRepeating(str) {
  if (str.length === 0) return "";

  let tracker = {};

  for (let char of str) {
    tracker[char] = (tracker[char] || 0) + 1;
  }

  for (let i = 0; i < str.length; i++) {
    if (tracker[str[i]] === 1) {
      return i;
    }
  }

  return -1;
}
console.log(firstNonRepeating("hello")); // 0
console.log(firstNonRepeating("abc")); // 0
console.log(firstNonRepeating("aaaabbbbcqccc")); // 9
