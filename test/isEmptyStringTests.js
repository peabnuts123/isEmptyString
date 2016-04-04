require('blanket');

var assert = require('assert');
var isEmptyString = require('../index.js')({ direct: true, prototype: true });

describe('isEmptyString', function() {
    describe('direct mode', function() {
        it('should be referenced correctly', function() {
            assert.notEqual(typeof isEmptyString, 'undefined');
        }) 
        
        it('returns true for empty string', function() {
            assert.equal(isEmptyString(''), true);
        });
        
        it('returns true for spaces', function() {
            assert.equal(isEmptyString('      '), true); 
        });
        
        it('returns true for tabs', function() {
            assert.equal(isEmptyString('\t\t\t\t\t\t\t'), true);
        });
        
        it('returns true for newline characters', function() {
            assert.equal(isEmptyString('\r\n\r\n'), true); 
        });
        
        it ('returns true for non-breaking space', function() {
            assert.equal(isEmptyString('\xa0\xa0\xa0\xa0'), true);
        })
        
        it('returns true for a mixed bag', function() {
            assert.equal(isEmptyString('        \t\t\t\n\n\n \n\r\r \r\r \r\t \t\t\t    '), true); 
        });
        
        it('returns true for null', function() {
            assert.equal(isEmptyString(null), true);
        });
        
        it('returns true for undefined', function() {
            assert.equal(isEmptyString(undefined), true);
        });
        
        it('returns false for a NaN', function() {
            assert.equal(isEmptyString(NaN), false);
        });
        
        it('returns false for a Number', function() {
            assert.equal(isEmptyString(0), false); 
        });
        
        it('returns false for an empty array', function() {
            assert.equal(isEmptyString([]), false);
        });
        
        it('returns false for an empty object', function() {
            assert.equal(isEmptyString({}), false); 
        });
        
        it('returns false for a boolean', function() {
            assert.equal(isEmptyString(true), false); 
        });
        
        it('returns false for a non-whitespace string', function() {
            assert.equal(isEmptyString("_"), false); 
        });
        
        it('returns false for a sparse but non-empty string', function() {
            assert.equal(isEmptyString('                \t\t\t\t\t\r\r\r\r\r\r\n\n\n\xa0\xa0.\t\t\t\t            '), false);
        });
    });
    
    describe('prototype mode', function() {
        it('returns true for empty string', function() {
            assert.equal(''.isEmpty(), true);
        });
        
        it('returns true for spaces', function() {
            assert.equal('      '.isEmpty(), true); 
        });
        
        it('returns true for tabs', function() {
            assert.equal('\t\t\t\t\t\t\t'.isEmpty(), true);
        });
        
        it('returns true for newline characters', function() {
            assert.equal('\r\n\r\n'.isEmpty(), true); 
        });
        
        it ('returns true for non-breaking space', function() {
            assert.equal('\xa0\xa0\xa0\xa0'.isEmpty(), true);
        })
        
        it('returns true for a mixed bag', function() {
            assert.equal('        \t\t\t\n\n\n \n\r\r \r\r \r\t \t\t\t    '.isEmpty(), true); 
        });
        
        it('returns false for a non-whitespace string', function() {
            assert.equal("_".isEmpty(), false); 
        });
        
        it('returns false for a sparse but non-empty string', function() {
            assert.equal('                \t\t\t\t\t\r\r\r\r\r\r\n\n\n\xa0\xa0.\t\t\t\t            '.isEmpty(), false); 
        });
    });
    
    describe('setup', function() {
        function createCallWithOptions(options) {
            return function testFunction() {
                return require('../index.js')(options);
            }
        }
        
        it('returns a function', function() {
           assert.equal(typeof createCallWithOptions({}), 'function'); 
        });
        
        it('throws no error with no parameters', function() {
            assert.doesNotThrow(createCallWithOptions());
        });
        
        it('throws no error when specifying just direct true', function() {
            assert.doesNotThrow(createCallWithOptions({ direct: true })); 
        });
        
        it('throws no error when specifying just prototype true', function() {
            assert.doesNotThrow(createCallWithOptions({ prototype: true })); 
        });
        
        it('throws no error when specifying just prototype false', function() {
            assert.doesNotThrow(createCallWithOptions({ prototype: false }));
        });
        
        it('throws no error when specifying direct true and prototype false', function() {
            assert.doesNotThrow(createCallWithOptions({ direct: true, prototype: false })); 
        });
        
        it('throws no error when specifying direct false and prototype true', function() {
            assert.doesNotThrow(createCallWithOptions({ direct: false, prototype: true }));
        });
        
        it('throws no error when specifying direct AND prototype true', function() {
            assert.doesNotThrow(createCallWithOptions({ direct: true, prototype: true })); 
        });
        
        it('throws an error when specifying direct AND prototype false', function() {
            assert.throws(createCallWithOptions({ direct: false, prototype: false }), "Can't invoke is-empty-string with all modes disabled!");
        });
        
        it('throws an error when specifying just direct false', function() {
            assert.throws(createCallWithOptions({ direct: false }), "Can't invoke is-empty-string with all modes disabled!");
        });
        
        it('throws an error when specifying an invalid parameter', function() {
            assert.throws(createCallWithOptions({ notReal: true }), "Invalid option for isEmptyString:");
        });
        
        it('throws an error when specifying direct as a non-boolean value', function() {
            assert.throws(createCallWithOptions({ direct: 1 }), "Invalid option for isEmptyString, 'direct' must be a boolean value"); 
        });
        
        it('throws an error when specifying prototype as a non-boolean value', function() {
            assert.throws(createCallWithOptions({ prototype: 1 }), "Invalid option for isEmptyString, 'prototype' must be a boolean value");
        });
        
        it('throws an error when a non-object parameter is passed in', function() {
           assert.throws(createCallWithOptions("hello!"), "Invalid options supplied for isEmptyString. Options must be an object"); 
        });
    });
});