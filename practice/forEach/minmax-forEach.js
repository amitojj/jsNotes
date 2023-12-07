function minMax(arr) {
  let min = Infinity;
  let max = -Infinity;
  arr.forEach( (n) => {
    min = (n < min) ? n : min;
  });
  arr.forEach((n) => {
    max = (n > max) ? n : max;
  });
  return [min, max];
}

console.log(minMax([1,2,3,4,5,6,7,8,9,10,11]));