var runningSum = function(nums) {
    let sum = 0;
    var output = [];
    for (let i = 0; i < nums.length; i ++) {
        sum += nums[i];
        output.push(sum);
    }
    return output;
    console.log(output);
};

nums = [1, 2, 5];
runningSum(nums);