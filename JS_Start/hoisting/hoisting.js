greet();
function greet(){
  console.log("Good Morining");
}; // Will print "Good Morning"


// Hoisting with var, let and const
console.log(a); // undefined
var a = 7;

console.log(b); // Uncaught reference error
let b = 5;

console.log(c); // Uncaught reference error
const c = 5;

morning(); // Type Error (Morning isn't a func) [let, var, const]
let morning = ( ) => {
  console.log("Good Morning");
}