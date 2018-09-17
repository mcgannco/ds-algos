var plusOne = function(digits) {
  debugger
    let sum = 1;
    for(let i = digits.length - 1; i >= 0; i--) {
      debugger
        sum = sum + digits[i]
        digits[i] = sum % 10
        if(sum > 9) {
            sum = 1
        } else {
            sum = 1
        }
    }


    return digits
};
