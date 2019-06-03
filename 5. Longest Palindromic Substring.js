/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    if (s.length == 0) return "";
    let k = 0;
    let max = 1;
    let flag = true;
    for (let i = 0; i < s.length; i++) {
        let j = 1;
        while ((i + j) <= s.length - 1 && (i - j) >= 0 && s[i + j] == s[i - j]) {
            if (max < j * 2 + 1) {
                max = j * 2 + 1;
                k = i;
                flag = true;
            }
            j++;
        }
        j = 1;
        while ((i + j) <= s.length - 1 && (i - j + 1) >= 0 && s[i + j] == s[i - j + 1]) {
            if (max < j * 2) {
                max = j * 2;
                k = i;
                flag = false;
            }
            j++;
        }
    }
    if (flag) return s.substring(k - (max - 1) / 2, k + (max - 1) / 2 + 1);
    return s.substring(k - max / 2 + 1, k + max / 2 + 1);
};