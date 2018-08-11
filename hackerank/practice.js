class Node {
  constructor(label) {
    this.label = label;
    this.left = null;
    this.right = null;
  }

  insertLeft(el) {
    this.left = new Node(el);
    return this.left;
  }

  insertRight(el) {
    this.right = new Node(el);
    return this.right;
  }
}

function isBsearchTree(root) {
  if(!root) {
    return "not a tree"
  }

  let lowerLimit = Number.NEGATIVE_INFINITY;
  let upperLimit = Number.POSITIVE_INFINITY;
  let nodes = [{root, lowerLimit: lowerLimit, upperLimit: upperLimit}]

  while (node.length > 0) {
    
  }
  return true;
}

//

//

let root = new Node(100);
let nodeOne = 200;
let nodeTwo = 300;
let nodeThree = 400;

root.insertLeft(nodeOne);
root.insertRight(nodeTwo);
