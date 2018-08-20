class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null
  }
}

class SingleNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SingleLinkedList {
  constructor(val) {
    this.head = new SingleNode(null);
    this.tail = new SingleNode(null);
    this.head.next = this.tail
  }

  prepend(el) {
    if(el === null || el === undefined) {
      return null
    }
    let newNode = new SingleNode(el)
    let oldFirst = this.head.next;
    this.head.next = newNode
    newNode.next = oldFirst
  }

  print() {
    let currentNode = this.head.next;
    while(currentNode.val) {
      console.log(`${currentNode.val}`)
      currentNode = currentNode.next
    }
  }

  length() {
    let currentNode = this.head.next
    let count = 0;
    while (currentNode.val) {
      count += 1
      currentNode = currentNode.next
    }
    return count;
  }

}

class LinkedList {
  constructor() {
    this.head = new Node(null)
    this.tail = new Node(null)
    this.head.next = this.tail
    this.tail.prev = this.head
  }

  prepend(el) {
    if(el === null || el === undefined) {
      return null
    }
    let newNode = new Node(el)
    let oldFirst = this.head.next;
    oldFirst.prev = newNode
    this.head.next = newNode
    newNode.prev = this.head
    newNode.next = oldFirst
  }

  append(el) {
    if(el === null || el === undefined) {
      return null
    }
    let newNode = new Node(el);
    let oldLast = this.tail.prev;
    this.tail.prev = newNode;
    oldLast.next  = newNode;
    newNode.next = this.tail;
    newNode.prev = oldLast;
  }

  print() {
    let currentNode = this.head.next;
    while(currentNode && currentNode.val) {
      console.log(`${currentNode.val}`)
      currentNode = currentNode.next
    }
  }

  length() {
    let count = 0;
    let currentNode = this.head.next
    while(currentNode.val) {
      count += 1
      currentNode = currentNode.next
    }
    return count;
  }
}

let a = new LinkedList()
a.append(2);
a.append(1);
a.append(2);
a.append(3);


// Input: 3 -> 5 -> 8 -> 5 -> 10 -> 2 -> 1 [partition = 5]
// Output: 3 -> 1 -> 2 -> 10 -> 5 -> 5 -> 8

let b = new SingleLinkedList()
let one = new SingleNode(1)
let two = new SingleNode(2)
let three = new SingleNode(3)
let four = new SingleNode(4)
one.next = two
two.next = three
three.next = four

b.prepend(4);
b.prepend(3);
b.prepend(2);
b.prepend(1);

/// time complexity O(n)
/// space complexity O(n)
function removeDupsSet(lnkedList) {
  let set = new Set();
  let currentNode = lnkedList.head.next
  while(currentNode.val) {
    if(set.has(currentNode.val)) {
      currentNode = currentNode.next
      currentNode.prev = currentNode.prev.prev
      currentNode.prev.next = currentNode
    } else {
      set.add(currentNode.val)
      currentNode = currentNode.next
    }
  }
}

