class TrieNode {
  constructor(letter = '') {
    this.val = letter;
    this.children = {};
    this.completeWord = false;
  }
}

class Trie {
  constructor() {
    this.rootNode = new TrieNode()
  }

  insertWord(word) {
    let node = this.rootNode;
    for (let i = 0; i < word.length; i++) {
      let letter = word[i];
      if(node.children[letter]) {
        node = node.children[letter]
      } else {
        let newNode = new TrieNode(letter);
        node.children[letter] = newNode;
        node = newNode
      }
    }
    node.completeWord = true
  }

  findWord(word) {
    let node = this.rootNode;
    for (let i = 0; i < word.length; i++) {
      let letter = word[i];
      if(node.children[letter]) {
        node = node.children[letter]
      } else {
        return false
      }
    }
    return true
  }

  removeWord(word) {
    debugger
    let node = this.rootNode;
    if(!word) {
      return null;
    }

    const chain = [];
    for (const letter of word) {
      if (node.children[letter]) {
        chain.push(node) // we want all nodes accessible in chain so we can move backwards and remove dangling nodes
        node = node.children[letter]
      } else {
        return null; // word is not in trie
      }
    }

    if(Object.keys(node.children).length) {
      node.completeWord = false;
      return node;
    }
    
    let child = node;
    let parent = chain.length ? chain.pop() : null;

    while(true) {
      child && parent && delete parent.children[child.val];

      if (Object.keys(parent.children).length || !chain.length) { // if more children or chain is empty, we're done!
        node.isWord = false;
        return node;
      }
    // otherwise, we have no more children for our parent and we should keep deleting nodes
    // our next parent is what we pop from the chain
    // our child is what our parent was.
        child = parent;
        parent = chain.pop()
      }
    }
}

let a = new Trie()
