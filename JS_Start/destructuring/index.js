
// Object

const personalInformation = {
	firstName: 'Dylan',
	lastName: 'Israel',
	city: 'Austin',
	state: 'Texas',
	zipCode: 73301
};

const {firstName: fn, lastName: ln} = personalInformation;

console.log(`${fn} ${ln}`);


// Array

let [firstName, middleName, lastName] = ['Roman', 'Raj', 'Regmi']

console.log(middleName);


// Task

function addressMaker(address){
	const {city, state} = address;

	const newAddress = {
		city,
		state,
		country: 'USA'

	};
	console.log(`${newAddress.city}, ${newAddress.state}, ${newAddress.country}`)
}

addressMaker({city: 'Austin', state: 'Texas'});

let a, b;
[a, b] = [34, 56];
console.log(a, b);

[a, b, c, ...d] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(a); // 1
console.log(b); // 2 
console.log(c); // 3
console.log(d); // [4, 5, 6, 7, 8, 9, 10]

({ a, b, c, ...d } = { a: 34, b: 345, c: 67, d: 45, e: 34 })
console.log(a, b, c, d) // 34 345 67 {d:45, e:34}

// Object Destructuring
const laptop = {
    model: "HP Pavilion",
    age: "23",
    gender: "Male",
    salary: 50000,
    start: function () { console.log('started'); }
}

const { model, age, gender, salary, start } = laptop;
console.log(model, age, gender, salary, start);
start()










var array = ['A', 'B', 'C', 'D', 'E']
var first = array[0]

console.log(first)

var [first, second] = array
console.log(first)
console.log(second)

var [first, , third] = array

console.log(first)
console.log(third)

var [first, second, ...rest] = array

console.log(first)
console.log(second)
console.log(rest)

var array1 = [1, 2, 3]
var array2 = [4, 5, 6]
var newArray = [...array1, ...array2]

console.log(newArray)


var array1 = [1, 2, 3]
var array2 = [4, 5, 6]
var newArray = [0, ...array1, 3.5, ...array2, 7]

console.log(newArray)

var array = [1, 2, 3]
var arrayClone = [...array]
arrayClone.push(4)

console.log(arrayClone)

// Objects

var person = { name: 'Kyle', age: 25 }
var { name, age } = person

console.log(name)
// Kyle
console.log(age)
// 25

var person = { name: 'Kyle', age: 25 }
var { name: firstName, age } = person

console.log(firstName)
// Kyle
console.log(age)
// 25


var person = { name: 'Kyle', age: 25, favoriteFood: 'Rice' }
var { name, ...rest } = person

console.log(name)
// Kyle
console.log(rest)
// { age: 25, favoriteFood: 'Rice' }

var person1 = { name: 'Kyle', age: 25 }
var person2 = { age: 32, favoriteFood: 'Rice' }
var newPerson = { ...person1, ...person2 }

console.log(newPerson)
// { name: 'Kyle', age: 32, favoriteFood: 'Rice' }

var person = {
    name: 'Kyle',
    age: 25,
    address: {
        city: 'Somewhere',
        state: 'One Of Them'
    }
}
var { name, address: { city } } = person

console.log(name)
// Kyle
console.log(city)
// Somewhere

var { name, address: addressVariable } = person
var { city } = addressVariable


var person = { name: 'Kyle', age: 25 }
var { name = 'Sally', favoriteFood = 'Banana' } = person

console.log(name)
// Kyle
console.log(favoriteFood)
// Banana


var person = { name: 'Kyle', age: 25 }
var personClone = { ...person }
personClone.name = 'Sally'

console.log(person)
// { name: 'Kyle', age: 25 }
console.log(personClone)
// { name: 'Sally', age: 25 }


function sumAndMultiply(a, b) {
    return { sum: a + b, product: a * b }
}

var { sum, product } = sumAndMultiply(2, 3)

console.log(sum)
// 5
console.log(product)
// 6


function printPerson({ name, age, favoriteFood = 'None' }) {
    console.log(`Name: ${name}. Age: ${age}. Food: ${favoriteFood}.`)
}

var person = { name: 'Kyle', age: 25 }

printPerson(person)
// Name: Kyle. Age: 25. Food: None.



const people = [
    { firstName: 'Sam', lastName: 'Hughes', DOB: '07/07/1978', department: 'Development', salary: '45000' },
    { firstName: 'Terri', lastName: 'Bishop', DOB: '02/04/1989', department: 'Development', salary: '35000' },
    { firstName: 'Jar', lastName: 'Burke', DOB: '11/01/1985', department: 'Marketing', salary: '38000' },
    { firstName: 'Julio', lastName: 'Miller', DOB: '12/07/1991', department: 'Sales', salary: '40000' },
    { firstName: 'Chester', lastName: 'Flores', DOB: '03/15/1988', department: 'Development', salary: '41000' },
    { firstName: 'Madison', lastName: 'Marshall', DOB: '09/22/1980', department: 'Sales', salary: '32000' },
    { firstName: 'Ava', lastName: 'Pena', DOB: '11/02/1986', department: 'Development', salary: '38000' },
    { firstName: 'Gabriella', lastName: 'Steward', DOB: '08/26/1994', department: 'Marketing', salary: '46000' },
    { firstName: 'Charles', lastName: 'Campbell', DOB: '09/04/1977', department: 'Sales', salary: '42000' },
    { firstName: 'Tiffany', lastName: 'Lambert', DOB: '05/11/1990', department: 'Development', salary: '34000' },
    { firstName: 'Antonio', lastName: 'Gonzalez', DOB: '03/24/1985', department: 'Office Management', salary: '49000' },
    { firstName: 'Aaron', lastName: 'Garrett', DOB: '09/04/1985', department: 'Development', salary: '39000' },
];


const [sam] = people // fetches the first element
console.log(sam)


var [{ salary:salary }] = people // fetch salary of 1st element
console.log(salary)

var [,,{ salary:salary }] = people // skip 1st two
console.log(salary)

console.log(people.map(({DOB}) => DOB))