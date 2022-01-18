// Symbol : used to make unique keys

const symb  = Symbol('My Identifier');
const symbC = Symbol('My Identifier');

// console.log('Symbol:', symb);
// console.log('Symbol:', typeof(symb));

console.log(symb === symbC); // false


const first = Symbol('First')
const second = Symbol('Second')

myObj = {};
myObj[first] = "Harry";
myObj[second] = "Potter";
myObj["Roman"] = "Regmi"

console.log(myObj);

// Symbols are ignored in for in loop
for(key in myObj){
    console.log(key, myObj[key])
}


console.log(JSON.stringify(myObj));