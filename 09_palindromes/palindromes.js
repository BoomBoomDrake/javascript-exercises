const palindromes = function (str) {
    let alpha = /[\W_]/g;
    let lowReg = str.toLowerCase().replace(alpha, '');
    let reverse = lowReg.split('').reverse().join('');
    return reverse === lowReg;
};

// Do not edit below this line
module.exports = palindromes;
