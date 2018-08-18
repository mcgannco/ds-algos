class Node {
  constructor(val=null) {
    this.val = val;
    this.next = null
  }
}

class SingleLinkedListSentinals {
  constructor() {
    this.head = new Node();
    this.tail = new Node();
    this.head.next = this.tail
  }

  append() {
    
  }
}
