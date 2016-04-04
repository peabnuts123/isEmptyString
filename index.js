module.exports = function isEmptyString(input) {
    if (input === void(0)) { 
        //input is undefined
        return true;
    }
    
    if (input === null) {
        //input is null
        return true;
    }
    
    //input is a string of only whitespace
    var isString = toString.call(input) === '[object String]'; 
    return isString && input.trim().length === 0;
};