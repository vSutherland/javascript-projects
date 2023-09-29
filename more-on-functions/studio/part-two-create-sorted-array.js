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
  let sortedArray = [];

  while (arr.length > 0) {
    let minValue = findMinValue(arr);
    sortedArray.push(minValue);
    arr.splice(arr.indexOf(minValue), 1);
  }

  return sortedArray;
}

// Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

console.log("Sorted nums1:", sortArray(nums1)); // [2, 5, 10, 42]
console.log("Sorted nums2:", sortArray(nums2)); // [-44, -10, -2, 0, 0, 3, 3, 5]
console.log("Sorted nums3:", sortArray(nums3)); // [-3.3, 0, 4.4, 4, 5, 5, 8, 10, 200]



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

console.log("Sorted nums1:", sortArray(nums1)); // [2, 5, 10, 42]
console.log("Sorted nums2:", sortArray(nums2)); // [-44, -10, -2, 0, 0, 3, 3, 5]
console.log("Sorted nums3:", sortArray(nums3)); // [-3.3, 0, 4.4, 4, 5, 5, 8, 10, 200]
