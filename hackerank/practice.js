var plusOne = function(digits) {
    let sum = 1;
    for(let i = digits.length - 1; i >= 0; i--) {
      sum += digits[i];
        digits[i] = (sum % 10)
        if(sum > 9) {sum = 1} else{sum = 0}
    }
    if(digits[0] === 0) {
        digits.unshift(1)
    }
    return digits
};
