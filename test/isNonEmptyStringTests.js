var assert = require('assert');
var isEmptyString = require('../index.js');

describe('isEmptyString', function() {
    it('should be referenced correctly', function() {
        assert.notEqual(typeof isEmptyString, 'undefined');
    }) 
    
    it('returns false for empty string', function() {
        assert.equal(isEmptyString(''), false);
    });
    
    it('returns false for spaces', function() {
       assert.equal(isEmptyString('      '), false); 
    });
    
    it('returns false for tabs', function() {
        assert.equal(isEmptyString('\t\t\t\t\t\t\t'), false);
    });
    
    it('returns false for newline characters', function() {
       assert.equal(isEmptyString('\r\n\r\n'), false); 
    });
    
    it ('returns false for non-breaking space', function() {
        assert.equal(isEmptyString('\xa0\xa0\xa0\xa0'), false);
    })
    
    it('returns false for a mixed bag', function() {
       assert.equal(isEmptyString('        \t\t\t\n\n\n \n\r\r \r\r \r\t \t\t\t    '), false); 
    });
    
    it('returns false for null', function() {
        assert.equal(isEmptyString(null), false);
    });
    
    it('returns false for undefined', function() {
        assert.equal(isEmptyString(undefined), false);
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
    
    it('returns true for a non-whitespace string', function() {
       assert.equal(isEmptyString("_"), true); 
    });
});