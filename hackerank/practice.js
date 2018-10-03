class Node {
  constructor(val) {
    this.val = val;
    this.left = null
    this.right = null
  }
}

let a = new Node(4)
let b = new Node(2)
let c = new Node(7)
let d = new Node(1)
let e = new Node(3)
let f = new Node(6)
let g = new Node(9)

a.left = b
a.right = c
b.left = d
b.right = e
c.left = f
c.right = g

var levelOrder = function(root) {
  debugger
    let [final, queue] = [[],[root]];
    if(!root) return final
    while(queue.length) {
        let sub = [];
        let size = queue.length;
        for(let i = 0; i < size; i++) {
            let curr = queue.pop();
            sub.push(curr.val)
            if(curr.left){queue.unshift(curr.left)}
            if(curr.right){queue.unshift(curr.right)}
        }
        final.push(sub)
    }
    return final
};
