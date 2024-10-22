function isPrime(num) {
  if (typeof num !== "number" || num < 2) {
    return "Invalid input"; // Handles non-number inputs and numbers less than 2
  }

  for (let i = 2; i < num; i++) {
    console.log(i);
    if (num % i === 0) {
      return false; // Number is divisible by i, so it's not prime
    }
  }

  return true; // Number is prime
}

console.log(isPrime(11)); // Output: true
console.log(isPrime(15)); // Output: false
console.log(isPrime(2)); // Output: true
console.log(isPrime(-3)); // Output: Invalid input
