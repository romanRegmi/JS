let a, b;
[a, b] = [34, 56];
console.log(a, b);

[a, b, c, ...d] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(a);
console.log(b);
console.log(c);
console.log(d);

({ a, b, c, ...d } = { a: 34, b: 345, c: 67, d: 45, e: 34 })
console.log(a, b, c, d)

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