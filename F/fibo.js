function fibonacci(n) {
  if (n < 0) return "invalid input";
  if (n === 0) return 0;
  if (n === 1) return 1;

  let a = 0;
  let b = 1;
  let temp;
  for (let i = 2; i <= n; i++) {
    temp = a + b;
    a = b;
    b = temp;
  }
  return b;
}

console.log(fibonacci(5));
console.log(fibonacci(6));
console.log(fibonacci(7));
console.log(fibonacci(10));
