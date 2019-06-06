/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

var merge = function (nums1, m, nums2, n) {
    let i = 0;
    let j = 0;

    //insert elements from second array if smaller
    while (i < m + n && j < n) {
        if (nums2[j] <= nums1[i]) {
            nums1.splice(i, 0, nums2[j++]);
            nums1.pop();
        }
        i++;
    }

    //insert if remaining elements let in second array
    if (j < n) {
        let t = nums2.slice(j, n);
        nums1.splice(m + n - t.length, t.length, ...t);// remove remaining zeroes and insert
    }
};