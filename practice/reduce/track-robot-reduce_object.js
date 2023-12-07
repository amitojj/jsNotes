const trackRobot = (...steps) =>
  steps.reduce(
    ([x, y], dist, i) =>
      ({
        0: [x, y + dist],
        1: [x + dist, y],
        2: [x, y - dist],
        3: [x - dist, y],
      }[i % 4]),
    [0, 0]
  );
// think why no curly braces and why no return value
console.log(trackRobot(20, 30, 10, 40));