function factorial(n) {
  let x = 1;
  if (n == 0 || n == 1) return x;
  
  if (n > 1) {
    for (let i = n; i >= 1; i--) {
      x = x * i;
    }
    return x;
  }
}