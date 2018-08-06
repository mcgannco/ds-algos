function mergeLists(myArray, alicesArray) {
  let mergedArray = [];
  let currentAliceIdx = 0;
  let currentMeIdx = 0;
  let currentMergedIdx = 0;

  while(currentMergedIdx < (myArray.length + alicesArray.length)) {
    let firstUnmergedAlices = alicesArray[currentAliceIdx];
    let firstUnmergedMine = myArray[currentMeIdx];

    if(firstUnmergedMine < firstUnmergedAlices) {
      mergedArray[currentMergedIdx] = firstUnmergedMine
      currentMeIdx++;
    } else {
      mergedArray[currentMergedIdx] = firstUnmergedAlices
      currentAliceIdx++
    }
    currentMergedIdx++;
  }

  return mergedArray
}

// function mergeSort(arr) {
//   if(arr.length < 2) {
//     return arr;
//   }
//
//   const middle = Math.floor(arr.length / 2);
//   const left = mergeSort(arr.slice(0,middle));
//   const right = mergeSort(arr.slice(middle));
//
//   return merge(left, right)
// }
//
// function merge(left, right) {
//   const merged = [];
//
//   while(left.length > 0 && right.length > 0) {
//     let nextItem = left[0] < right[0] ? left.shift() : right.shift()
//     merged.push(nextItem);
//   }
//   return merged.concat(left, right);
//
// }
