//basically turn everything into a string, then map over string and use charcode to turn into number.
//then multiplty that number by another big number to get a super random hashed number
//pros fast append / prepend / peek
// cons slow lookup, worse cache performance

class Node {
  constructor(key=null, val=null) {
    this.key = key;
    this.val = val;
    this.next = null;
    this.prev = null
  }

  remove() {
    if(this.key === null) {
      return false
    }
    let previousNode = this.prev;
    let nextNode = this.next;
    nextNode.prev = previousNode;
    previousNode.next = nextNode;
  }
}

class DLinkedList {
  constructor() {
    this.head = new Node();
    this.tail = new Node();
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  append(key, val) {
    if(key === null) {
      return false
    }
    let newNode = new Node(key, val);
    let oldLast = this.tail.prev;
    this.tail.prev = newNode;
    oldLast.next  = newNode;
    newNode.next = this.tail;
    newNode.prev = oldLast;
  }

  prepend(key, val) {
    if(key === null) {
      return false
    }
    let newNode = new Node(key, val)
    let oldFirst = this.head.next;
    oldFirst.prev = newNode
    this.head.next = newNode
    newNode.prev = this.head
    newNode.next = oldFirst
  }

  first() {
    if(!this.empty()) {
    return  this.head.next
    }
  }

  last() {
    if(!this.empty()) {
    return  this.tail.prev
    }
  }

  delete(key) {
    let currentNode = this.head;
    while (currentNode.next) {
      if(currentNode.key === key) {
        return currentNode.remove()
      }
      currentNode = currentNode.next
    }
  }

  update(key, value) {
    let currentNode = this.head;
    while (currentNode.next) {
      if(currentNode.key === key) {
        currentNode.val = value;
      }
      currentNode = currentNode.next
    }
  }

  empty() {
    return this.head.next === this.tail
  }

  included(key) {
    let currentNode = this.head;
    while (currentNode.next) {
      if(currentNode.key === key) {
        return true;
      }
      currentNode = currentNode.next
    }
    return false;
  }

  get(key) {
    let currentNode = this.head;
    while (currentNode.next) {
      if(currentNode.key === key) {
        return currentNode;
      }
      currentNode = currentNode.next
    }
    return false;
  }

  each() {
    let all = [];
    let currentNode = this.head;
    while (currentNode.next) {
      if(currentNode.key) {
        all.push(currentNode)
      }
      currentNode = currentNode.next
    }
    return all;
  }
}


Number.prototype.hashed = function() {
    return this.valueOf() * 289478399;
};

Array.prototype.hashed = function () {
  let string = "["
  let stringed = this.toString();
  for (var i = 0; i < stringed.length; i++) {
    let el = stringed[i];
    if(i === stringed.length - 1) {
      string += el
      string += "]"
    } else {
      string += el
    }
  }
  var hash = 0, i, chr;
  if (this.length === 0) return hash;
  for (i = 0; i < string.length; i++) {
    chr   = string.charCodeAt(i);
    hash  = ((hash << 5) - hash) + chr;
    hash |= 0;
  }
  return hash.hashed();
};

String.prototype.hashed = function () {
  var hash = 0, i, chr;
  if (this.length === 0) return hash;
  for (i = 0; i < this.length; i++) {
    chr   = this.charCodeAt(i);
    hash  = ((hash << 5) - hash) + chr;
    hash |= 0;
  }
  return hash.hashed();
};

Object.prototype.hashed = function () {
  let that = this;
  var result = Object.keys(this).map(function(key) {
    return [key, that[key]];
  });
  return result.hashed()
};
//////////////////////////


class HashSet {
  constructor() {
    this.maxSize = 3;
    this.items = Array.apply(null, Array(this.maxSize)).map(function () {return []});
  }

  insert(el) {
    if(this.includes(el)) {
      return false;
    } else {
      if(this.size() === this.maxSize) {
        this.resize();
      }
      let newIdx = this.hashedIdx(el)
      this.items[newIdx].push(el)
    }
  }

  delete(el) {
    if(this.includes(el)) {
      let bucketIdx = this.hashedIdx(el)
      for (let i = 0; i < this.items[bucketIdx].length; i++) {
        if(this.items[bucketIdx][i] === el) {
          this.items[this.hashedIdx(el)].splice(i, 1);
        }
      }
    } else {
      return false;
    }
  }

