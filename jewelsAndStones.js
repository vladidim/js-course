var numJewelsInStones = function(jewels, stones) {
    let output = 0;
    for (let i = 0; i < stones.length; i++) {
        for (let j = 0; j < jewels.length; j++) {
            if (jewels.charAt(j) == stones.charAt(i)) {
                output += 1;
            }
        }
    }
    return output;
};