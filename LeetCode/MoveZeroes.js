var moveZeroes = function(nums) {
    let left = 0;
    let right = 1;
    while(right < nums.length) {
        if(nums[right] === 0) {
            left = 0;
            right = 1;
        }
        if(nums[left] === 0) {
            let temp = nums[left];
            nums[left] = nums[right];
            nums[right] = temp;
            right++;
            left++;
        }
    }
    return nums;
}

console.log(moveZeroes([0,1,0,3,12]));

