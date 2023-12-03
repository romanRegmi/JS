people = ["Henrik", "Lars", "Ib"];

/* Traditional For loop

for (let index=0; index < people.length; index++) {
    console.log(people[index]);
}

*/

obj = {
    name: "Henrik",
    age: 24,
    job: "teacher",
}
// console.log(obj);

// Iterating an object using for in loop
for (let key in obj) {
    console.log(key, obj[key]);
}

// Iterating a string using for in loop
mystring = "Hello World";

for (let letters in mystring) {
    console.log(letters); // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
}

for (const letters of mystring) { // of
    console.log(letters); // H, e, l, l, o,  , W, o, r, l, d
}     

let incomes = [62000, 67000, 75000];
let total = 0;

for (const income of incomes) {
  total += income;
}
console.log(total);

for (let letters in mystring) {
    console.log(mystring[letters]);
}

// For of loop
for(let name of people){
    console.log(name);
}
