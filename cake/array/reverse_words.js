function reverseWords(arr) {
  reverseCharacters(arr, 0, arr.length - 1)

  let currentWordStartIdx = 0;
  for (let i = 0; i <= arr.length; i++) {
    if(i === arr.length || arr[i] === " ") {
      reverseCharacters(arr, currentWordStartIdx, i - 1)
      currentWordStartIdx = i + 1
    }
  }

  return arr;

}







function reverseCharacters(arr, left, right) {
  while(left < right) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left++;
    right--;
  }
  return arr
}
