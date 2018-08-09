class BTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insertLeft(value) {
    this.left = new BTreeNode(value);
    return this.left;
  }

  insertRight(value) {
    this.right = new BTreeNode(value);
    return this.right;
  }
}

function isBinarySearchTree(treeRoot) {

  if(!treeRoot) {
    return false;
  }

  let nodeArr = [];
  nodeArr.push({node: treeRoot, lowerBound: Number.NEGATIVE_INFINITY,
  upperBound: Number.POSITIVE_INFINITY})

  while (nodeArr.length > 0) {
    const {node, lowerBound, upperBound} = nodeArr.pop();

    if(node.value <= lowerBound || node.value >= upperBound) {
      return false;
    }

    if(node.left) {
      nodeArr.push({
        node: node.left,
        lowerBound: lowerBound,
        upperBound: node.value
      })
    }

    if(node.right) {
      nodeArr.push({
        node: node.right,
        lowerBound: node.value,
        upperBound: upperBound
      })
    }
  }
  return true
}

//tree construct
let root = new BTreeNode(10);
root.left = new BTreeNode(5);
root.right = new BTreeNode(12);
let node1 = root.left;
let node2 = root.right;
node1.left = new BTreeNode(100);
