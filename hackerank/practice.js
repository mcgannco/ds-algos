class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

let a = new Node(1)
let b = new Node(2)
let c = new Node(3)
a.right = b
b.left = c

var inorderTraversal = function(root) {
  debugger
    if(!root) return []
    let final = []
    helper(root, final)
    return final
};

function helper(node, final) {
  debugger
    if(!node) return null
    helper(node.left)
    final.push(node.val)
    helper(node.right)
}
