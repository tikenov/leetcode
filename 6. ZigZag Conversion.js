/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */

var convert = function (s, n) {
    if (n == 1) return s;
    let ans = "";
    for (let i = 0; i < n; i++) {
        let m = Math.floor(s.length / (n + n - 2)) + 1;
        for (let j = 0; j < m; j++) {
            let temp = i + j * (n + n - 2);
            if (temp < s.length) ans += s[temp];
            if (i != 0 && i != n - 1 && n + n - 2 > 0) {
                let temp = (j + 1) * (n + n - 2) - i;
                if (temp < s.length) ans += s[temp];
            }
        }
    }
    return ans;
};