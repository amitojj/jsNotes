// function maxSum(nums) {
//     let ms = nums[0] ?? 0;
//     let result = nums.reduce((a,c) => {
//         if (a+c > 0){
//             if (ms<a+c){
//                 ms=a+c;
//             }
//             return a+c;
//         }
//         else{
//             if (ms < a + c) {
//               ms = a + c;
//             }
//             return 0;
//         }
//     },0)
//     return ms;
// }
function maxSum(nums) {
    // Initialize variables to keep track of current sum and maximum sum
    let currentSum = 0;
    let maxSum = nums[0] ?? 0;

    // Loop through each element in the array
    for (let num of nums) {
        // Update the current sum by adding the current element
        currentSum = Math.max(num, currentSum + num);

        // Update the maximum sum if the current sum is greater
        maxSum = Math.max(maxSum, currentSum);
    }

    // Return the maximum sum
    return maxSum;
}

// Example usage:
console.log(maxSum([-1, -9, 0, 8, -76, 5, 3])); // Output: 8
console.log(maxSum([3, -10, 4, -1, 2, 3, 6, -7])); // Output: 14
console.log(maxSum([1, -9, 0, -8, 76, 5, 43])); // Output: 124


console.log(maxSum([3, -10, 4, -1, 2, 3, 6, -7]));