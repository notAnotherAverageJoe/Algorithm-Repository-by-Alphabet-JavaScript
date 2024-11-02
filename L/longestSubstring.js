function longestSub(str) {
  let left = 0;
  let longest = "";
  let charSet = new Set();

  for (let right = 0; right < str.length; right++) {
    while (charSet.has(str[right])) {
      charSet.delete(str[left]);
      left++;
    }

    charSet.add(str[right]);

    if (right - left + 1 > longest.length) {
      longest = str.slice(left, right + 1);
    }
  }
  return longest;
}
console.log(longestSub("aabcdeeee"));
