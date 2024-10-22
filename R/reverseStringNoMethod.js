// reversing a string without the reverse() method

function reverseString(str) {
  if (typeof str !== "string") {
    return "Invalid input";
  }
  let revStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    revStr += str[i];
  }
  return revStr;
}
console.log(reverseString("hello"));
