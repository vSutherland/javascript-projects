function findMinValue(arr) {
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

<<<<<<< HEAD
function sortArray(arr) {
  let sortedArray = [];

  while (arr.length > 0) {
    let minValue = findMinValue(arr);
=======
function sortArrayAscending(arr) {
  const sortedArray = [];

  while (arr.length > 0) {
    const minValue = findMinValue(arr);
>>>>>>> c364c4d66ab18565041830a5a1e3e9d2de987ad1
    sortedArray.push(minValue);
    arr.splice(arr.indexOf(minValue), 1);
  }

  return sortedArray;
}

<<<<<<< HEAD
=======
// Sample arrays for testing:
>>>>>>> c364c4d66ab18565041830a5a1e3e9d2de987ad1
let nums1 = [5, 10, 2, 42];

let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];

let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

<<<<<<< HEAD
console.log("Sorted nums1:", sortArray(nums1));
console.log("Sorted nums2:", sortArray(nums2));
console.log("Sorted nums3:", sortArray(nums3));



function findMinValue(arr) {
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

function sortArray(arr) {
  if (arr.length === 0) {
    return [];
  }

  let minValue = findMinValue(arr);
  arr.splice(arr.indexOf(minValue), 1);

  return [minValue].concat(sortArray(arr));
}

console.log("Sorted nums1:", sortArray(nums1));
console.log("Sorted nums2:", sortArray(nums2)); 
console.log("Sorted nums3:", sortArray(nums3)); 
=======
// Testing the sortArrayAscending function
console.log(sortArrayAscending(nums1));

console.log(sortArrayAscending(nums2)); 

console.log(sortArrayAscending(nums3)); 
>>>>>>> c364c4d66ab18565041830a5a1e3e9d2de987ad1
