module.exports = function isNonEmptyString(options) {
    //Configure options
    var defaults = {
        direct: true,
        prototype: false
    };
    if (options === undefined) {
        options = {};
    }
    if (options.direct === undefined) {
        options.direct = defaults.direct;
    }
    if (options.prototype === undefined) {
        options.prototype = defaults.prototype;
    }
    
    //Validate options
    if (typeof options.direct !== 'boolean') {
        throw new Error("Invalid option for isNonEmptyString, 'direct' must be a boolean value");
    }
    if (typeof options.prototype !== 'boolean') {
        throw new Error("Invalid option for isNonEmptyString, 'prototype' must be a boolean value");
    }
    for (key in options) {
        if (key !== 'direct' && key !== 'prototype') {
            throw new Error("Invalid option for isNonEmptyString: '" + key + "'. Valid options: ['direct', 'prototype']");
        }
    }
    
    if (options.direct === false && options.prototype === false) {
        throw new Error("Can't invoke is-nonempty-string with all modes disabled!");
    }
    
    //Prototype mode
    if (options.prototype === true) {
        String.prototype.isNonEmpty = function isNonEmpty() {
            return stringisNonEmpty(this);
        }
    }
    
    //Direct mode
    if (options.direct === true) {
        return stringisNonEmpty;
    }
    
    //Actual function definition
    function stringisNonEmpty(input) {
        var isString = toString.call(input) === '[object String]'; 
        return isString && input.trim().length > 0;
    }
};