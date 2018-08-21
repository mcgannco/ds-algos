//problem 1 => Three in One:
class ThreeInOne {
  constructor() {
    this.items = [];
    this.middleBottom = 0;
    this.middleTop = 0;
  }

  push1(item) {
    this.items.unshift(item)
    this.middleBottom++;
    this.middleTop++
  }

  push2(item) {
    this.items.splice(this.middleTop, 0, item);
    this.middleTop++;
  }

  push3(item) {
    this.items.push(item)
  }

  pop1() {
    if(this.isEmpty1()) {
      return null;
    }

    let answer = this.items.shift();
    if(this.middleBottom > 0) {
      this.middleTop--
      this.middleBottom--
    }
    return answer;
  }

  pop2() {
    if(this.isEmpty2()) {
      return null;
    }

    let answer = this.items.splice(this.middleTop - 1, 1)
    if(this.middleTop > this.middleBottom) {
      this.middleTop --
      return answer[0]
    }
  }

  pop3() {
    if(this.isEmpty3()) {
      return null;
    }
    return this.items.pop()
  }

  isEmpty1() {
    return this.middleBottom === 0;
  }

  isEmpty2() {
    return this.middleTop - this.middleBottom === 0;
  }

  isEmpty3() {
    return this.middleTop === this.items.length;
  }

  peek1() {
    if(this.isEmpty1()) {
      return null
    }

    return this.items[0]
  }

  peek2() {
    if(this.isEmpty2()) {
      return null
    }

    return this.items[this.middleTop - 1]
  }

  peek3() {
    if(this.isEmpty3()) {
      return null
    }

    return this.items[this.items.length - 1]
  }
}

let a = new ThreeInOne()
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//problem 2 StackMin
class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item)
  }

  pop() {
    if(this.empty()) {
      return null
    }

    return this.items.pop()
  }

  peek() {
    if(this.empty()) {
      return null;
    }

    return this.items[this.items.length - 1]
  }

  empty() {
    if(this.items.length) {
      return false;
    } else {
      return true;
    }
  }
}

class StackMin {
  constructor() {
    this.items = new Stack();
    this.min = new Stack();
  }

  push(item) {
    this.items.push(item)
    if(this.min.empty() || item <= this.min.peek()) {
      this.min.push(item)
    }
    return item
  }

  pop() {
    if(this.items.empty()) {
      return null;
    }

    let item = this.items.pop()
    if(item === this.min.peek()) {
      this.min.pop()
    }

    return item;
  }

  minNum() {
    if(this.items.empty()) {
      return null;
    } else {
      return this.min.peek()
    }
  }

  peek() {
    return this.items.peek()
  }

}

let b = new StackMin()

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//problem 3 StackofPlates

class StackOfPlates {
  constructor() {
    this.items = []
    this.capacity = 3;
    this.currStack = 0;
  }

  push(item) {
    if(!this.items.length) {
      let newStack = new Stack()
      newStack.push(item)
      this.items.push(newStack)
    } else {
      if(this.items[this.currStack].items.length === this.capacity) {
        let newStack = new Stack();
        this.currStack++
        newStack.push(item);
        this.items.push(newStack)
      } else {
        this.items[this.currStack].items.push(item)
      }
    }
    return item
  }

  pop() {
    if(this.empty()) {
      return null;
    } else {
      let lastPlate = this.items[this.currStack].items
      if(lastPlate.length === 1) {
        let item = lastPlate.pop();
        this.items.pop()
        this.currStack--
        return item
      } else {
        let item = lastPlate.pop()
        return item
      }
    }
  }

  peek() {
    if(this.empty()) {
      return null;
    } else {
      return this.items[this.currStack].items[this.items[this.currStack].items.length - 1]
    }
  }

  empty() {
    if(this.items.length) {
      return false
    } else {
      return true
    }
  }

  popAt(idx) {
    if(this.empty() || idx < 0 || idx > this.items.length) {
      return null
    } else {
      let arr = this.items[idx - 1].items
      if(arr.length === 1) {
        let item = arr.pop();
        this.items.splice(idx - 1, 1)
        if(this.currStack > 0) {
          this.currStack--
        }
        return item
      } else {
        return arr.pop()
      }
    }
  }

  pushAt(idx,el) {
    if(idx < 0 || idx > this.items.length) {
      return null
    }
    let arr = this.items[idx - 1].items
    if(arr.length === this.capacity) {
      return "stack full";
    } else {
      arr.push(el)
      return el
    }
  }
}

let c = new StackOfPlates()
c.push(1)
c.push(2)
c.push(3)
c.push(4)
c.push(5)
c.push(6)
c.push(7)
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//problem 4 StackofPlates

class MyQueue {
  constructor() {
    this.start = new Stack();
    this.end = new Stack()
  }

  enqueue(item) {
    this.start.push(item);
    return item
  }

  dequeue() {
    if(this.end.empty() && this.start.empty()) {
      return null
    } else if (this.start.empty()) {
      let item = this.end.pop();
      return item
    } else if(this.end.empty()) {
      while(this.start.items.length) {
        this.end.push(this.start.pop())
      }
      let item = this.end.pop()
      return item
    } else {
      let item = this.end.pop()
      return item;
    }
  }

  peek() {
    if(this.end.empty() && !this.start.empty()) {
      return this.start.items[0];
    } else {
      return this.end.items[this.end.items.length - 1]
    }
  }

  empty() {
    return (this.start.empty() && this.end.empty())
  }
}

