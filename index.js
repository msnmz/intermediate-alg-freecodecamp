// Sum All Numbers in a Range

function sumAll(arr) {
  // n: max, m: min
  // formula: n(n+1)/2 - m(m-1)/2
  const n = Math.max(...arr);
  const m = Math.min(...arr);
  return (n * (n + 1)) / 2 - (m * (m - 1)) / 2;
}

console.log(sumAll([1, 4]) === 10);