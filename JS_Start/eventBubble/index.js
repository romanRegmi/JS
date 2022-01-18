// Event Bubbling

/*
document.querySelector("#grandparent")
    .addEventListener('click', (e) => {
        console.log("Grandparent Clicked!");
    }, false);

document.querySelector("#parent")
    .addEventListener('click', (e) => {
        console.log("Parent Clicked!");
    }, false);

document.querySelector("#child")
    .addEventListener('click', (e) => {
        console.log("Child Clicked!");
    }, false);
*/

// Event Trickling(Capturing)

/*
document.querySelector("#grandparent")
    .addEventListener('click', (e) => {
        console.log("Grandparent Clicked!");
    }, true);

document.querySelector("#parent")
    .addEventListener('click', (e) => {
        console.log("Parent Clicked!");
    }, true);

document.querySelector("#child")
    .addEventListener('click', (e) => {
        console.log("Child Clicked!");
    }, true);
*/

// Combination of capturing and bubbling

/*
document.querySelector("#grandparent")
    .addEventListener('click', (e) => {
        console.log("Grandparent Clicked!");
    }, true); //capturing

document.querySelector("#parent")
    .addEventListener('click', (e) => {
        console.log("Parent Clicked!");
    }, false);//bubbling

document.querySelector("#child")
    .addEventListener('click', (e) => {
        console.log("Child Clicked!");
    }, true);//capturing

*/

// Stop propogation
document.querySelector("#grandparent")
    .addEventListener('click', (e) => {
        console.log("Grandparent Clicked!");
        e.stopPropagation();
    }, true);

document.querySelector("#parent")
    .addEventListener('click', (e) => {
        console.log("Parent Clicked!");
    }, true);

document.querySelector("#child")
    .addEventListener('click', (e) => {
        console.log("Child Clicked!");
    }, true);