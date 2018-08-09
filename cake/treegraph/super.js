class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insertLeft(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
  }

  insertRight(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
  }
}

function isBalanced(root) {
  if(!root) {
    return null;
  }

  const nodes = [];
  const depths = [];
  nodes.push([root, 0])

  while (nodes.length > 0) {
    let element = nodes.pop();
    let node = element[0]
    let depth = element[1];

    if(!node.left || !node.right) {
      debugger
      if(depths.indexOf(depth) < 0) {
        depths.push(depth);
        if((depths.length > 2) || (depths.length === 2 && Math.abs(depths[0] - depths[1]) > 1)) {
          return false;
        }
      }
    } else {
      debugger
      if(node.left) {
        nodes.push([node.left, depth + 1])
      }

      if (node.right) {
        nodes.push([node.right, depth + 1])
      }
    }
  }

  return true;
}

// let root = new BinaryTreeNode(1);
// root.left = new BinaryTreeNode(2);
// root.right = new BinaryTreeNode(3);
// let node1 = root.left;
// let node2 = root.right;
