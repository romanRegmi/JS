/*
* A higher-order function is a function that takes one or more functions as arguments and/or returns a function. 
* Higher-order functions enable functional programming patterns and allow for more abstract and reusable code.
*/

// A higher-order function that applies a transformation to each element of an array
function mapArray(arr, transformation) {
    const result = [];
    for (const element of arr) {
        result.push(transformation(element));
    }
    return result;
}

const numbers = [1, 2, 3, 4];
const doubledNumbers = mapArray(numbers, num => num * 2);
console.log(doubledNumbers); // Output: [2, 4, 6, 8]

// A higher-order function that filters elements based on a condition
function filterArray(arr, condition) {
    const result = [];
    for (const element of arr) {
        if (condition(element)) {
            result.push(element);
        }
    }
    return result;
}

const evenNumbers = filterArray(numbers, num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]