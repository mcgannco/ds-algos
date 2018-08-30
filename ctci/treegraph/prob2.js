// class BNode {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }
//
// function insertBalanced(arr) {
//   if(arr.length === 0) {
//     return null
//   }
//
//   if(arr.length === 1) {
//     return new BNode(arr[0])
//   }
//   let mid = Math.floor(arr.length / 2)
//   let left = arr.slice(0,mid)
//   let right = arr.slice(mid + 1)
//   let node = new Node(arr[mid])
//   node.left = insertBalanced(left)
//   node.right = insertBalanced(right)
//   return node
// }
//
// const arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
// let tree1 = insertBalanced(arr1)
//
// // problem 2
// function inOrderPrint(node) {
//   if(node) {
//     inOrderPrint(node.left)
//     console.log(node.val)
//     inOrderPrint(node.right)
//   }
// }
//
// function preOrderPrint(node) {
//   if(node) {
//     console.log(node.val)
//     preOrderPrint(node.left)
//     preOrderPrint(node.right)
//   }
// }
//
// function postOrderPrint(node) {
//   if(node) {
//     postOrderPrint(node.left)
//     postOrderPrint(node.right)
//     console.log(node.val)
//   }
// }
// ///////////////////////////////////////////////////////////////////////////////////////////////////
// //problem 3
//
// class LNode {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//     this.prev = null;
//   }
// }
//
// class LinkedList {
//   constructor() {
//     this.head = new LNode(null);
//     this.tail = new LNode(null);
//     this.head.next = this.tail;
//     this.tail.prev = this.head;
//   }
//
//   insert(val) {
//     let oldNode = this.tail.prev;
//     let newNode = new LNode(val);
//     this.tail.prev = newNode
//     newNode.next = this.tail
//     oldNode.next = newNode
//   }
//
//   isEmpty() {
//     return this.head.next === this.tail
//   }
// }
// function listDepths(node) {
//   let stack = [];
//   stack.push({node: node, depth: 0});
//   let depths = {};
//
//   while(stack.length) {
//     let {node, depth} = stack.shift();
//     if(depths[depth]) {
//       depths[depth].insert(node.val)
//     } else {
//       let newList = new LinkedList()
//       newList.insert(node.val)
//       depths[depth] = newList
//     }
//
//     if(node.left) {
//       stack.push({node: node.left, depth: depth + 1})
//     }
//
//     if(node.right) {
//       stack.push({node: node.right, depth: depth + 1})
//     }
//   }
//   return depths;
// }
//
// let list = new LinkedList()
//
// function isBST(node) {
//
//   let toVisit = []
//   toVisit.push({node: node, left: Number.NEGATIVE_INFINITY, right: Number.POSITIVE_INFINITY})
//   while(toVisit.length) {
//     let {node, left, right} = toVisit.shift();
//     if(node.val < left || node.val > right) {
//       return false;
//     }
//
//     if(node.left) {
//       toVisit.push({node: node.left, left: left, right: node.val})
//     }
//
//     if(node.right) {
//       toVisit.push({node: node.right, left: node.val, right: right})
//     }
//   }
//   return true;
// }
//
// function findSuccessor() {
//   var successor = null;
//   if (node.right !== null) {
//     successor = node.right;
//     while (successor.left !== null) {
//       successor = successor.left;
//     }
//   } else if (node.parent !== null) {
//     var currNode = node;
//     while (currNode.parent !== null && successor === null) {
//       if (currNode.parent.left === currNode) {
//         successor = currNode.parent;
//       }
//       currNode = currNode.parent;
//     }
//   }
//   return successor;
// }
