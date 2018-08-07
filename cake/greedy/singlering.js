function ringShuffle(arr1, arr2, shuffledArr) {

  let arr1Pointer = 0;
  let arr2Pointer = 0;
  for (let i = 0; i < shuffledArr.length; i++) {
    let topCard = shuffledArr[i];
    let arr1TopCard = arr1[arr1Pointer];
    let arr2TopCard = arr2[arr2Pointer];

    if(topCard === arr1TopCard) {
      arr1Pointer += 1;
    } else if (topCard === arr2TopCard) {
      arr2Pointer += 1;
    } else {
      return false;
    }
  }

  return true;

}
