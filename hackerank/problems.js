function hourglassSum(arr) {

    let biggest = null;
    for (let row = 0; row < arr.length - 2; row++) {
      for (let col = 0; col < arr.length - 2; col++) {
         let hourglass = arr[row][col] + arr[row][col + 1] + arr[row][col + 2]
         + arr[row + 1][col + 1] + arr[row + 2][col] + arr[row + 2][col + 1]
         + arr[row + 2][col + 2]
         if(biggest === null) {
           debugger
             biggest = hourglass
         } else if (hourglass > biggest) {
             biggest = hourglass
         }
     }
    }
    return biggest
}

let testArr = [[1,1,1,0,0,0],[0,1,0,0,0,0], [1,1,1,0,0,0], [0,0,2,4,4,0],
[0,0,0,2,0,0],[0,0,1,2,4,0]]
