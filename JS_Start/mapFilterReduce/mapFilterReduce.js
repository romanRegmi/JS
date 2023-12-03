console.log(Array.from('foo'));
// expected output: Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], x => x + x));
// expected output: Array [2, 4, 6]

const arr = [2, 1, 5, 4, 3];

console.log(arr.map(x => x * x));
console.log(arr.filter(x => x % 2 === 0));

// reduce
// accumulator is the result of the previous iteration
console.log(arr.reduce((acc, x) => acc + x)); 

// reduce to find max in an array
console.log(arr.reduce((acc, x) => Math.max(acc, x)));


const users = [
    { name: 'John', age: 20, surname: 'Johnson' },
    { name: 'Pete', age: 18, surname: 'Peterson' },
    { name: 'Sam', age: 18, surname: 'Jackson' },
    { name: 'Elon', age: 44, surname: 'Musk' },
    { name: 'Ann', age: 19, surname: 'Hathaway' }
];

// acc = { 20:1, 18:2, 19:1 }

const output = users.reduce((acc, user) => {
    if (acc[user.age]) {
        acc[user.age] += 1;
    } else {
        acc[user.age] = 1;
    }
    return acc;
}, {}) // initially, the acc will be empty {} 

console.log(output);

// name of all the users whose age is greater than 18
console.log(users.filter(user => user.age > 18).map(user => user.name));