//time complexty O(n^2)
//space complexty O(1)
function removeDups(linkedlist) {
  let currentNode = linkedlist.head.next;
  while(currentNode.val) {
    let runner = currentNode.next;
    while(runner.val) {
      if(runner.val === currentNode.val) {
        runner = runner.next
        runner.prev = runner.prev.prev
        runner.prev.next = runner
      } else {
        runner = runner.next;
      }
    }
    currentNode = currentNode.next
  }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//problem 2 => RemoveKth to Last
// time complexty => O(n)
// space   complexty => O(1)
function kthLast(list, k) {
  if(k > list.length()) {
    return "list is too short for that position"
  } else if (k <= 0) {
    return "invalid"
  }

  let pos = list.length() - k;
  let count = 0;
  let currentNode = list.head.next;
  while(count !== pos) {
    currentNode = currentNode.next
    count +=1
  }
  return currentNode
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//problem 3 Remove Middle ELement from linked list
//time complexty O(n)
//space complexty O(1)
function deleteMiddle(midNode) {
  var node = midNode;
  while (node !== null && node.next !== null) {
    node.value = node.next.value;
    if (node.next.next === null) {
      node.next = null;
    }
    node = node.next;
  }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//problem 4 Partition
// time complexity O(n) => must go through each node
// space complexity O(1) =>  only keeping track of pointers / currentNode
function partition(list, val) {
  let leftList;
  let leftPointer;
  let rightList;
  let rightPointer;

  let currentNode = list.head.next;
  while(currentNode.val) {
    if(currentNode.val < val) {
      if(!leftList) {
        leftList = currentNode;
        leftPointer = leftList;
      } else {
        leftPointer.next = currentNode;
        leftPointer = leftPointer.next
      }
    } else {
      if(!rightList) {
        rightList = currentNode;
        rightPointer = rightList;
      } else {
        rightPointer.next = currentNode;
        rightPointer = rightPointer.next
      }
    }
    currentNode = currentNode.next
  }

  rightPointer.next = null;
  leftPointer.next = rightList;
  return leftList
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//problem 5 => SumLists
// time conplexity = O(n)
// space complexity = O(1)
let listOne = new SingleLinkedList()
listOne.prepend(2);
listOne.prepend(1);
listOne.prepend(1);
listOne.prepend(2);

let listTwo = new SingleLinkedList()
listTwo.prepend(5);
listTwo.prepend(9);
listTwo.prepend(2);

function sumList(head1, head2) {
  let node1 = head1.head.next;
  let node2 = head2.head.next;
  let node3;
  let head3;

  let sum;
  let tens = 0;
  let ones;

  while(node1.val && node2.val) {
    if(!node1.val) {
      sum = node2.val;
    } else if(!node2.val) {
      sum = node1.val
    } else {
      sum = node1.val + node2.val
    }

    sum += tens;
    ones = (sum % 10);

    if(!head3) {
      head3 = new SingleLinkedList()
      head3.head.next = new SingleNode(ones)
      node3 = head3.head.next;
    } else {
      node3.next = new SingleNode(ones)
      node3 = node3.next
    }

    if(node1.val) {
      node1 = node1.next
    }

    if(node2.val) {
      node2 = node2.next
    }

    tens = Math.floor(sum / 10)

  }
  return head3;
}

function sumListForward(list1, list2) {
  let node1 = list1.head.next
  let node2 = list2.head.next
  let node3;
  let head3;
  let sum;
  let tens = 0;
  let ones;

  while(node1.val && node2.val) {
    if(!node1.val) {
      sum = node2.val
    } else if(!node2.val) {
      sum = node1.val
    } else {
      sum = node1.val + node2.val
    }

    ones = sum % 10;
    if(!head3) {
      head3 = new SingleLinkedList()
      head3.prepend(ones)
      node3 = head3.head.next
    } else {
        tens = Math.floor(sum / 10);
        node3.val += tens
        node3.next = new SingleNode(ones)
        node3 = node3.next
    }

    if(node1.val) {
      node1 = node1.next
    }

    if(node2.val) {
      node2 = node2.next
    }
    tens = Math.floor(sum / 10)


  }
  return head3;
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//problem 6 => isPal
// time complexity => O(n)
// space complexty => O(1)
function palindrome(list) {
  let startNode = list.head.next
  let endNode = list.tail.prev

  while(startNode != endNode) {
    if(startNode.val != endNode.val) {
      return false;
    }
    startNode = startNode.next;
    endNode = endNode.prev;
  }
  return true
}

function palindrome2(list) {
  let length = list.length();
  let mid = Math.floor(length / 2);
  let pointerOne = 1;
  let pointerTwo = 1;
  let firstHalf = list.head.next;
  let first = list.head.next;
  let firstPointer = first;
  let secondHalf;
  let secondHalfPointer = list.head.next
  let tmp;

    while (pointerOne < mid) {
      first = firstHalf.next;
      first.next = firstHalf;
      firstPointer = first.next
      pointerOne++
    }

    firstPointer.next = null;

    while (secondHalfPointer.val) {
      secondHalfPointer = secondHalfPointer.next
    }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//problem 7 => Intersection
//time complexty O(n)
// space complexty O(1)
function intersection(l1, l2) {
  const tailSize1 = getTailAndSize(l1.head.next);
  const tailSize2 = getTailAndSize(l2.head.next);
  if (tailSize1.tail.val !== tailSize2.tail.val) return null;

  let shorter = tailSize1.size < tailSize2.size ? l1 : l2;
  let longer = tailSize1.size > tailSize2.size ? l1 : l2;
  const diff = Math.abs(tailSize1.size - tailSize2.size);
  debugger
  let steps = 0;
  while (steps < diff) {
    longer = longer.next;
    steps++;
  }

  while (longer !== shorter) {
    longer = longer.next;
    shorter = shorter.next;
  }

  return longer;
}

function getTailAndSize(node) {
  let obj = {size: 0, tail: null};
  while (node !== null) {
    if (node.next === null) {
      obj.tail = node;
    }
    obj.size++;
    node = node.next;
  }

  return obj;
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//problem 8
let headLoop =  new LinkedList();
let aa = new Node("A")
let bb = new Node("B")
let cc = new Node("C")
let dd = new Node("D")
let ee = new Node("E")

headLoop.head.next = aa
aa.next = bb
bb.next = cc
cc.next = dd
dd.next = ee
ee.next = cc


function findLoopNode(list) {
  let head = list.head.next;
  let loop = false
  let fast = list.head.next;
  let slow = list.head.next;
  while (fast.val) {
    fast = fast.next.next
    slow = slow.next
    if(fast === slow) {
      loop = true;
      break;
    }
  }
  if(!loop) {
    return false
  } else {
    fast = head;
    while(fast != slow) {
      fast = fast.next;
      slow = slow.next
    }
    return fast
  }
}
