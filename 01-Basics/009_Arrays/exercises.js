/* Write a function that calculates overtime and pay associated with overtime.

Working 9 to 5: regular hours
After 5pm is overtime
Your function gets an array with 4 values:

Start of working day, in decimal format, (24-hour day notation)
End of working day. (Same format)
Hourly rate
Overtime multiplier
Your function should spit out:

$ + earned that day (rounded to the nearest hundreth) */
let arr = [18, 20, 32.5, 2];
console.log(overTime(arr));
function overTime(arr) {
  if (arr[1] <= 17) {
    return "$" + ((arr[1] - arr[0]) * arr[2]).toFixed(2);
  } else {
    if (arr[0] <= 17) {
      return (
        "$" +
        ((17 - arr[0]) * arr[2] + (arr[1] - 17) * arr[2] * arr[3]).toFixed(2)
      );
    } else {
      return "$" + ((arr[1] - arr[0]) * arr[2] * arr[3]).toFixed(2);
    }
  }
}
