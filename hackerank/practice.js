var subsets = function(nums) {
  debugger
    var r = [];

    if (nums.length == 0) r.push([]);
    else {
        r = subsets(nums.slice(0, nums.length - 1));

        var len = r.length;

        for(var i = 0; i < len; i++) {
            var m = r[i].slice();
            m.push(nums[nums.length - 1]);
            r.push(m);
        }
    }

    return r;
};
