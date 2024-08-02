// No Parameters
const greet = () => "Hello";


// Single Parameter
const square = x => x * x;
console.log(square(4));


// Multiple Parameter
const add = (a, b) => a + b;


// Function body with multiple parameters
// If the function body has more than one statement you will need to use the curley braces and specify
// the return keyword (if something needs to be returned)

const greetPerson = name => {
    const greeting = "Hello, " + name + "!";
    return greeting;
}

// Returning Object Literals
// When directly returning an object literal, wrap the literal in parantheses to differentiate it from the function block.
const makePerson = (firstName, lastName) => 
({ first: firstName, last: lastName});

// High order function and callbacks
const numbers = [1,2,3,4];
const doubled = numbers.map(num => num * 2);
