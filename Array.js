//Q1:- Reverse an array

// function reverseArray(arr) {
//   var newArr = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     newArr.push(arr[i]);
//   }
//   return newArr;
// }

// console.log(reverseArray([2, 4, 8, 1, 6, 7]));

// -------------------------------------------------------
//Q2:- Find the maximum and minimum element

// function Maxmin(arr) {
//   var min = arr[0];
//   var max = arr[0];
//   for (let i = 0; i <= arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//     if (arr[i] < min) {
//       min = arr[i];
//     }
//   }
//   return { min, max };
// }

// console.log(Maxmin([2, 4, 8, 1, 6, 7]));

// --------------------------------------------------------
//Q3:- Rotate an array to the right by k steps [2, 4, 8, 1, 6, 7] / [6, 7,2, 4, 8, 1 ].

// function Rotate(arr, k) {
//   var lastPart = arr.slice(arr.length - k);
//   var firstPart = arr.slice(0, arr.length - k);
//   var newArr = [...lastPart, ...firstPart];

//   return newArr;
// }

// console.log(Rotate([2, 4, 8, 1, 6, 7], 2));

// -------------------------------------------------------

//Q4:- Find the second largest element

// function SecondLargest(arr) {
//   var max = arr[0];
//   var max2 = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < max && arr[i] > max2) {
//       max2 = arr[i];
//     }
//   }
//   return { max2 };
// }

// console.log(SecondLargest([2, 4, 8, 1, 6, 7]));

// -------------------------------------------------------

//Q5:- Find all pairs in an array whose sum is equals a target

// function func(arr, target) {
//   const seen = new Set();
//   const result = [];
//   for (let i = 0; i < arr.length; i++) {
//     const num = arr[i];
//     const complement = target - num;
//     if (seen.has(complement)) {
//       result.push([num, complement]);
//     } else {
//       seen.add(num);
//     }
//   }

//   return result;
// }

// console.log(func([2, 4, 8, 6, 7], 10));

// -------------------------------------------------------

//Q6:- Merge two sorted array into a single sorted array
// METHOD:1
// function func(arr1, arr2) {
//   const merged = arr1.concat(arr2);
//   var temp;
//   let i, j;
//   for (i = 0; i < merged.length - 1; i++) {
//     for (j = i + 1; j < merged.length; j++) {
//       if (merged[i] > merged[j]) {
//         temp = merged[i];
//         merged[i] = merged[j];
//         merged[j] = temp;
//       }
//     }
//   }
//   // to return separate arrays split the merged array

//   const sortedArr1 = merged.slice(0, arr1.length);
//   const sortedArr2 = merged.slice(arr2.length);

//   return [sortedArr1, sortedArr2];
// }
// METHOD:2
// function sortTwoArrays(arr1, arr2) {
//   const merged = arr1.concat(arr2);
//   return merged.sort((a, b) => a - b);
// }

// console.log(func([2, 8, 7, 4, 6], [10, 3, 5, 9, 1]));

// -------------------------------------------------------

//Q7:- Move all zeros in an array to the end
// function func(arr) {
//   let count = 0;
//   let nonZeroElements = [];
//   //Remove all 0's and count them
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] === 0) {
//       count++;
//     } else {
//       nonZeroElements.push(arr[i]);
//     }
//   }

//   // add zeros to the end
//   for (let i = 0; i < count; i++) {
//     nonZeroElements.push(0);
//   }

//   return nonZeroElements;
// }
// console.log(func([2, 0, 7, 0, 4, 6]));

// -------------------------------------------------------

//Q8:- find the length of longest subarray with a given sum

// function longestSubarrayWithSum(arr, target) {
//   let maxLength = 0; // Variable to store the length of the longest subarray

//   for (let i = 0; i < arr.length; i++) {
//     let sum = 0;

//     for (let j = i; j < arr.length; j++) {
//       sum += arr[j];

//       // If the sum equals the target, check the length of the subarray
//       if (sum === target) {
//         maxLength = Math.max(maxLength, j - i + 1); // Update the max length
//       }
//     }
//   }

//   return maxLength;
// }

// // Example usage:
// console.log(longestSubarrayWithSum([1, 2, 3, 4, 5], 9)); // Output: 2 ([4, 5])
// console.log(longestSubarrayWithSum([1, 1, 1, 1, 1], 3)); // Output: 3 ([1, 1, 1])

// -------------------------------------------------------

//Q9:- To check if an array contains a subarray with a sum of 0
// function hasSubarrayWithSumZero(arr) {
//   let sum = 0;
//   let seenSums = new Set();

//   for (let num of arr) {
//     sum += num; // Update the running sum

//     // If the sum is 0 or we've seen this sum before, a subarray with sum 0 exists
//     if (sum === 0 || seenSums.has(sum)) {
//       return true;
//     }

//     // Add the current sum to the set for future comparisons
//     seenSums.add(sum);
//   }

//   return false; // No subarray with sum 0 found
// }

// // Example usage:
// console.log(hasSubarrayWithSumZero([1, 2, 3, -3])); // Output: true (subarray [3, -3] sums to 0)
// console.log(hasSubarrayWithSumZero([1, 2, 3, 4])); // Output: false (no subarray sums to 0)

// Q10:-Find the Missing Number in an Array.

function missingNumber(arr) {
  var n = arr.length + 1;
  var expectedSum = (n * (n + 1)) / 2;
  const actualSum = arr.reduce((sum, num) => sum + num, 0);
  return expectedSum - actualSum;
}
console.log(missingNumber([1, 2, 4, 5]));
