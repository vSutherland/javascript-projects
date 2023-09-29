function findMinValue(arr) {
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

function sortArrayAscending(arr) {
  const sortedArray = [];

  while (arr.length > 0) {
    const minValue = findMinValue(arr);
    sortedArray.push(minValue);
    arr.splice(arr.indexOf(minValue), 1);
  }

  return sortedArray;
}

// Sample arrays for testing:
let nums1 = [5, 10, 2, 42];

let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];

let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

// Testing the sortArrayAscending function
console.log(sortArrayAscending(nums1));

console.log(sortArrayAscending(nums2)); 

console.log(sortArrayAscending(nums3)); 
