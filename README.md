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

3. The map(), filter(), and forEach() methods are used to work with arrays in JavaScript, but they have different purposes.

map() :
Used to transform each element of an array.

It returns a new array with the modified values.

The length of the new array is the same as the original array.

filter() ;
Used to select elements based on a condition.

It returns a new array containing only the elements that satisfy the condition.

The new array may be smaller than the original array.
forEach() ;
Used to execute a function for each element of an array.

It does not return a new array.

It is mainly used for performing actions like printing values or updating something.


4. An arrow function is a shorter and more modern way to write functions in JavaScript
Arrow functions use the => (arrow) syntax to define a function. They provide a more concise and readable way to write functions compared to traditional function expressions.

They use a shorter syntax.

They do not have their own this value; instead, they inherit this from the surrounding (lexical) scope.

They are commonly used for callbacks and simple functions.

They cannot be used as constructors and cannot be called with new.

5. emplate literals are a feature in JavaScript introduced in ES6 that allow you to create strings more easily and dynamically.
Allow string interpolation, meaning you can embed variables or expressions inside a string using ${ }.

Support multi-line strings without using special characters like.