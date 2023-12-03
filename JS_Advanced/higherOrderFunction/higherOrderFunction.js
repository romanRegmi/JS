// y() takes in the function x and calls it.
// y() is the higher order function

function x(){
    console.log('Hello world');
}

function y(x){
    x();
}

const radius = [3, 2, 1, 4]

// calculate area and circumference of circle
const area = function (radius) {
    return Math.PI * radius * radius;
};

const circumference = function (radius) {
    return 2 * Math.PI * radius;
};

const calculate = function (radius, logic) {
    const output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(logic(radius[i]));
    }
    return output;
};

console.log(calculate(radius, area));
console.log(calculate(radius, circumference));

// map the array with some logic
console.log(radius.map(area))