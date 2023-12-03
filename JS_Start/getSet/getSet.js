const person = {
	firstName: 'Roman',
	lastName: 'Regmi'
};

console.log(`${person.firstName} ${person.lastName}`);

const person = {
	firstName: 'Roman',
	lastName: 'Regmi',
	fullName() {
		return `${person.firstName} ${person.lastName}`
	}

};

person.fullName = 'John Smith'; // cannot do this.

console.log(person.fullName());

// getters => access properties
// setters => change properties

const person = {
	firstName: 'Roman',
	lastName: 'Regmi',
	get fullName() {
		return `${person.firstName} ${person.lastName}`
	},
	set fullName (value) {
		const parts = value.split(' ');
		this.firstName = parts[0];
		this.lastName = parts[1];
	}

};

person.fullName = 'John Smith';
console.log(person);

/*
{ firstName: 'John',
  lastName: 'Smith',
  fullName: [Getter/Setter] }
*/