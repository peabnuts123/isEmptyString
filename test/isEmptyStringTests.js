var assert = require('assert');
var isEmptyString = require('../index.js');

describe('isEmptyString', function() {
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
       assert.equal(isEmptyString(false), false); 
    });
});