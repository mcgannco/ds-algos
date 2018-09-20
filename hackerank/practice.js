function sortKMessedArray(arr, k) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < i + 1 + k; j++) {
      if(arr[i] > arr[j]) {
        let tmp = arr[j];
        arr[j] = arr[i]
        arr[i] = tmp
      }
    }
  }
  return arr
}

let arr = [1, 4, 5, 2, 3, 7, 8, 6, 10, 9]
let k = 2
