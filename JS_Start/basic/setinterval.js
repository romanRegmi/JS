function greet(name, byeText){
    console.log("Hello Good Morning " + name + " " + byeText);
}

timeout = setTimeout(greet, 5000, "John", "Good Bye");
console.log(timeout);

clearTimeout(timeout); // stop the function from running
setInterval(greet, 1000, "John", "Good Bye"); // run the function every second