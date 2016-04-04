module.exports = function isNonEmptyString(input) {
    var isString = toString.call(input) === '[object String]'; 
    return isString && input.trim().length > 0;
};