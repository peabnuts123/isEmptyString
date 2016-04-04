module.exports = function isEmptyString(options) {
    //Configure options
    var defaults = {
        direct: true,
        prototype: false
    };
    if (options === undefined) {
        options = {};
    } else if (toString.call(options) !== '[object Object]') {
        throw new Error('Invalid options supplied for isEmptyString. options must be an object');
    }
    if (options.direct === undefined) {
        options.direct = defaults.direct;
    }
    if (options.prototype === undefined) {
        options.prototype = defaults.prototype;
    }
    
    //Validate options
    if (typeof options.direct !== 'boolean') {
        throw new Error("Invalid option for isEmptyString, 'direct' must be a boolean value");
    }
    if (typeof options.prototype !== 'boolean') {
        throw new Error("Invalid option for isEmptyString, 'prototype' must be a boolean value");
    }
    for (key in options) {
        if (key !== 'direct' && key !== 'prototype') {
            throw new Error("Invalid option for isEmptyString: '" + key + "'. Valid options: ['direct', 'prototype']");
        }
    }
    
    if (options.direct === false && options.prototype === false) {
        throw new Error("Can't invoke is-empty-string with all modes disabled!");
    }
    
    //Prototype mode
    if (options.prototype === true) {
        String.prototype.isEmpty = function isEmpty() {
            return stringisEmpty(this);
        }
    }
    
    //Direct mode
    if (options.direct === true) {
        return stringisEmpty;
    }
    
    //Actual function definition
    function stringisEmpty(input) {
        if (input === undefined) {
            //Input is undefined
            return true;
        }
        if (input === null) {
            //Input is null
            return true;
        }
        
        var isString = toString.call(input) === '[object String]'; 
        return isString && input.trim().length === 0;
    }
};