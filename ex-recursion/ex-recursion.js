let n = 8;

function sumFn(n) {
  if (n == 1) return n;
  return n + sumFn(n - 1);
}