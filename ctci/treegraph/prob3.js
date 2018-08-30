class tNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}

let root = new tNode(1)
let lOne = new tNode(2)
let rOne = new tNode(3)
let lTwo = new tNode(4)
let rTwo = new tNode(5)

root.left = lOne;
root.right = rOne;
lOne.parent = root;
rOne.parent = root;

lOne.left = lTwo;
lOne.right = rTwo;

lTwo.parent = lOne;
rTwo.parent = lOne;

function isBalanced(root) {
  let depths = [];
  let stack = [];
  stack.push({node: root, depth: 0})

  while(stack.length) {
    let {node, depth} = stack.pop();

    if(!node.left && !node.right) {
      if(depths.indexOf(depth) < 0) {
        depths.push(depth)
      }
    }

    if((depths.length > 2) || Math.abs(depths[0] - depths[1]) > 1) {
      return false
    }

    if(node.left) {
        stack.push({node: node.left, depth: depth + 1})
    }

    if(node.right) {
      stack.push({node: node.right, depth: depth + 1})
    }
  }
  return true;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function commonAns(node1, node2) {
  let node1depth = 0;
  let node1Runner = node1;
  let node2depth = 0;
  let node2Runner = node2;


  while(node1Runner.parent) {
    node1depth += 1
    node1Runner = node1Runner.parent
  }

  while(node2Runner.parent) {
    node2depth += 1
    node2Runner = node2Runner.parent
  }

  let deeperNode;
}
