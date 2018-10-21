class TreeNode {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

let a = new TreeNode(1)
let b = new TreeNode(2)
let c = new TreeNode(3)

a.right = b
b.left = c

var inorderTraversal = function(root) {
    let arr = []
    helper(root, arr)
    return arr
};

function helper(node, arr) {
  debugger
    if(!node) return;
    helper(node.left)
    arr.push(node.va)
    helper(node.right)
}
