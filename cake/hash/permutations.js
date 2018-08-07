function permutations(string) {
  let unpairedLetters = new Set();

  for (let i = 0; i < string.length; i++) {
    let letter = string[i];

    if(unpairedLetters.has(letter)) {
      unpairedLetters.delete(letter);
    } else {
      unpairedLetters.add(letter);
    }
  }

  return unpairedLetters.size <= 1;

}
