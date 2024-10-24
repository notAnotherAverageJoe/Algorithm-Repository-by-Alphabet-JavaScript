// turn camelCase = snake_case
function camelToSnake(str) {
  let sStr = "";
  //loop through the string
  for (let i = 0; i < str.length; i++) {
    //check for capital letters
    if (/[A-Z]/.test(str[i])) {
      sStr += "_" + str[i];
    } else {
      sStr += str[i];
    }
  }
  return sStr.toLowerCase();
}
console.log(camelToSnake("forVar")); // Result: for_var
