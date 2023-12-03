function User(email, name){
	this.email = email;
	this.name = name;
	this.online = false;
	this.login = function(){
		console.log(this.email, 'has logged in');
	}

}

var userOne = new User('romanregmi@hotmail.com', 'Roman');
var userTwo = new User('roman.regmi@compliancequest.com', 'Regmi');

console.log(userOne);
userTwo.login();


/* 
User {
  email: 'romanregmi@hotmail.com',
  name: 'Roman',
  online: false,
  login: [Function] }
roman.regmi@compliancequest.com has logged in
*/

function Users(email, name){
	this.email = email;
	this.name = name;
	this.online = false;
}

Users.prototype.login = function(){
	this.online = true;
	console.log(this.email, 'has logged in');
}

Users.prototype.logout = function(){
	this.online = false;
	console.log(this.email, 'has logged out');
}

var userOne = new Users('romanregmi@hotmail.com', 'Roman');
var userTwo = new Users('roman.regmi@compliancequest.com', 'Regmi');

console.log(userOne);
userTwo.login();



/*
Advantage : https://stackoverflow.com/questions/4508313/advantages-of-using-prototype-vs-defining-methods-straight-in-the-constructor
*/