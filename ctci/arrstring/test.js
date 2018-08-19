//problem1: IsUnique=> implemetn an algo to determine if all chars are unique.  What if you
// cannot use additional data structures
// time complexity = O(n) where n is string.length
// can argue to be O(1) since loop can never iterate over 128 chars assuming ASCII
// space complexity = O(1) // can be O(c) space where c is the size of the char set

function isUnique(str) {
  let hash = {};
  for (let i = 0; i < str.length; i++) {
    let letter = str[i];
    if(hash[letter]) {
      return false
    } else {
      hash[letter] = true
    }
  }
  return true
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//problem2: CheckPermutation => given two strings, determine if one is the permutation of the other
// time complexity = nlgn due to sorting strings
// Space complexity is O(1) where we access at most 128 chracters (assuming ASCII)
function checkPermutation(str1, str2) {
  if(str1.length !== str2.length) {
    return false;
  }
  return cleanWord(str1) === cleanWord(str2)
}

function cleanWord(word) {
  return word.toLowerCase().split("").sort().join("")
}
// time complexity = n
// space complexity = n
function checkPermutation2(str1, str2) {
  let hash = {};
  for (let i = 0; i < str1.length; i++) {
    let letter = str1[i].toLowerCase();
    if(hash[letter]) {
      hash[letter] += 1
    } else {
      hash[letter] = 1
    }
  }

  for (let j = 0; j < str2.length; j++) {
    let letter = str2[j].toLowerCase();
    if(hash[letter]) {
      hash[letter] -= 1
    } else {
      return false
    }
  }

  let keys = Object.keys(hash);
  for (let k = 0; k < keys.length; k++) {
    let key = keys[k];
    if(hash[key] != 0) {
      return false
    }
  }
  return true
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Write a method to replace all sapces in a string with '%20'. You may assume
// that the string has sufficient space at the end to hold the additional characters,
// and that you are given the 'true' length of the string.

//problem3 => URLify
// time complexity => n (iterate through list once)
// space complexity => 1

function URLify(str,length) {
  let finalStr = "";
  let currentLength = 0;
  let strArr = str.split(" ");
  let wordArr = []
  for (let i = 0; i < strArr.length; i++) {
    el = strArr[i];
    if(isWord(el)) {
      wordArr.push(el);
    }
  }
  for (let i = 0; i < wordArr.length; i++) {
    let word = wordArr[i];
    let letterCount = word.length;
    if(i < wordArr.length - 1) {
      finalStr += `${word}%20`
      currentLength += (word.length + 1)
    } else {
      finalStr += word
      currentLength += word.length
    }
  }
  if(currentLength === length) {
    return finalStr
  } else if(currentLength > length) {
    return null
  } else {
    while(currentLength < length) {
      finalStr +="%20"
      currentLength+=1
    }
    return finalStr
  }
}

function isWord(el) {
  if(el===" ") {
    return false
  }
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  for (var i = 0; i < el.length; i++) {
    if(alphabet.indexOf(el[i].toLowerCase()) >= 0) {
      return true
    }
  }
  return false
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//problem4 => Palindrome Permutaion
// Given a string, write a function to check if it is a permutation of a palindrome.
// A palindrome is a word or phrase that is the same forwards and backwards. A
// permutation is a rearrangement of letters. The palindrome does not need to be
// limited to just dictionary words.

//time complexity => O(n) have to iterate through string
//space complexity => O(1) limited characters

function palPerm(str) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz"
  let a = new Set();
  for (let i = 0; i < str.length; i++) {
    let letter = str[i].toLowerCase();
    if(a.has(letter)) {
      a.delete(letter)
    } else if(alphabet.indexOf(letter) >= 0) {
      a.add(letter)
    }
  }
  return a.size <= 1
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//problem5 => OneAway
// There are three types of edits that can be performed on strings: insert a character,
// remove a characgter, or replace a character. Given two strings, write a function to
// check if they are one edit (or zero edits) away.

//time complextiy => O(n)
//space => O(1)

function OneAway(str1, str2) {
  if(str1 === str2) {
    return true
  }
  if(str1.length === str2.length) {
    return isReplaced(str1, str2)
  } else if (Math.abs(str1.length - str2.length) === 1) {
    if(isInserted(str1, str2)) {
      return true
    } else {
      return false
    }
  } else {
    return false
  }
}

function isReplaced(str1, str2) {
  let count = 0;
  for (let i = 0; i < str1.length; i++) {
    let letter1 = str1[i];
    let letter2 = str2[i];
    if(letter1 != letter2) {
      count++
    }
  }
  return count <= 1
}

function isInserted(str1, str2) {
  let maxPointer = 0;
  let minPointer = 0;
  let max;
  let min;
  if(str1.length > str2.length) {
    max = str1;
    min = str2;
  } else {
    max = str2;
    min = str1;
  }

  for (let i = 0; i < min.length; i++) {
      let maxLetter = max[maxPointer];
      let minLetter = min[minPointer];
      if(maxLetter != minLetter) {
        if(max[maxPointer + 1] != minLetter) {
          return false
        }
      } else {
        maxPointer++
        minPointer++
      }
  }
  return true;
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//problem6 => StringCompression
// time complexity => O(n)
// space complexity => O(n)
function stringCompression(str) {
  let newStr = ""
  let count = 0
  for (let i = 0; i < str.length; i++) {
    let letter = str[i];
    if(!newStr.length) {
      newStr += letter;
      count += 1
    } else {
      if(letter !== str[i - 1]) {
        newStr += `${count}`
        newStr += letter
        count = 1;
      } else {
        count += 1
      }
    }
  }

    newStr += `${count}`

  if(newStr.length < str.length) {
    return newStr;
  } else {
    return str;
  }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//problem7 => rotate matrix
// time complexity O(n)
// space complexity O(1)
function rotateMatrix(matrix) {
  let newArr = []
  for (let i = 0; i < matrix.length; i++) {
    let row = matrix[i];
    let sub = [];
    for (let j = row.length - 1; j >= 0; j--) {
      sub.push(matrix[j][i])
    }
    newArr.push(sub)
  }
  return newArr
}

function rotateMatrixInPlace(matrix) {
  matrix = matrix.reverse();
  debugger
  // swap the symmetric elements
  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < i; j++) {
      debugger
      var temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }
  return matrix
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//problem 8 => zero matrix
// time complexity O(n)
// space complexity O(n)
function zeroMatrix(matrix) {
  let rowSet = new Set();
  let colSet = new Set();
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if(matrix[row][col] === 0) {
        rowSet.add(row);
        colSet.add(col)
      }
    }
  }

  for (let newrow = 0; newrow < matrix.length; newrow++) {
    for (let newcol = 0; newcol < matrix[newrow].length; newcol++) {
      if(rowSet.has(newrow) || colSet.has(newcol)) {
        matrix[newrow][newcol] = 0
      }
    }
  }
  return matrix
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//problem9 => StringRotation
// time complexity => O(n) due to isSubstring
// space => O(n) strlength
function stringRotation(str1, str2) {
  if(str1.length != str2.length) {
    return false;
  } else {
    str1 += strq
  }

  return isSubstring(testString, str2)
}

function isSubstring(string, sub) {
  return string.includes(sub)
}
