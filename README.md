1. var, let, and const are used in JavaScript to declare variables, but they differ in scope, redeclaration, and reassignment.

var :
Function scoped.

A variable can be redeclared.

The value of the variable can be reassigned.

It is hoisted and initialized with undefined.

Mostly used in older JavaScript.

const :
Block scoped.

A variable cannot be redeclared.

The value of the variable cannot be reassigned.

A value must be assigned at the time of declaration.

Recommended as the default choice in modern JavaScript when the value should not change.

let  : 
Block scoped.

A variable cannot be redeclared in the same scope.

The value of the variable can be reassigned.

It is hoisted but cannot be accessed before declaration because of the Temporal Dead Zone (TDZ).

Used in modern JavaScript when the variable value may change.

2. The spread operator in JavaScript is used to expand or unpack elements from an array, object, or iterable into individual elements.

It allows you to copy, merge, or pass multiple values easily.
Array expansion – It spreads the elements of an array into another array or into arguments.

Object expansion – It copies properties from one object into another object.

Copying data – It creates a shallow copy of arrays or objects.

Merging arrays or objects – It combines multiple arrays or objects into one.

Function arguments – It passes elements of an array as separate arguments to a function.