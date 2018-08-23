function playlist(songs, k, q) {
    let currentSong = songs[k];
    let currentIdx = k;
    let nextSong = songs[q];
    let downMoves = 0;
    let upMoves = 0;

    for(let i = k; i < songs.length + k; i++) {
      let current = songs[i % songs.length]
      if((current === nextSong) && (i != k)) {
        break;
      } else {
        upMoves += 1
      }
    }

    for(let i = k; i > -songs.length + k; i--) {
      let idx = Math.abs(i % songs.length)
      let current = songs[idx]
      if((current === nextSong) && (i != k)) {
        break;
      } else {
        downMoves += 1
      }
    }

    return Math.min(upMoves, downMoves)

}

let songs = ["wheniseeyouagain", "borntorun", "nothingelsematters", "cecelia", 1, "cecelia"]
