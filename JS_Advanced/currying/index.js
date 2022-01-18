let multiply = (a, b) => console.log(a * b);

// function currying
let multiplyByTwo = multiply.bind(this, 2); // let multiply = (b) => console.log(2 * b);
multiplyByTwo(5)

