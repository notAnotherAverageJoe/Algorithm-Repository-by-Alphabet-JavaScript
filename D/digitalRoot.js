// Digital root is the recursive
//  sum of all the digits in a number.
function digitalRoot(num) {
  // go until only one number is left!
  while (num >= 10) {
    // lets set up a sum variable
    // we can initiate it with 0
    let sum = 0;
    // in order to handle numbers easier we can convert the num input to a string
    let numString = num.toString();
    //now we can iterate over the length of the array
    for (let i = 0; i < numString.length; i++) {
      // we now need to let sum += the num
      // but at this point it is still a string so we can parse it!
      sum += parseInt(numString[i]);
    }
    num = sum;
  }
  return num;
}

console.log(digitalRoot(456)); // Output: 6
console.log(digitalRoot(942)); // Output: 6
console.log(digitalRoot(16)); // Output: 7
console.log(digitalRoot(123456789)); // Output: 9
