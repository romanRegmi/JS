let message = {
    hello: 'Hello',
    names: ['Sue', 'Joe'],
    showMessage: function () {
        this.names.forEach(function (name) {
            console.log(this.hello + ' ' + name);
        });
    }
}

message.showMessage();

/*

Executing this code in CodePen should display two messages in the console: “undefined Sue” and “undefined Joe.” 
The variable named hello cannot be referenced inside the nested function because the JavaScript interpreter thinks it 
is an unsupplied function argument. It has no scope inside of the nested function. Referencing the this keyword inside
the nested function just refers to the scope in which the object was invoked, which in this case is global, meaning the 
variable hello does not exist.

*/

let message2 = {
    hello: 'Hello',
    names: ['Sue', 'Joe'],
    showMessage: function () {
        this.names.forEach(name => {
            console.log(this.hello + ' ' + name);
        });
    }
}
message2.showMessage()

// Parameter defaults

function showMessage(who, { p1 = "Hello", p2 = "World" } = {}) { // = {} This enables you to call the function without parameters
    console.log(who + ' says ' + p1 + ' ' + p2);
}
showMessage("Trailhead");


function showContact(firstName, lastName, ...titles) {
    console.log(firstName + ' ' + lastName + ', ' + titles[0] + ' and ' + titles[1]);
}
showContact('Sue', 'Johnson', 'Developer', 'Architect');  


let array1 = ['one', 'two'];
let array2 = ['three', 'four'];
array1.push(...array2);
console.log(array1); // [ 'one', 'two', 'three', 'four' ]
console.log(...array1);  // one two three four