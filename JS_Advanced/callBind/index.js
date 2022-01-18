let name = {
    firstname : "Roman",
    lastname : "Regmi",
    printFullName: function(){ // best practice is to use function outside of object
        console.log(this.firstname + " " + this.lastname);
    }
}

name.printFullName();

let myNam = {
    firstname : "John",
    lastname : "Doe",
}
 // function borrowing
name.printFullName.call(myNam);

let printFullName = function(country, city) {
    console.log(this.firstname + " " + this.lastname + " from " + country + "," + city);
}
printFullName.call(myNam, "Ukraine", "Kiev");
printFullName.call(name, "Nepal", "Kathmandu");

// apply - same as call but with array
printFullName.apply(name, ["Nepal", "Kathmandu"]);

// bind method - returns a function
let printFullNameBind = printFullName.bind(myNam, "Ukraine", "Kiev");
console.log(printFullNameBind)
printFullNameBind();
