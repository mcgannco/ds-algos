class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
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



function removeNodes(listHead, x) {
  debugger
    let head = listHead
    let prev = null
    while(head && head.data > x) {
        prev = head
        head = head.next
    }

    if(prev != null) prev.next = null

    let curr = head
    while(curr.next != null) {
        if(curr.next.data > x) {
          curr.next = curr.next.next
        } else {
          curr = curr.next
        }
    }
    return head
}
