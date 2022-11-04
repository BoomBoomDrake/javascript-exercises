const fibonacci = function(num) {
    let fibArr = [0, 1];
    
    if (num < 1 || isNaN(num)) {
        return 'OOPS';
    }
    for (let i = 1; i < Number(num); i++) {
        let a = fibArr[i]
        let b = fibArr[i - 1];
        let c = a + b;
        fibArr.push(c);
    }
    return fibArr[fibArr.length - 1];
};

// Do not edit below this line
module.exports = fibonacci;
