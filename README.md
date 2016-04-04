# is-nonempty-string

Test whether *any object* is a string that contains one or more non-whitespace characters. 

Will return false in any case where input is not a string, or contains only whitespace characters,
including spaces, tabs, non-breaking spaces, or newline characters.


## Installation

_TODO_


## Example

Example usage might be for validating a user input, without having to worry about what your object is:

```
var isNonEmptyString = require('is-nonempty-string');

function isUserInputDefined(userInput) {
    return isNonEmptyString(userInput);
}
```
