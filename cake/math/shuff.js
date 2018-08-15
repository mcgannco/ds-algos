function shuffle(arr) {
  for (let i = 0; i < arr.length; i++) {
    let random = getRand(i, arr.length - 1);
    if(random !== i) {
      let tmp = arr[i];
      arr[i] = arr[random];
      arr[random] = tmp;
    }
  }
  return arr;
}

function getRand(floor, ceiling) {
  return Math.floor(Math.random() * (ceiling - floor + 1)) + floor;
}
