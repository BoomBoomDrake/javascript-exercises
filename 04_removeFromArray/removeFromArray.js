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
//
    //args.forEach( str => matchMap[str] = true);
    //console.log(matchMap);
//
    //strArr.forEach( str => {
    //  if (!matchMap[str]) {
    //    resultArr.push(str);
    //  }
    //})
//
    //return resultArr;


// Do not edit below this line
module.exports = removeFromArray;
