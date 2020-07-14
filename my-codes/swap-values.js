// values need to have 'let' data type. 'const' wouldn't let you do this.

let first = 'Jaison';
let second = 'Dsouza';

// swapping
// This is the method of destructuring the array. 'second' is assigned with first value and 'first' is assigned with second value.
// The first 2 variables are from somewhere. You need to specify variables when you destructure an array.

[second, first] = [first, second];

console.log(first, second);