let d = new MyQueue()
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//problem 5 SortStack

function SortStack(stack) {
  let tmp = new Stack();
  let currentMin = null;
  let stackLength = stack.items.length
  let numMins = 0
  while (numMins < stackLength) {
    for (let i = 0; i < (stackLength - numMins); i++) {
      let nextItem = stack.peek();
      if(currentMin === null) {
        currentMin = nextItem;
        tmp.push(stack.pop())
      } else if(nextItem < currentMin) {
        currentMin = nextItem
        tmp.push(stack.pop())
      } else {
        tmp.push(stack.pop())
      }
    }

    if((tmp.items.length === stackLength) && (numMins === stackLength) ) {
      // debugger
    } else {
      while(tmp.items.length != numMins) {
        if(tmp.peek() === currentMin) {
          tmp.pop()
        } else {
          stack.push(tmp.pop())
        }
      }
    }
    tmp.push(currentMin);
    currentMin = null;
    numMins++
  }
  while(!tmp.empty()) {
    stack.push(tmp.pop())
  }
  return stack.items;
}


let tmp = new Stack;
tmp.push(1)
tmp.push(2)
tmp.push(3)
tmp.push(4)
tmp.push(5)
tmp.push(6)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//problem 5 AnimalShelter

class Node {
  constructor(type, val) {
    this.type = type;
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor() {
    this.head = new Node(null, null);
    this.tail = new Node(null, null);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }
}

class AnimalShelter {
  constructor() {
    this.dogQ = new LinkedList();
    this.catQ = new LinkedList();
    this.allQ = new LinkedList;
  }

  enqueue(animal) {
    if(animal.type != 'cat' && animal.type != 'dog') {
      return null;
    } else if(animal.type === 'cat') {
      this.enqueueCat(animal);
    } else {
      this.enqueueDog(animal);
    }
    let inFront = this.allQ.tail.prev;
    let newNode = new Node(animal.type, animal.val);
    this.allQ.tail.prev = newNode
    newNode.prev = inFront;
    newNode.next = this.allQ.tail
    inFront.next = newNode
  }

  enqueueCat(animal) {
    let inFront = this.catQ.tail.prev;
    let newNode = animal;
    this.catQ.tail.prev = newNode
    newNode.prev = inFront;
    newNode.next = this.catQ.tail
    inFront.next = newNode
  }

  enqueueDog(animal) {
    let inFront = this.dogQ.tail.prev;
    let newNode = animal;
    this.dogQ.tail.prev = newNode
    newNode.prev = inFront;
    newNode.next = this.dogQ.tail
    inFront.next = newNode
  }

  dequeue(type = null) {
    if(type != 'cat' && type != 'dog') {
      type = null;
    }
    let qType;
    if(type==="cat") {
      qType = this.peekCat();
    } else if (type ==="dog") {
      qType = this.peekDog();
    } else {
      qType = this.peekAll();
    }

    if(this.empty(qType)) {
      return null;
    }

    if(type === 'cat') {
      if(!this.catQ.head.next.val) {
        return null
      }
      qType = this.peekCat();
      this.catQ.head.next = qType.next;
      qType.next.prev = this.catQ.head;
    } else if (type === 'dog') {
      if(!this.dogQ.head.next.val) {
        return null
      }
      qType = this.peekDog();
      this.dogQ.head.next = qType.next;
      qType.next.prev = this.dogQ.head;
    }

    if(this.isEqual(qType, this.peekAll())) {
      this.allQ.head.next = this.peekAll().next
      this.peekAll().prev = this.allQ.head
      if(qType.type === "cat") {
        this.catQ.head.next = this.peekCat().next
        this.peekCat().prev = this.catQ.head
      } else if(qType.type === "dog") {
        this.allQ.head.next = this.peekDog().next
        this.peekDog().prev = this.dogQ.head
      }
    } else {
      let runner = this.allQ.head.next;

      while(!this.isEqual(runner, qType)) {
        runner = runner.next;
      }
      debugger
      let prevNode = runner.prev;
      let nextNode = runner.next
      prevNode.next = nextNode
      nextNode.prev = prevNode;
      debugger
    }
    if(qType.type) {
      return qType;
    }

  }

  peekAll() {
    if(this.allQ.head.next.val) {
      return this.allQ.head.next
    } else {
      return null;
    }
  }

  isEqual(node1, node2) {
    return ((node1.val === node2.val) && (node1.type === node2.type))
  }

  peekDog() {
    if(this.dogQ.head.next.val) {
      return this.dogQ.head.next
    } else {
      return null;
    }
  }

  peekCat() {
    if(this.catQ.head.next.val) {
      return this.catQ.head.next
    } else {
      return null;
    }
  }

  empty(node) {
    if(!node) {
      return true;
    }
    if(node.type === 'cat') {
      return !this.catQ.head.next.val
    } else if(node.type === 'dog') {
      return !this.dogQ.head.next.val
    } else {
      return !this.allQ.head.next.val
    }
  }
}

let cat1 = new Node('cat', 1)
let cat2 = new Node('cat', 2)
let cat3 = new Node('cat', 3)

let dog1 = new Node('dog', 1)
let dog2 = new Node('dog', 2)
let dog3 = new Node('dog', 3)
let animal = new AnimalShelter()
animal.enqueue(cat1)
animal.enqueue(dog1)
animal.enqueue(cat2)
animal.enqueue(dog2)
animal.enqueue(cat3)
animal.enqueue(dog3)
