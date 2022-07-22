let strArr = [];

const removeFromArray = function(strArr, ...args) {

    args.forEach(x => {
        let index = strArr.indexOf(x);

        if (index > -1) {
            strArr.splice(index, 1);
        }
    })
    
    return strArr;
}

// Alternative
//function (...args) {
//  const array = args[0];
//  const newArray = []
//  
//  array.forEach((item) => {
//      if (!args.includes(item)) {
//          newArray.push(item)
//      }
//  });
//  return newArray;

// OR THIS
// const array = args[0]
// return array.filter(val => !args.includes(val));


// Do not edit below this line
module.exports = removeFromArray;
