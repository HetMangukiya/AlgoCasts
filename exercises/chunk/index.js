// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// function chunk(array, size) {
//   const chunkedArray = [];

//   for (let item of array) {
//     if (chunkedArray.at(-1)?.length < size) {
//       chunkedArray.at(-1).push(item);
//     } else {
//       chunkedArray.push([item]);
//     }
//   }

//   return chunkedArray;
// }

function chunk(array, size) {
  const chunkedArray = [];

  for (let i = 0; i < Math.ceil(array.length / size); i++) {
    chunkedArray.push(array.slice(i * size, (i + 1) * size));
  }

  return chunkedArray;
}

module.exports = chunk;
