function sortScores(scoresArr, highestScorePossible) {
  let scoresSeen = [];
  for (let i = 0; i <= highestScorePossible; i++) {
    scoresSeen[i] = 0
  }

  for (let i = 0; i < scoresArr.length; i++) {
    let num = scoresArr[i];
    scoresSeen[num] += 1
  }

  let final = [];
  for (var score = 0; score < scoresSeen.length; score++) {
    let numTimes = scoresSeen[score];
    for (var i = 0; i < numTimes; i++) {
      final.push(score)
    }
  }

  return final;

}
