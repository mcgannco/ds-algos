// class Stack {
//   constructor() {
//     this.items = [];
//   }
//
//   push(item) {
//     this.items.push(item)
//   }
//
//   pop(item) {
//     if(this.items.length > 0) {
//       this.items.pop();
//     } else {
//       return;
//     }
//   }
//
//   peek() {
//     if(this.items.length > 0) {
//       return this.items[this.items.length - 1]
//     } else {
//       return;
//     }
//   }
// }
//
// class MaxStack {
//   constructor() {
//     this.stack = new Stack();
//     this.maxStack = new Stack();
//   }
//
//   push(item) {
//     this.stack.push(item);
//     if(this.maxStack.peek() === null || item >= this.maxStack.peek()) {
//       this.maxStack.push(item)
//     }
//   }
//
//   pop() {
//     let item = this.stack.pop();
//     if(this.maxStack.peek() === item) {
//       this.maxStack.pop();
//     }
//   }
//
//   getMax() {
//     if(this.maxStack.length) {
//       maxStack.peek()
//     } else {
//       return null;
//     }
//   }
// }
//
// let a = new MaxStack();
