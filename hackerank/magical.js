//We define a magical subsequence of s to be a sequence of
//letters derived from s that contains all five vowels in order.
//This means a magical subsequence will have one or more a's followed
//by one or more e's followed by one or more i's followed by one or
//more o's followed by one or more u's. For example, if s = "aeeiooua",
//then "aeiou" and "aeeioou" are magical subsequences but "aeio" and
//"aeeioua" are not.

//Write a function to find length of longest magical
//subsequence with parameter string s.



function longestSubsequence(s) {
  const input = s
  let curr = { "1": {price: -1} }
  const nodes = []
  const vowels = '1aeiou'
  const getPrevLetter = (node) => vowels[vowels.indexOf(node.letter) -1]
  let resultNode;
  function setUpNodeByCurrent(node, letter){
      node.price = curr[letter].price + 1
      node.previous = curr[letter]
  }
  function setBestResultIfNeeded(node){
      if(node.letter !== 'u') {
          return
      }
      if(!resultNode || resultNode.price < node.price) {
          resultNode = node
          return
      }
  }
  function setCurrent(letter){
      const node = {
          letter,
          price: 0
      }
      const prevLetter = getPrevLetter(node)
      if(!prevLetter || !curr[prevLetter]){
          return
      }
      if(curr[node.letter]) {
          setUpNodeByCurrent(node, node.letter)
      }
      if(node.price < curr[prevLetter].price + 1) {
          setUpNodeByCurrent(node, prevLetter)
      }
      curr[node.letter] = node
      setBestResultIfNeeded(node)
  }
  function getStringResult(node){
      let result = ''
      while(node) {
          result = node.letter + result
          node = node.previous
      }
      return result
  }
  function getResult(){
      const node = resultNode //getBestResultNode()
      const result = getStringResult(node)
      return result.length
  }
  for(let l of input){
      setCurrent(l)
  }
  let answer = getResult()
  return answer
}
