var merge = function(nums1, m, nums2, n) {
    let[mainPointer, pointerOne, pointerTwo] = [m+n-1,m-1,n-1];
    while(pointerTwo >= 0) {
        if(nums1[pointerOne] && nums1[pointerOne] > nums2[pointerTwo]) {
            nums1[mainPointer] = nums1[pointerOne]
            pointerOne--
        } else {
            nums1[mainPointer] = nums2[pointerTwo]
            pointerTwo--
        }
        mainPointer--
    }
};

let nums1 = [1,2,3,0,0,0], m = 3
let nums2 = [2,5,6], n = 3
