# is-empty-string

Module to test whether a variable is either undefined, null, or a string that contains only whitespace characters. 

Will return false in any case where input is not undefined, null, or a string that contains only whitespace characters,
including spaces, tabs, non-breaking spaces, or newline characters.


## Installation

Installation is easiest through npm:

`npm install is-empty-string --save`


## Usage

**is-empty-string** can be easily included and used in two ways, depending on how you would like to use it.

Firstly, directly, as a reference:

```
var isEmptyString = require('is-empty-string')();

function isUserInputEmpty(userInput) {
    return isEmptyString(userInput);
}
```

or as a decorator on `String.prototype`:

```
require('is-empty-string')({ mode: 'prototype'});


function isUserInputEmpty(userString) {
    return userString.isEmpty();
}   
```


## Full list of options

`var direct = require('is-empty-string')(options)`

*Call to the is-empty-string module function only returns a value if direct is specified as true*


Only 2 options are supported at this point:

  - **direct** : true/false,
  - **prototype** : true/false
  
  *At least one of __direct__ or __prototype__ must be defined*
