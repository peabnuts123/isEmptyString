# is-nonempty-string

npm module to test whether *any object* is a string that contains one or more non-whitespace characters. 

Will return false in any case where input is not a string, or contains only whitespace characters,
including spaces, tabs, non-breaking spaces, or newline characters.


## Installation

_TODO_


## Usage

**is-nonempty-string** can be easily included and used in two ways, depending on how you would like to use it.

Firstly, directly, as a reference:

```
var isNonEmptyString = require('is-nonempty-string')();

function isUserInputDefined(userInput) {
    return isNonEmptyString(userInput);
}
```

or as a decorator on `String.prototype`:

```
require('is-nonempty-string')({ mode: 'prototype'});


function isUserInputDefined(userString) {
    return userString.isNonEmpty();
}   
```


## Full list of options

Usage:

`var direct = require('is-nonempty-string')(options)`
*Call to the is-nonempty-string module function only returns a value if direct is specified as true*

Only 2 options are supported at this point:

  - **direct** : true/false,
  - **prototype** : true/false
  
  *At least one of __direct__ or __prototype__ must be defined*