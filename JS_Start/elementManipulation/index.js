let element = document.createElement('li');
let text = document.createTextNode('I am a text node');
element.appendChild(text)

// console.log(element)

// Add a class name to the li element
element.className = 'child-created';
element.id = 'createdLi';
element.setAttribute('title', 'mytitle');


// element.innerHTML = '<b>Created by Roman</b>';
element.innerText = 'Created by Roman' // text node is replaced 

let ul = document.querySelector('ul.this-child');
ul.appendChild(element);
// console.log(element)

let elem = document.createElement('h3');
elem.id = 'elem';
elem.className = 'elem';
let tnode = document.createTextNode('This is a created node for elem.');
elem.appendChild(tnode);

element.replaceWith(elem);


let myul = document.getElementById('myul');
myul.replaceChild(element, document.getElementById('fui'));

myul.removeChild(document.getElementById('lui'));

let pr = elem.hasAttribute('href'); // true or false

elem.removeAttribute('id');
elem.setAttribute('title', 'myelemtitle');

console.log(elem, pr);