// Completely different from classical inheritance in other programming language.

// Everythign in JS is an object. 

let arr = ["Roman"];

arr.__proto__. // will show all the methods in console.

//Array.prototype is the same as arr.__proto__


arr.__proto__.__proto__ is an Object
arr.__proto__.__proto__.__proto__
// null

//The above is a prototype chain



//

let object = {
    name:"Roman",
    city:"Kathmanu",
    getIntro : function() {
        console.log(this.name + " from " + this.city);
    }
}

let object2 = {
    name : "Ram"
}


// Never do this
object2.__proto__ = object;
object2.name; // Ram
object2.city; //Kathmandu



Function.prototype.mybind = function() {
    console.log('Roman');
}

function fun(){
    console.log('Hello');
}

fun.__proto__.mybind() // Hello
fun.mybind() // Hello

