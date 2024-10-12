var maxSubArray = function(nums) {
    let currentSum = 0;
    let maxSubarraySum = nums[0];

    for(let i = 0; i < nums.length; i++) {
        currentSum += nums[i];
        maxSubarraySum = Math.max(maxSubarraySum, currentSum);

        if(currentSum < 0) {
            currentSum = 0;
        }
    }

    return maxSubarraySum;
};

const nums = [9031,8403,-7093,9614,3293,-1900]

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

// Second Solution in LeetCode;
// Changing File maximumSubarray.js