function sevenBoom(arr) {
    return arr.some(num => String(num).includes('7')) ? "Boom!" : "there is no 7 in the array";
}


function addName(obj, name, value) {
    obj[name] = value;
    return obj;
}


function countTrue(arr) {
    return arr.filter(Boolean).length;
}

function concat(...arrays) {
    return arrays.reduce((result, arr) => result.concat(arr), []);
}

function shiftToRight(x, y) {
    return Math.floor(x / Math.pow(2, y));
}