function trackRobot(...steps) {
  return steps.reduce(
    (a, c, i) => {
      switch (i % 4) {
        case 0:
          a[0] -= c;
          break;
        case 1:
          a[1] += c;
          break;
        case 2:
           a[0] += c;
          break;
        case 3:
           a[1] -= c;
          break;
      }
      return a;
    },
    [0, 0]
  );
}

console.log(trackRobot(20, 30, 10, 40));
