var plusOne = function(digits) {
    for(let i = 0; i < digits.length; i++) {
        if(digits[digits.length - 1 - i] + 1 < 10){
            digits[digits.length - 1 - i] += 1;
            return digits;
        }
    }
};
console.log(plusOne([1,2,3]));

// var plusOne = function(digits) {
//     let string = ''
//     if(digits[digits.length - 1] < 9){
//         digits[digits.length - 1]+= 1
//         console.log(digits[digits.length - 1])
//         return digits
//     }
//     for(let i = 0; i < digits.length; i++) {
//         string += digits[i]
//     }
//     console.log(`Fucking string ${string}`)
//     let sum = parseInt(string) + 1;
//     string = sum.toString()
//     console.log(`Fucking sum ${sum} ` + typeof sum)
//     console.log(`Fucking string ${string} ` + typeof string)
//
//     for(let i = 0; i < string.length; i++) {
//         digits[i] = parseInt(string[i])
//     }
//     return digits
// };
// console.log(plusOne([1,2,3]));
