class Node {
  constructor(val) {
    this.val = val;
    this.next = null
  }
}

let a = new Node(1)
let b = new Node(2)
let c = new Node(3)
let d = new Node(4)
let e = new Node(5)
a.next = b
b.next = c
c.next = d
d.next = e

var oddEvenList = function(head) {
    if(!head) return;
    if(!head.next) return head
    let odd = head;
    let curr = head
    let even = head.next;

    while(odd.next) {
        let nextNode = odd.next
        odd.next = odd.next.next
        odd = odd.next
        nextNode.next = odd.next
        curr = odd;
    }

    odd.next = even
    debugger
};
