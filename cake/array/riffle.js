function riffle(deck, half1, half2) {
  let deckIdx = 0;
  let half1Idx = 0;
  let half2Idx = 0;

  while (deckIdx < (deck.length)) {
    currentDeckCard = deck[deckIdx];
    half1Card = half1[half1Idx];
    half2Card = half2[half2Idx];

    if(currentDeckCard === half1Card) {
      half1Idx++
    } else if(currentDeckCard === half2Card) {
      half2Idx++
    } else {
      return false;
    }
    deckIdx++;
  }

  return true;
}
