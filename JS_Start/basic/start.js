const firstname = "John";
const age = 24;
console.log(firstname);

// Template String
console.log(`Hello, my name is ${firstname} and I am ${age} years old.`);

// String Methods
const s = "Hello World";
console.log(s.length);
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.substring(0, 5));
console.log(s.split(''));

// Arrays - variables that hold multiple values
const numbers = new Array(1, 2, 3, 4, 5);
console.log(numbers);

const fruits = ['apples', 'oranges', 'pears'];
console.log(fruits);

fruits[3] = 'grapes';
console.log(fruits);

fruits.push('mangos');
console.log(fruits);

fruits.unshift('strawberries'); // add to the beginning of the array
console.log(fruits);

fruits.pop(); // remove the last item from the array
console.log(fruits);

// Objects - key value pairs
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 24,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 Main st',
        city: 'Boston',
        state: 'MA'
    }
}

console.log(person);
console.log(person.firstName, person.lastName);
console.log(person.hobbies[1]);
console.log(person.address.city);

const { firstName, lastName, address: { city } } = person; // destructuring
console.log(firstName, lastName, city); // Can use them as variables

person.email = 'john@gmail.com';
console.log(person.email);

// Array of objects
const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,  // id is optional
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appt',
        isCompleted: false
    }
];

console.log(todos);
console.log(todos[1].text);

// convert to JSON
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

// For loop
for (let i = 0; i < 10; i++) {
    console.log('For Loop', i);
}

// While loop
let i = 0;
while (i < 10) {
    console.log('While Loop', i);
    i++;
}

// For Each Loop
todos.forEach(function (todo) { // todo is the current item in the array
    console.log(todo.text);
});

const todoText = todos.map(function (todo) { // map returns a new array
    return todo.text; // return the text of each todo
});

console.log(todoText); //  ['Take out trash', 'Meeting with boss', 'Dentist appt']

// For of Loop
for (const todo of todos) {
    console.log(todo.text);
}

// Conditionals
const x = 10;
const color = x > 10 ? 'red' : 'blue';
console.log(color);

// Funtions
function addNums(num1 = 1, num2 = 1) {
    return num1 + num2;
}
console.log(addNums());
console.log(addNums(5, 10));

// this keyword

//method : function inside an object(class)
//function : function outside of an object

let user = {
    name: 'John',
    age: 24,
    job: 'teacher',
    presentation: function () {
        console.log('My name is ' + this.name + ' and I am ' + this.age + ' years old.');
    }
}
user.presentation(); // references the global object


user = {
    name: 'John',
    age: 28,
    job: 'teacher',
    presentation: function () {
        console.log('My name is ' + name + ' and I am a ' + job);
    }
}
user.presentation(); // Error, name is not defined


// arrow
function sum(a, b){
    return a + b
}

let add = (a, b) => a + b

function isPositive(num){
    return num >= 0
}

let greaterZero = num => num >= 0

// Function with Zero arguments
let randomNumber = () => Math.random