  includes(el) {
    let hashedIdx = this.hashedIdx(el);
    let bucket = this.items[hashedIdx]
    let hashedEl = el.hashed();
    for (let i = 0; i < bucket.length; i++) {
      let hashedBucketItem = bucket[i].hashed();
      if(hashedBucketItem === hashedEl) {
        return true
      }
    }
    return false
  }

  hashedIdx(el) {
    let hashed = el.hashed();
    return Math.abs(hashed % this.maxSize);
  }

  size() {
    let filled = 0;
    for (let i = 0; i < this.items.length; i++) {
      let currentBucket = this.items[0];
      if(currentBucket.length) {
        for (let j = 0; j < currentBucket.length; j++) {
          filled += 1
        }
      }
    }
    return filled;
  }

  numBuckets() {
    return this.items.length
  }

  resize() {
    let tmp = this.items;
    this.maxSize *= 2;
    this.items = Array.apply(null, Array(this.maxSize)).map(function () {return []});
    for (let i = 0; i < tmp.length; i++) {
      let bucket = tmp[i];
      for (let j = 0; j < bucket.length; j++) {
        let item = bucket[j];
        let hashedIdx = this.hashedIdx(item)
        this.items[hashedIdx].push(item)
      }
    }
  }
}

class HashMap {
  constructor() {
    this.itemsLength = 2;
    this.filled = 0;
    this.items = Array.apply(null, Array(this.itemsLength)).map(function () {return new DLinkedList()});
  }

  set(key, value) {
    let bucket = this.hashedIdx(key);
    if(this.size() === this.itemsLength) {
      this.resize();
    }
    if(this.includes(key)) {
      this.items[bucket].update(key, value);
    } else {
      this.items[bucket].append(key, value)
      this.filled += 1;
    }
  }

  delete(key) {
    let hashedIdx = this.hashedIdx(key)
    this.items[hashedIdx]
    if(this.items[hashedIdx].get(key)) {
      return this.items[hashedIdx].delete(key)
      this.filled -= 1;
    } else {
      return null;
    }
  }

  get(key) {
    let hashedIdx = this.hashedIdx(key)
    this.items[hashedIdx]
    if(this.items[hashedIdx].get(key)) {
      return this.items[hashedIdx].get(key)
    } else {
      return null;
    }
  }

  resize() {
    let tmp = this.items;
    this.itemsLength *= 2;
    this.items = Array.apply(null, Array(this.itemsLength)).map(function () {return new DLinkedList()});
    for (let i = 0; i < tmp.length; i++) {
      let currentLinkedList = tmp[i];
      if(!currentLinkedList.empty()) {
        let allNodes = currentLinkedList.each()
        for (var j = 0; j < allNodes.length; j++) {
          let currentNode = allNodes[j];
          let newBucket = this.hashedIdx(currentNode.key);
          this.items[newBucket].append(currentNode.key, currentNode.val)
        }
      }
    }
  }

  hashedIdx(key) {
    return (Math.abs(key.hashed()) % this.itemsLength)
  }

  includes(key) {
    let hashedIdx = this.hashedIdx(key)
    if(this.items[hashedIdx].included(key)) {
      return true
    } else {
      return false;
    }
  }

  size() {
    return this.filled;
  }
}

class LRUCache {
  constructor() {
    this.map = new HashMap();
    this.list = new DLinkedList();
  }

  get(key) {
    if(this.map.get(key)) {
      return this.map.get(key).val
    } else {
      return null;
    }
  }

  insert(key, value) {
    if(this.map.get(key)) {
      let node = this.map.get(key)
      this.updateNode(node)
    } else {
      this.list.prepend(key, value)
      this.map.set(key, this.list.first());
    }

    if(this.map.filled === 10) {
      this.eject()
    }
  }

  eject() {
    let listNode = this.list.last();
    listNode.remove();
    this.map.delete(listNode.key)
  }

  updateNode(node) {
    let listNode = this.map.get(node.key);
    listNode.val.remove()
    this.list.prepend(listNode.key, listNode.val.val)
    this.map.set(this.list.first().key, this.list.first())
  }

  print() {
    let topNode = this.list.first()
    if(!topNode) {
      return "nothing in the cache"
    } else {
      let string = "[";
      while(topNode.key) {
        string += `[${topNode.key}, ${topNode.val}]`
        topNode = topNode.next
      }
      string += "]"
      return string;
    }
  }
}

let a = new LRUCache()
