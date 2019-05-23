/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
    this._nums = [...nums];
    this.nums = nums;
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function () {
    this.nums = [...this._nums];
    return this.nums;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
    this.nums = [...this._nums]
    for (let i = 1; i < this.nums.length; i++) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.nums[i], this.nums[j]] = [this.nums[j], this.nums[i]];
    }
    return this.nums;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */