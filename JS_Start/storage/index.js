// Local Storage

localStorage.setItem('Name', 'John');
localStorage.setItem('Age', '25');

// window.localStorage - browser console

let name = localStorage.getItem('Name')
console.log(name)
localStorage.removeItem('Name')

let impArray = ['John', '25'];
localStorage.setItem('Person', JSON.stringify(impArray)); // JSON.stringify - array to string
let person = JSON.parse(localStorage.getItem('Person')); // JSON.parse - string to array
console.log(person)

// sessionStorage - browser console

sessionStorage.setItem('Name', 'Roman');
sessionStorage.setItem('Age', '24');
sessionStorage.setItem('Person', JSON.stringify(impArray));