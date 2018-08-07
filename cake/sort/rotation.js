function rotation(arr) {
  let first_word = arr[0];
  let floorIdx = 0;
  let ceilingIdx = arr.length - 1;

  while(floorIdx < ceilingIdx) {
    let guessIdx = Math.floor(floorIdx + ((ceilingIndex - floorIndex) / 2))

    if(arr[guessIdx] >= first_word) {
      floorIdx = guessIdx
    } else {
      ceilingIdx = guessIdx
    }

    if(floorIdx + 1 === ceilingIdx) {
      break
    }
  }
  return ceilingIdx
}
