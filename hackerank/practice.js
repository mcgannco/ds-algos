

function sudokuSolve(board, count) {
  let r = -1;
  let c = -1;
  let candidates = null;

  for(let row = 0; row < board.length; row++) {
    for(let col = 0; col < board[row].length; col++) {
      if(board[row][col] === ".") {
        let newCandidates = getCandidates(board, row, col)
        if(candidates === null || newCandidates.length < candidates.length) {
          candidates = newCandidates
          r = row
          c = col
        }
      }
    }
  }

  if(candidates === null) return true;
  for(let i = 0; i < candidates.length; i++) {
    board[r][c] = candidates[i];
    if(sudokuSolve(board, count+=1)) {
      debugger
      console.log(count)
      return true
    } else {
      board[r][c] = "."
    }
  }
  return false
}

function getCandidates(board, row,col) {
  let candidates = [];
  for(let i = 1; i < 10; i++) {
    let option = i.toString()
    let collision = false;
    for(let i = 0; i < board.length; i++) {
      if(board[row][i] === option || board[i][col] === option ||
        board[(row - row % 3) + Math.floor(i / 3)][(col - col % 3) + i % 3] == option) {
          collision = true;
          break;
        }
    }
    if(!collision) candidates.push(option)
  }
  return candidates
}

let input = [[".",".",".","7",".",".","3",".","1"],["3",".",".","9",".",".",".",".","."],[".","4",".","3","1",".","2",".","."],[".","6",".","4",".",".","5",".","."],[".",".",".",".",".",".",".",".","."],[".",".","1",".",".","8",".","4","."],[".",".","6",".","2","1",".","5","."],[".",".",".",".",".","9",".",".","8"],["8",".","5",".",".","4",".",".","."]]
