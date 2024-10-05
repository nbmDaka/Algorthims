// My Solution

var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
}

console.log(twoSum([11,2,15,7], 9));

// O(N) Solution

var twoSum1 = function (nums, target) {
    let numToIndexMap = {};

    for(let i = 0; i < nums.length; i++) {
        let diff = target - nums[i];

        if(numToIndexMap.hasOwnProperty(diff)) {
            return [i, numToIndexMap[diff]];
        }

        numToIndexMap[nums[i]] = i;
    }
}

console.log(twoSum1([11,2,15,7], 9));


// Optimizing solution

var twoSum2 = function (nums, target) {

}