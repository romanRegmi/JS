/*
* First-Class Functions:
* In JavaScript, functions are treated as first-class citizens, which means they can be:
* Assigned to variables or properties.
* Passed as arguments to other functions.
* Returned from other functions.
*/

// Assigning a function to a variable
const greet = function(name) {
    return `Hello, ${name}!`;
};

// Passing a function as an argument
function applyFunction(func, value) {
    return func(value);
}

console.log(applyFunction(greet, "Alice")); // Output: Hello, Alice!

// Returning a function from another function
function multiplier(factor) {
    return function(number) {
        return number * factor;
    };
}

const double = multiplier(2);
console.log(double(5)); // Output: 10