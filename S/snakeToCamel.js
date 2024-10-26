//convert snake_case to camelCase

function snakeToCamel(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "_") {
      result += str[i + 1].toUpperCase();
      i++;
    } else {
      result += str[i];
    }
  }
  return result;
}
console.log(snakeToCamel("hello_world")); // helloWorld
console.log(snakeToCamel("simple_test")); // simpleTest
