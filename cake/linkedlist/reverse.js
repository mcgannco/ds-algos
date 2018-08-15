// class LinkedListNode {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

function reverse(head) {
  let currentNode = head
  let previous = null;
  let next = null;
  while(currentNode) {
    next = currentNode.next;
    currentNode.next = previous;
    previous = currentNode
    currentNode = next
  }
  return currentNode
}
