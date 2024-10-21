var plusOne = function(digits) {
    for(let i = 0; i < digits.length; i++) {
        if(digits[digits.length - 1 - i] + 1 < 10){
            digits[digits.length - 1 - i] += 1;
            return digits;
        }
    }
};
console.log(plusOne([1,2,3]));