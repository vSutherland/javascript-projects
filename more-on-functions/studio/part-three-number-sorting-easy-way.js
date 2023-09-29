//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

nums1.sort((a, b) => a - b); // Sort nums1 in ascending order
nums2.sort((a, b) => a - b); // Sort nums2 in ascending order
nums3.sort((a, b) => a - b); // Sort nums3 in ascending order

console.log("Sorted in ascending order:");
console.log(nums1); // [2, 5, 10, 42]
console.log(nums2); // [-44, -10, -2, 0, 0, 3, 3, 5]
console.log(nums3); // [-3.3, 0, 4.4, 4, 5, 5, 8, 10, 200]


//Sort each array in decending order.
nums1.sort((a, b) => b - a); // Sort nums1 in descending order
nums2.sort((a, b) => b - a); // Sort nums2 in descending order
nums3.sort((a, b) => b - a); // Sort nums3 in descending order

console.log("Sorted in descending order:");
console.log(nums1); // [42, 10, 5, 2]
console.log(nums2); // [5, 3, 3, 0, 0, -2, -10, -44]
console.log(nums3); // [200, 10, 8, 5, 5, 4.4, 4, 0, -3.3]
