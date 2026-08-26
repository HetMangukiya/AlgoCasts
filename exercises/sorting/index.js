// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  while (true) {
    let didSwap = false;
    for (let i = 0; i < arr.length - 1; i++) {
      let a = arr[i];
      let b = arr[i + 1];

      if (b < a) {
        arr[i] = b;
        arr[i + 1] = a;
        didSwap = true;
      }
    }

    if (!didSwap) {
      break;
    }
  }

  return arr;
}

function selectionSort(arr) {
  let sortedIndex = 0;

  while (sortedIndex < arr.length) {
    let minIndex = sortedIndex;
    for (let i = sortedIndex; i < arr.length; i++) {
      minIndex = arr[i] < arr[minIndex] ? i : minIndex;
    }

    const min = arr[minIndex];
    const sortedEl = arr[sortedIndex];

    arr[minIndex] = sortedEl;
    arr[sortedIndex] = min;
    sortedIndex++;
  }

  return arr;
}

function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }

  const center = Math.floor(arr.length / 2);
  const left = arr.slice(0, center);
  const right = arr.slice(center);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const result = [];
  let leftPointer = 0;
  let rightPointer = 0;

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  return [...result, ...left, ...right];
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
