function fullShuffle(arr) {
  let tmp;
  for (let i = 0; i < arr.length; i++) {
    let randomIdx = getRandomIndex(i, arr.length - 1);
    if(randomIdx !== i) {
      tmp = arr[i];
      arr[i] = arr[randomIdx];
      arr[randomIdx] = tmp;
    }
  }
  return arr;
}

function getRandomIndex(floor, ceiling) {
  return Math.floor(Math.random() * (ceiling - floor + 1)) + floor;
}
