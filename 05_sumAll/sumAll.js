const sumAll = function(a, b) {
    let big = (a > b) ? a : b;
    let small = (a > b) ? b : a;
    let result = 0;
    const error = 'ERROR';

    if ( a < 0 || b < 0) return error;
    if (typeof a !== 'number' || typeof b !== 'number') return error;

    for (i = small; i <= big; i++) {
        result += i;
    }

    return result;
}

// Do not edit below this line
module.exports = sumAll;
