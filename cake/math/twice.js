function twice(arr) {
  if(arr.length < 2) {
    return "need at least two nums"
  }

  let n = arr.length - 1;
  let sumWithOutDups = (((n * n) +  n) / 2)
  let actualSum = 0;
  for (let i = 0; i < arr.length; i++) {
    actualSum += arr[i]
  }

  return actualSum - sumWithOutDups
}

let arrr = [1,2,3,4,5,6,7,8,9,10,5]
