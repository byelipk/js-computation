function basicRecursion(max, current) {
  if (current > max) { return; }
  console.log(current);
  basicRecursion(max, current + 1);
}

// Fibonacci sequences are the two previous terms added together.
function fibonacci(n) {
  if (n <= 2) {
    return 1;
  }
  else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

basicRecursion(5, 1);

fibonacci(-2);
