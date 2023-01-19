let nums = [3,0,1]

var missingNumber = function(nums) {
    let n = nums.length
    let number

    for (let j = 0; j <= n; j++) {
        if (nums.includes(j) == false) {
            number = j
        }
    }
    return number
    // console.log(number)
    // console.log(n)
};

missingNumber(nums)
// let s = Math.max(...nums)

// console.log(s)
