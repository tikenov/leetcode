/**
 * @param {string} dominoes
 * @return {string}
 */
var pushDominoes = function (d) {
    let ans = "";
    let prev = "L";
    d += "R";
    for (let i = 0; i < d.length; i++) {
        if (d[i] == ".") {
            let j = i;
            while (j < d.length && d[j] == '.') j++;
            if (d[j] == 'L' && prev == 'L') {
                ans += "L".repeat(j - i) + 'L';
            } else
                if (d[j] == 'R' && prev == 'L') {
                    ans += ".".repeat(j - i) + 'R';
                } else
                    if (d[j] == 'L' && prev == 'R') {
                        ans += "R".repeat((j - i) / 2) + ".".repeat((j - i) % 2) + "L".repeat((j - i) / 2) + 'L';
                    } else
                        if (d[j] == 'R' && prev == 'R') {
                            console.log(i, j);
                            ans += "R".repeat(j - i) + 'R';
                        };
            i = j;
            prev = d[i];
        } else {
            ans += d[i];
            prev = d[i];
        }
    }
    return ans.substring(0, ans.length - 1);
};
