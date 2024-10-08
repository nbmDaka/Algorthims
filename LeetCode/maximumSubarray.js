var maxSubArray = function(nums) {
    let localMax = nums[0];
    let globalMax = nums[0];

    for(let i = 0; i < nums.length; i++) {
        localMax = Math.max(nums[i], localMax + nums[i]);
        if(localMax > globalMax) {
            globalMax = localMax
        }
    }
    return globalMax
};

const nums = [9031,8403,-7093,9614,3293,-1900]

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

// Not solved yet problem maximumSubarray
// Second day attempt