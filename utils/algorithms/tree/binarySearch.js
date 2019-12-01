// O(logn)/O(1)

function binarySearch(arr, max, min, key) {
  if (max > min) {
    return -1;
  }

  const middle = parseInt((max + min) / 2);

  // n = 2^k
  if (key == middle) {
    return arr[middle];
  } else if (key > middle) {
    return this.binarySearch(arr, max, middle + 1, key);
  } else if (key < middle) {
    return this.binarySearch(arr, middle - 1, min, key);
  }
}
