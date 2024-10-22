var cjs  = function (nums) {
    for(let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            if(nums[i] === nums[j]) {
                return true;
            }
        }
    }
    return false;
}

var tjs = function (nums) {
    nums = nums.sort();

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === nums[i + 1]) return true
    }

    return false;
}

console.log(cjs([1,1,1,3,3,4,3,2,4,2]))