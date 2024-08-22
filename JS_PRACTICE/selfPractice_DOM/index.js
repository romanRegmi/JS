const menu = document.querySelector('.menu');
const paragraphs = document.getElementById('portion');

menu.addEventListener('click', getToogle);

// toggle menu
function getToogle(event){
    const item = event.target;
    item.classList.toggle('menu-css');
}

// Highlight all the words over 8 characters long in the 1st paragraph with a yellow background
const firstPara = paragraphs.querySelector('p');
const words = firstPara.innerText.split(' ');

firstPara.innerHTML = words.map(word => {
    if (word.length > 8) {
        return `<span style="background-color: yellow">${word}</span>`;
    } else {
        return word;
    }
}).join(' ');

// Add a link after the 2nd paragraph
const link = document.createElement('a');
link.href  = 'https://www.youtube.com/';
link.innerText = 'YouTube';

const secondPara = paragraphs.querySelectorAll('p')[1];
secondPara.appendChild(link); // with in the paragraph tag

const google = '<a href="https://www.google.com/">Google</a>'
secondPara.insertAdjacentHTML("afterend", google) // outside the paragraph tag

// Split each new sentence into a seperate line(seperate paragraph)
const thirdPara = paragraphs.querySelectorAll('p')[2];
const sentences = thirdPara.innerText.split('.');

thirdPara.remove()

// Two different methods to create a new paragraph
for(let sentence in sentences) { 
    let p = document.createElement('p');
    p.innerText = sentences[sentence];
    paragraphs.appendChild(p);
}

for(let sentence in sentences){
    paragraphs.insertAdjacentHTML('beforeend', `<p>${sentences[sentence]}</p>`)
}

// Count the number of words in the paragraph tag and display the count after the heading.
const heading = document.querySelector('h2');
heading.innerText += ` has ${words.length} words`;


// Replace all the , with a # in fourth paragraph
const fourthPara = paragraphs.querySelectorAll('p')[2];
fourthPara.innerText = fourthPara.innerText.replace(/\,/g, '#');


