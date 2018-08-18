class SingleNode {
  constructor(val=null) {
    this.val = val;
    this.next = null
  }
}

class SingleLinkedListSentinals {
  constructor() {
    this.head = new SingleNode();
    this.tail = new SingleNode();
    this.head.next = this.tail
  }

  prepend(val) {
    let newNode = new SingleNode(val);
    let oldFirst = this.head.next;
    this.head.next = newNode;
    newNode.next = oldFirst
  }
}

let aa = new SingleLinkedListSentinals()
