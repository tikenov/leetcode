/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    if (s.length == 0) return "";
    let k = 0;  // palindrome center index  
    let max = 1;   // max length of palindrome
    let flag = true;  // true -> odd case, even case 
    for (let i = 0; i < s.length; i++) {
        // for odd cases, ex:"aba"
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
        // for even cases, ex: "abba"
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