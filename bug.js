function foo(a, b) {
  if (a === 0 || b === 0) {
    return 0; // Incorrect: Should handle other falsy values
  } else {
    return a * b;
  }
}

console.log(foo(0, 5)); // Correctly returns 0
console.log(foo(5, 0)); // Correctly returns 0
console.log(foo(null, 5)); // Incorrectly returns NaN, should be 0
console.log(foo(5, false)); // Incorrectly returns NaN, should be 0