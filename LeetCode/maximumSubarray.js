var maxSubArray = function(nums) {
    let count = 0;
    let result = 0;
    let subarray = [];
    for(let i = 0; i < nums.length; i++) {
        count += nums[i];
    }
    console.log(count);

    for(let i = 0; i < nums.length; i++){
        if(result < count) {
            result += nums[i];
        } else {
            result = count;
        }
    }
    return result;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

// Not solved yet problem maximumSubarray