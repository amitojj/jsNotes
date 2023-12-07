function minMax(arr) {
  arr.sort(function (a, b) {
    return a - b;
  });
  return [arr[0], arr[arr.length - 1]];
}

console.log(minMax([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]));