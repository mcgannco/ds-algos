var spiralOrder = function(matrix) {
    let len = matrix.length;
    if(len === 0) {
      return [];
    }

    let colLength = matrix[0].length;
    let result = [];
    let nums = colLength * len;
    let currRow = 0;
    let currCol = 0;
    let rowMin = 0;
    let rowMax = len - 1;
    let colMin = 0;
    let colMax = colLength - 1;
    let numComplete = 0;
    let h = 1;
    let v = 0;
    while(numComplete < nums) {
      result.push(matrix[currRow][currCol]);
      numComplete+= 1;
      currRow += v;
      currCol += h;

      //upperRight
      if(currCol === colMax + 1 && currRow === rowMin) {
        rowMin += 1;
        currRow+= 1;
        currCol -=1;
        h = 0;
        v = 1;
      }
      //bottomRight
      else if(currCol === colMax && currRow === rowMax + 1) {
        colMax -=1;
        currCol -=1;
        currRow -=1;
        h = -1;
        v = 0;
      }
      //bottomLeft
      else if(currCol === colMin - 1 && currRow === rowMax) {
        currCol +=1;
        currRow -=1;
        rowMax -=1;
        h = 0;
        v = -1;
      }
      //topLeft
      else if(currRow === rowMin - 1 && currCol === colMin) {
        currRow+=1;
        currCol+= 1;
        colMin += 1;
        h = 1;
        v = 0;
      }
    }
    return result
};
let input = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]
