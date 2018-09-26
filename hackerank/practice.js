function main(arr) {
    let final = [[0,0,0,0]];
    let max = 0
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].length != 3) continue
        final.push(final[final.length - 1].slice(0))
        let begin = parseInt(arr[i][0])
        let end = parseInt(arr[i][1])
        let val = parseInt(arr[i][2])
        for(let j = begin-1; j <= end-1; j++) {
          if(final[final.length - 1][j]) {
            final[final.length - 1][j] += val
          } else {
            final[final.length - 1][j] = val
          }

        }
    }
    for(let i = 0; i < final.length; i++) {
      for(let j = 0; j < final[i].length; j++) {
        let el = final[i][j]
        if(el > max) max = el
      }
    }
    return max
}


let arr = [ [ '5', '3' ],
  [ '1', '2', '100' ],
  [ '2', '5', '100' ],
  [ '3', '4', '100' ] ]
