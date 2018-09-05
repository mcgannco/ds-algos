var reverseString = function(s) {
  let arr = s.split("")
    let pointer1 = 0;
    let pointer2 = s.length - 1;

    while(pointer1 < pointer2) {
      const temp = arr[pointer1];
      arr[pointer1] = arr[pointer2];
      arr[pointer2] = temp;

        pointer1++
        pointer2--
    }
    return arr.join("")
};
