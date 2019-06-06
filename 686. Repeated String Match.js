/**
 * @param {string} A
 * @param {string} B
 * @return {number}
 */
var repeatedStringMatch = function (A, B) {
    let s = A;
    let j = 1;
    while (s.length < B.length) {
        j++;
        s += A;
    }
    if (s.indexOf(B) > -1) return j;
    s += A;
    if (s.indexOf(B) > -1) return j + 1;
    return -1;
};