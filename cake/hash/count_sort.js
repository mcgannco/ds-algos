function countSort(arr, max) {
  let numCounts = [];

  for (var i = 0; i < max + 1; i++) {
    numCounts[i] = 0;
  }

  arr.forEach(el => {
    numCounts[el] += 1
  })

  let sortedArr = [];
  let currentSortedIdx = 0;

  for (let i = 0; i < numCounts.length; i++) {
    let count = numCounts[i]
    for (var j = 0; j < count; j++) {
      sortedArr[currentSortedIdx] = i;
      currentSortedIdx++
    }
  }

  return sortedArr
}
