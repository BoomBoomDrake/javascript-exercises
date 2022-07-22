const repeatString = function(string, num) { // Need more descriptive names like "word" and "times"
    let result = []; 

    if (num < 0) {
        result = 'ERROR';
        
        return result;
    }

    for (i = result.length; i < num; i++){
        result.push(string);
    }

    return result.join('');

// Alternative (easier)
// if (num < 0) return 'ERROR'
// let result = ''
// for (let i = 0; i < num; i++) {
//      result += string
// }
// return result
//}

};

// Do not edit below this line
module.exports = repeatString;
