/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function (S) {
    let c = 0;
    let ans = "";
    for (let s of S) {
        if (s == "(") {
            if (++c > 1) ans += s;
        } else {
            if (--c > 0) ans += s;
        }
    }
    return ans;
};