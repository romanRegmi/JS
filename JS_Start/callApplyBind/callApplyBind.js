let first_user = {
    firstname: "Roman",
    lastname: "Regmi",
    printFullName : function () {
      console.log(this.firstname + " " + this.lastname)
    }
}  

first_user.printFullName(); // Roman Regmi
  
let second_user = {
    firstname: "Sachin",
    lastname: "Tendulkar",
}

// call : function borrowing
// We can borrow the functions of one object and use it with the data of another object
first_user.printFullName.call(second_user); // Sachin Tendulkar

// The above isn't the ideal way of working with functions
// We can simply define the function separately and include parameters
let printFullName = function (hometown, country) {
    console.log(this.firstname + " " + this.lastname + " from " + hometown + ", " + country)
}

printFullName.call(first_user, "KTM", "Nepal"); // Roman Regmi from KTM, Nepal

// Apply Method
// The only difference between call and apply method is the way data is passed to the function
printFullName.apply(first_user, ["KTM", "Nepal"]) // arguments is passed as an array.


//bind method : Creates a copy of the printFullName function and binds it to the first_user object and returns a function 
let printMyName = printFullName.bind(name, "KTM", "Nepal");
printMyName(); // Roman Regmi from KTM, Nepal