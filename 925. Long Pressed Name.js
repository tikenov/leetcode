/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function (name, typed) {
    let j = -1;
    for (let i = 0; i < name.length; i++) {
        j = typed.indexOf(name[i], j + 1);
        if (j == -1) return false;
    }
    return true;
};