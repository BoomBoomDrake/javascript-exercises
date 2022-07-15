const repeatString = function(string, num) {
    let result = [];

    if (num < 0) {
        result = 'ERROR';
        
        return result;
    }

    for (i = result.length; i < num; i++){
        result.push(string);
    }

    return result.join('');
};

// Do not edit below this line
module.exports = repeatString;
