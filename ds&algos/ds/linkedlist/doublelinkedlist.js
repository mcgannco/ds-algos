// //pros fast append / prepend / peek
// // cons slow lookup, worse cache performance
//
// class Node {
//   constructor(key=null, val=null) {
//     this.key = key;
//     this.val = val;
//     this.next = null;
//     this.prev = null
//   }
//
//   remove() {
//     if(this.key === null) {
//       return false
//     }
//     let previousNode = this.prev;
//     let nextNode = this.next;
//     nextNode.prev = previousNode;
//     previousNode.next = nextNode;
//   }
// }
//
// class DLinkedList {
//   constructor() {
//     this.head = new Node();
//     this.tail = new Node();
//     this.head.next = this.tail;
//     this.tail.prev = this.head;
//   }
//
//   append(key, val) {
//     if(key === null) {
//       return false
//     }
//     let newNode = new Node(key, val);
//     let oldLast = this.tail.prev;
//     this.tail.prev = newNode;
//     oldLast.next  = newNode;
//     newNode.next = this.tail;
//     newNode.prev = oldLast;
//   }
//
//   prepend(key, val) {
//     if(key === null) {
//       return false
//     }
//     let newNode = new Node(key, val)
//     let oldFirst = this.head.next;
//     oldFirst.prev = newNode
//     this.head.next = newNode
//     newNode.prev = this.head
//     newNode.next = oldFirst
//   }
//
//   first() {
//     if(!this.empty()) {
//     return  this.head.next
//     }
//   }
//
//   last() {
//     if(!this.empty()) {
//     return  this.tail.prev
//     }
//   }
//
//   delete(key) {
//     let currentNode = this.head;
//     while (currentNode.next) {
//       if(currentNode.key === key) {
//         return currentNode.remove()
//       }
//       currentNode = currentNode.next
//     }
//   }
//
//   empty() {
//     return this.head.next === this.tail
//   }
//
//   included(key) {
//     let currentNode = this.head;
//     while (currentNode.next) {
//       if(currentNode.key === key) {
//         return true;
//       }
//       currentNode = currentNode.next
//     }
//     return false;
//   }
//
//   get(key) {
//     let currentNode = this.head;
//     while (currentNode.next) {
//       if(currentNode.key === key) {
//         return currentNode;
//       }
//       currentNode = currentNode.next
//     }
//     return false;
//   }
//
//   each() {
//
//   }
// }
//
// let a = new DLinkedList()
