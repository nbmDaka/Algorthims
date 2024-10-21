var moveZeroes = function(nums) {
    let left = 0;

    for(let  i = 0; i < nums.length; i++) {
        if(nums[i] !== 0) {
            let temp = nums[left];
            nums[left] = nums[i];
            nums[i] = temp;
            left++;
        }
    }
    return nums;
}

console.log(moveZeroes([1,0,0,3,12,0,2]));

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
