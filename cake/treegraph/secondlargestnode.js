class BinarySearchTreeNode {
  constructor(value) {
    this.value = value;
    this.parent = null;
    this.left = null;
    this.right = null;
  }

  insertLeft(value) {
    this.left = new BinarySearchTreeNode(value);
    this.left.parent = this;
    return this.left;
  }

  insertRight(value) {
    this.right = new BinarySearchTreeNode(value);
    this.right.parent = this;
    return this.right;
  }
}

function findLargest(rootNode) {
let current = rootNode;
while (current) {
  if (!current.right) return current.value;
  current = current.right;
}
}

function findSecondLargest(rootNode) {
if (!rootNode || (!rootNode.left && !rootNode.right)) {
  throw new Error('Tree must have at least 2 nodes');
}

let current = rootNode;

while (current) {

  // Case: current is largest and has a left subtree
  // 2nd largest is the largest in that subtree
  if (current.left && !current.right) {
    return findLargest(current.left);
  }

  // Case: current is parent of largest, and largest has no children,
  // so current is 2nd largest
  if (
    current.right
    && !current.right.left
    && !current.right.right
  ) {
    return current.value;
  }

  current = current.right;
}
}

let root = new BinarySearchTreeNode(100);
root.insertRight(200)
root.insertLeft(50)
root.right.insertRight(500)
root.right.insertLeft(150)
root.right.left.insertLeft(99)
root.right.left.insertRight(2000)
