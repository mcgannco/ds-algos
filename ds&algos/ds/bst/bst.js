/// Time complexity
// find: O(lgn) for balanced, O(n) for unbalanced
// insert: O(lgn) for balanced, O(n) for unbalanced


class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(val) {
    if(!this.root) {
      this.root = new Node(val)
    } else {
      this.traverse(val)
    }
  }

  traverse(val) {
    let leftChild = this.root.left;
    let rightChild = this.root.right;
    if(!leftChild && val < this.root.val) {
      this.root.left = new Node(val)
    } else if(!rightChild && val > this.root.val) {
      this.root.right = new Node(val)
    } else {
      let currentNode;
      if(val < this.root.val) {
        currentNode = leftChild
      } else {
        currentNode = rightChild
      }
      while(true) {
        if(!currentNode.left && !currentNode.right) {
          if(val < currentNode.val) {
            currentNode.left = new Node(val)
            break
          } else {
            currentNode.right = new Node(val)
            break
          }
        } else if(currentNode.left && currentNode.right) {
          if(val > currentNode.val) {
            currentNode = currentNode.right
          } else {
            currentNode = currentNode.left
          }
        } else if(currentNode.left) {
          if(val > currentNode.val) {
            currentNode.right = new Node(val)
            break
          } else {
            currentNode = currentNode.left
          }
        } else if(currentNode.right) {
          if(val < currentNode.val) {
            currentNode.left = new Node(val)
            break
          } else {
            currentNode = currentNode.right
          }
        }
      }
    }
  }

  find(val) {
    let currentNode = this.root;
    if(currentNode.val === val) {
      return currentNode;
    }
    while(true) {
      if(currentNode.val === val) {
        return currentNode
      } else if(!currentNode.left && !currentNode.right) {
        return "no node Found"
      } else if(val > currentNode.val) {
        currentNode = currentNode.right
      } else if(val < currentNode.val) {
        currentNode = currentNode.left
      }
    }
  }
}

let b = new BST()
