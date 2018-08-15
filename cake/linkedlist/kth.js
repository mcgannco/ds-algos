class LinkedListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function kthLast(k, head) {
  let length = 0;
  if(k - 0) {
    return "invalid"
  }
  let currentNode = head;
  while(currentNode) {
    currentNode = currentNode.next
    length += 1
  }

  let spaces = length - k;
  if(spaces < 0) {
    return "invalid"
  }

  let tracker = 0;
  let node = head
  while (tracker < spaces) {
    node = node.next
    tracker++
  }
  return node
}

let a = new LinkedListNode("A");
let b = new LinkedListNode("B");
let c = new LinkedListNode("C");
let d = new LinkedListNode("D");
let e = new LinkedListNode("E");
let f = new LinkedListNode("F");
let g = new LinkedListNode("G");
a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g
