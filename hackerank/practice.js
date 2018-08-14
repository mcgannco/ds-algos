class BinaryTreeNode {
  constructor(val) {
    this.val = val;
    this.parent = null;
    this.left = null;
    this.right = null;
  }

  insertLeft(val) {
    this.left = new BinaryTreeNode(val);
    this.left.parent = this;
    return this.left
  }

  insertRight(val) {
    this.right = new BinaryTreeNode(val);
    this.right.parent = this;
    return this.right
  }
}

function biggest(node) {
  let currentNode = node;
  while(currentNode.right) {
    currentNode = currentNode.right
  }
  return currentNode
}

function secondBiggest(root) {
  if(!root.left && !root.right) {
    return "not big enough of a tree"
  }

  let biggestNode = biggest(root);
  if(biggestNode.left) {
    let mostRight = biggest(biggestNode.left);
    if(mostRight.val > biggestNode.val) {
      return biggestNode
    } else {
      return mostRight
    }
  } else {
    return biggestNode.parent;
  }
}

let root = new BinaryTreeNode(100)
root.insertLeft(50);
let left1 = root.left;
left1.insertLeft(30);
left1.insertRight(75);

let left2 = left1.left;
left2.insertLeft(20);
root.insertRight(200);
let right1 = root.right;
