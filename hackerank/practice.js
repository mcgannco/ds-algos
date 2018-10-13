class TreeNode {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

var sortedArrayToBST = function(nums) {
    return helper(nums, 0, nums.length - 1)
};

function helper(arr,start,end) {
  debugger
    if(start > end) return null
    let mid = Math.floor(end - start) / 2;
    let newNode = new TreeNode(arr[mid]);
    newNode.left = helper(arr, start, mid-1)
    newNode.right = helper(arr, mid+1, end)
    return newNode
}
