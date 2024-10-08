// Classic Fizzbuzz

const total = 100;
function fizzBuzz(total) {
  for (let i = 0; i <= total; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      console.log("FIZZBUZZ");
    } else if (i % 5 === 0) {
      console.log("BUZZ");
    } else if (i % 3 === 0) {
      console.log("FIZZ");
    } else {
      console.log(i);
    }
  }
}

console.log(fizzBuzz(total));
