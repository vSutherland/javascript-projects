<<<<<<< HEAD
=======
// Sample arrays for testing:
>>>>>>> c364c4d66ab18565041830a5a1e3e9d2de987ad1
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

<<<<<<< HEAD
nums1.sort((a, b) => a - b);
nums2.sort((a, b) => a - b);
nums3.sort((a, b) => a - b); 

console.log("Sorted in ascending order:");
console.log(nums1);
console.log(nums2);
console.log(nums3);

nums1.sort((a, b) => b - a);
nums2.sort((a, b) => b - a); 
nums3.sort((a, b) => b - a); 

console.log("Sorted in descending order:");
console.log(nums1);
console.log(nums2);
console.log(nums3);
=======
// Sort each array in ascending order
nums1.sort((a, b) => a - b);
nums2.sort((a, b) => a - b);
nums3.sort((a, b) => a - b);

console.log("Ascending Order:");
console.log("nums1:", nums1);
console.log("nums2:", nums2);
console.log("nums3:", nums3);

// Sort each array in descending order
nums1.sort((a, b) => b - a);
nums2.sort((a, b) => b - a);
nums3.sort((a, b) => b - a);

console.log("\nDescending Order:");
console.log("nums1:", nums1);
console.log("nums2:", nums2);
console.log("nums3:", nums3);

>>>>>>> c364c4d66ab18565041830a5a1e3e9d2de987ad1
