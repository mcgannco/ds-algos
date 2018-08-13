function inPlaceReverse(arr) {
  let startPointer = 0;
  let endPointer = arr.length - 1;
  while(startPointer < endPointer) {
    let tmp = arr[startPointer];
    arr[startPointer] = arr[endPointer];
    arr[endPointer] = tmp

    startPointer++;
    endPointer--;
  }
  return arr;
}
