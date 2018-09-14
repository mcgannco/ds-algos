function wordCountEngine(el) {
  let hash = {};
  let strArr = el.split(" ")
  let newStrArr = [];
  for(let i = 0; i < strArr.lenght) {
    if(strArr[i].length) newStrArr.push(strArr[i])
  }
  for(let i = 0; i < newStrArr.length; i++) {
    let currWord = newStrArr[i];
    let nextWord = helper(currWord)
    if(hash[nextWord]) hash[nextWord] += 1;
    if(!hash[nextWord]) hash[nextWord] = 1;
  }
  let output = [];
  let final = [];
  let keys = Object.keys(hash);
  for(let i = 0; i < keys.length; i++) {
    let word = keys[i];
    let count = hash[word];
    if(output[count] && output[count][0][0].length === 1) {
      let tmp = output[count];
      output[count] = []
      output[count].push(tmp);
      output[count].push([word, count.toString()]);
    } else if(output[count]) {
      output[count].push([word, count.toString()])
    } else {
      output[count] = [word, count.toString()]
    }
  }

  for(let i = output.length - 1; i >= 0; i--) {
    let currEl = output[i];
    if(!currEl) {
      continue;
    } else if(currEl[0][0].length != 1) {
      for(let i = 0; i < currEl.length; i++) {
        final.push(currEl[i])
      }
    } else {
      final.push(currEl)
    }
  }
  debugger
  return final;
}

function helper(str) {
  str = str.toLowerCase()
  let letterArr = str.split("");
  let final = ""
  for(let i = 0; i < letterArr.length; i++) {
    let el = letterArr[i];
    if(el >= "a" && el <= "z") {
      final += el
    }
  }
  return final;
}

let el = "Every book is a quotation; and every house is a quotation out of all forests, and mines, and stone quarries; and every man is a quotation from all his ancestors. "
