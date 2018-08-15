// class LinkedListNode {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }
// 
// function isCycle(startNode) {
//   let slowPointer = startNode;
//   let fastPointer = startNode;
//
//   while(fastPointer && fastPointer.next) {
//     fastPointer = fastPointer.next.next
//     slowPointer = slowPointer.next
//
//     if(fastPointer === slowPointer) {
//       return true
//     }
//   }
//   return false
// }
//
// // let a = new LinkedListNode("A");
// // let b = new LinkedListNode("B");
// // let c = new LinkedListNode("C");
//
// a.next = b;
// b.next = c;
