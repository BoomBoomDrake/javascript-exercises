const reverseString = function(str) {
    let ch = Array.from(str);
    let revArr = [];
    console.log('ch', ch);
    
    for (i = 0; i < str.length; i++) {
        revArr[i] = str.charAt((str.length - 1) - i);
    }

    console.log('revArr', revArr)

    let result = revArr.join('');
    console.log('result', result);

    return result
};

// Do not edit below this line
module.exports = reverseString;
