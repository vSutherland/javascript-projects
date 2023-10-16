<<<<<<< HEAD
function findMinValue(arr) {
    if (arr.length === 0) {
      return undefined; // Handle the case where the array is empty
    }
  
    let minValue = arr[0]; // Assume the first element is the minimum
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < minValue) {
        minValue = arr[i]; // Update minValue if a smaller element is found
=======
function findMinimumValue(arr) {
    if (arr.length === 0) {
      return undefined; // Handle the case of an empty array
    }
  
    let minValue = arr[0]; // Initialize minValue with the first element of the array
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < minValue) {
        minValue = arr[i]; // Update minValue if a smaller value is found
>>>>>>> c364c4d66ab18565041830a5a1e3e9d2de987ad1
      }
    }
  
    return minValue;
  }
  
  // Sample arrays for testing:
  let nums1 = [5, 10, 2, 42];
  let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
  let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];
  
  // Using one of the test arrays as the argument, call your function inside the console.log statement below.
<<<<<<< HEAD
  console.log(findMinValue(nums1));
  
=======
  
  console.log(findMinimumValue(nums1));
  
>>>>>>> c364c4d66ab18565041830a5a1e3e9d2de987ad1
