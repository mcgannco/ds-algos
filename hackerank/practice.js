var findKthLargest = function(nums, k) {
    let tracker = 0
    nums.sort(function(a, b) {
      return a - b
    });
    
    for(let i = nums.length - 1; i >= 0; i--) {
        let num = nums[i];
        tracker+=1
        if(tracker === k) return num
    }
};
let input = [3,2,3,1,2,4,5,5,6,7,7,8,2,3,1,1,1,10,11,5,6,2,4,7,8,5,6]
