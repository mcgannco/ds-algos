function myreverse(arr) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1
  while (leftIdx < rightIdx) {
    let temp = arr[leftIdx];
    arr[leftIdx] = arr[rightIdx];
    arr[rightIdx] = temp;

    leftIdx++;
    rightIdx--;

  }
  return arr
}
