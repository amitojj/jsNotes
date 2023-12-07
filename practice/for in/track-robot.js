function trackRobot(...steps) {
  let r = [0, 0];
  for (let i in steps) {
    let d = i % 4;
    if (d == 0) r[1] += steps[i];
    if (d == 1) r[0] += steps[i];
    if (d == 2) r[1] -= steps[i];
    if (d == 3) r[0] -= steps[i];
  }
  return r;
}

console.log(trackRobot(20, 30, 10, 40));