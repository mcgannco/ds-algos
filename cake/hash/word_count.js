function wordCloud(string) {
  let hash = {};
  let newString = "";
  for (let i = 0; i < string.length; i++) {
    let character = string[i];
    if(isLetter(character) || character === " ") {
      newString += character.toLowerCase();
    }
  }

  let wordsArr = newString.split(" ");
  wordsArr.forEach(word =>{
    if(hash[word]) {
      hash[word] += 1
    } else {
      hash[word] = 1
    }
  })
  return hash;
}

function isLetter(letter) {
  return 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.indexOf(letter) >= 0;
}
