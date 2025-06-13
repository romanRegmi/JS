let multiply = (a, b) => console.log(a * b);

// function currying
let multiplyByTwo = multiply.bind(this, 2);
multiplyByTwo(5) // 10

