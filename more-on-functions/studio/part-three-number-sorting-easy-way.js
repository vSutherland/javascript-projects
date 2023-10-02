let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

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
