class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

var isPalindrome = function(head) {
    let listLength = 0;
    let currentNode = head;
    while(currentNode) {
        listLength += 1;
        currentNode = currentNode.next
    }
    let midPoint = listLength / 2;
    reverseList(head, midPoint)
};

var reverseList = function(head, len) {
    let currentNode = head;
    let prev = null;
    let next = null;
    while(len) {
        nextNode = currentNode.next;
        currentNode.next = prev;
        prev = currentNode;
        currentNode = nextNode
        len -=1
    }
}
