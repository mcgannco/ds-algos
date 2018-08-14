// class Stack {
//   constructor() {
//     this.items = [];
//   }
//
//   push(item) {
//     this.items.push(item)
//   }
//
//   pop() {
//     if(this.items.length) {
//       this.items.pop()
//     }
//   }
//
//   peek() {
//     if(this.items.length) {
//       return this.items[this.items.length - 1]
//     }
//   }
// }
//
// class Queue {
//   constructor() {
//     this.stack1 = [];
//     this.stack2 = [];
//   }
//
//   enqueue(item) {
//     this.stack1.push(item)
//   }
//
//   dequeue() {
//     if(!this.stack2.length && !this.stack1.length) {
//       return "no items in queue"
//     }
//
//     if(!this.stack2.length) {
//       while(this.stack1.length) {
//         let nextItem = this.stack1.pop();
//         this.stack2.push(nextItem)
//       }
//
//     }
//     let item = this.stack2.pop();
//     return item;
//   }
// }
//
// let a = new Queue()
