function inflight(flightLength, movieLengths) {
  const movieHash = {}
  for (let i = 0; i < movieLengths.length; i++) {
    let otherLength = flightLength - movieLengths[i];
    if (movieHash[otherLength]) {
      return true;
    } else {
      movieHash[movieLengths[i]] = true
    }
  }

  return false;
}
