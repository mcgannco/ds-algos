class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null
  }
}

let a = new ListNode(2)
let b = new ListNode(3)
let c = new ListNode(3)

a.next = b

var getIntersectionNode = function(headA, headB) {
    if(!headA || !headB) return null
    let [lenA, lenB] = [getLength(headA), getLength(headB)]
    let [nodeA, nodeB] = [headA, headB]
    let delta = Math.abs(lenA - lenB);
    if(lenA > lenB) {
        nodeA = moveAhead(nodeA, delta)
    } else if(lenB > lenA) {
        nodeB = moveAhead(nodeB, delta)
    }

    while(nodeA && nodeB) {
        if(nodeA.val === nodeB.val) return nodeA
        nodeA = nodeA.next
        nodeB = nodeB.next
    }
    return null
};

function getLength(head) {
    let len = 0, curr = head;
    while(curr) {
        len += 1
        curr = curr.next
    }
    return len
}

function moveAhead(node, steps) {
    let curr = node;
    while(steps > 0) {
        curr = curr.next
        steps--
    }
    return curr
}
