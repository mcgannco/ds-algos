//queue time complexity
//enqueue => O(1)
//dequeue => O(1)
//peek => O(1)
//space O(n)

class QueueArr {
  constructor() {
    this.items = [];
  }

  enqueue(item) {
    this.items.unshift(item)
  }

  dequeue() {
    let item = this.items.pop()
    return item
  }

  peek() {
    if(this.items.length) {
      this.items[this.items.length - 1]
    }
  }

  empty() {
    return !this.items.length
  }

  print() {
    for (let i = 0; i < this.items.length; i++) {
      let item = this.items[i]
      console.log(item)
    }
  }
}

let a = new QueueArr()

class Node {
  constructor(val) {
    this.val = val;
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = new Node(null);
    this.tail = new Node(null);
    this.head.next = this.tail
  }
}

class QueueLinkedList {
  constructor() {
    this.items = new LinkedList();
    this.end = null;
  }

  enqueue(item) {
    if(item === null) {
      return null;
    }
    let newNode = new Node(item);
    if(this.empty()) {
      this.items.head.next = newNode
      newNode.next = this.items.tail
      this.end = newNode
    } else {
      this.end.next = newNode;
      newNode.next = this.items.tail
      this.end = this.end.next;
    }
    return newNode;
  }

  dequeue() {
    if(this.empty()) {
      return null
    } else {
      let dequeued = this.items.head.next;
      this.items.head.next = dequeued.next;
      return dequeued
    }
  }

  peek() {
    if(this.items.head.next.val === null) {
      return null
    } else {
      return this.items.head.next.val
    }
  }

  empty() {
    return this.items.head.next.val === null
  }

  print() {
    let currentNode = this.items.head.next;
    while (currentNode.val) {
      console.log(currentNode.val)
      currentNode = currentNode.next
    }
  }
}

let b = new QueueLinkedList()
