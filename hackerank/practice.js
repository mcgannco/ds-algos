function ListNode(val) {
  this.val = val;
  this.next = null;
}

var mergeTwoLists = function(l1, l2) {
    let newLinkedList;
    let currentNode;
    let l1NodeList = l1;
    let l2NodeList = l2;

    while(l1NodeList.val && l2NodeList.val ) {

    }
};

let nodeA = new ListNode(1);
let nodeB = new ListNode(2);
let nodeC = new ListNode(4);

nodeA.next = nodeB;
nodeB.next = nodeC;

let nodeD = new ListNode(1);
let nodeE = new ListNode(3);
let nodeF = new ListNode(4);
nodeD.next = nodeE;
nodeE.next = nodeF;
