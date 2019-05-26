/**
 * @param {number[]} stones
 * @return {number}
 */

var lastStoneWeight = function (stones) {
    stones.sort((a, b) => b - a);
    while (stones.length > 1) {
        let y = stones[0];
        let x = stones[1];
        stones.shift();
        stones.shift();
        if (x < y) {
            let j = 0;
            while (stones[j] > y - x) j++;
            stones.splice(j, 0, y - x);
        }
    }
    return stones.length ? stones[0] : 0;
};