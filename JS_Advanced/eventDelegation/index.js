// eventDeledation

/*
    Instead of creating a function for each event, we can use event delegation.
    This means that we can create a function that will be called when the event is triggered.
    This function will be called when the event is triggered on the parent element.
*/

document.querySelector('#category').addEventListener('click', function (e) {
    console.log(e.target.innerText);
});