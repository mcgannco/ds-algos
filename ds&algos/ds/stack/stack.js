//time complexity
//push O(1)
// pop O(1)
// peek O(1)
//space O(n)

class StackArr {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    this.items.pop();
  }

  peek() {
    if(!this.items.length) {
      return null
    } else {
      return this.items[this.items.length - 1]
    }
  }

  empty() {
    return this.items.length
  }

}

let a = new StackArr()

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor() {
    this.head = new Node(null);
    this.tail = new Node(null);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }
}

class StackLinkedList {
  constructor() {
    this.items = new LinkedList();
  }

  push(item) {
    if(item === null) {
      return null
    }
    let newNode = new Node(item);
    let oldNext = this.items.head.next;
    this.items.head.next = newNode;
    newNode.next = oldNext
    newNode.prev = this.items.head
    oldNext.prev = newNode
  }

  pop() {
    if(this.empty()) {
      return null;
    } else {
      let ejected = this.items.head.next
      this.items.head.next = ejected.next
      ejected.next.prev = this.head
    }
  }

  peek() {
    return this.items.head.next.val
  }

  empty() {
    return this.items.head.next.val === null
  }
}

let b = new StackLinkedList()
