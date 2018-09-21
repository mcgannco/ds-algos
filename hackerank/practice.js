class ListNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

let a = new ListNode(1)
let b = new ListNode(2)
let c = new ListNode(3)

a.right = b
b.left = c


var inorderTraversal = function(root) {
    let stack = [root];
    let traversed = [];
    let curr = root.left;
    if(!root) return traversed;
    debugger
    while(stack.length || curr) {
        while(curr) {
            stack.push(curr)
            curr = curr.left
        }
        curr = stack.pop()
        traversed.push(curr.val)
        curr = curr.right
    }
    return traversed
};
