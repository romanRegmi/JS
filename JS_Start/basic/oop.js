// OOP
function Person(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    this.getBirthYear = function(){
        return this.dob.getFullYear();
    }
    this.getFullName = function(){
        return `${this.firstName} ${this.lastName}`;
    }
}

// Instantiate object
const person1 = new Person('John', 'Doe', '4-3-1980');
console.log(person1);
console.log(person1.getBirthYear());
console.log(person1.getFullName());



function User(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
}

// Prototype : shared methods and properties
User.prototype.getBirthYear = function(){
    return this.dob.getFullYear();
}

User.prototype.getFullName = function(){
    return `${this.firstName} ${this.lastName}`;
}

const user = new User('Sara', 'Doe', '4-3-1980');
console.log(user.getFullName());


// Class : does not use prototype
class Human {
    constructor(firstName, lastName, dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }
    getBirthYear(){
        return this.dob.getFullYear();
    }
    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}

// Instantiate object
const person2 = new Human('John', 'Doe', '4-3-1980');
console.log(person2);
console.log(person2.getBirthYear());
console.log(person2.getFullName());