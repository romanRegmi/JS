message = 'Good Morning'
function hello(){
  console.log(message)
}
hello(); // Good Morning

message = 'Good Morning'
function hello(){
  message = 'Good Afternoon'
  console.log(message)
}
hello(); // Good Afternoon


message = 'Good Morning'
function hello(){
  let message = 'Good Afternoon'
  {
    let message = 'Good Night'
    console.log(message) // Good Night
  }
  console.log(message) // Good Afternoon
}
hello();


message = 'Good Morning'
function hello(){
  let message = 'Good Afternoon'
  {
    let message = 'Good Night'
    console.log(message)
  }
  let c = function greet() {
    console.log('Good Evening')
  }
  return c
}
hello(); // Good Night and the function greet()


message = 'Good Morning'
function hello(){
  let message = 'Good Afternoon'
  {
    let message = 'Good Night'
    console.log(message)
  }
  let c = function greet() {
    console.log('Good Evening')
  }
  return c
}
c = hello(); // Good Night
c() // Good Evening

message = 'Good Morning'
function hello(){
  let message = 'Good Afternoon'
  {
    let message = 'Good Night'
    console.log(message)
  }
  let c = function greet() {
    console.log(message)
  }
  return c
}
c = hello(); //Good Night
c() // Good Afternoon

/*
Closure: A powerful concept where a function retains access to its containing scope's variables,
even after the parent function has finished executing. This enables encapsulation, data privacy, and
creating functions with persistent state across invocations.
*/

message = 'Good Morning'
function hello(){
  let message = 'Good Afternoon'
  {
    let message = 'Good Night'
    console.log(message)
  }
  let c = function greet() {
    console.log(message)
  }
  message = 'Good Evening'; // this value is taken even though it is defined after the function greet.
  return c
}
c = hello(); //Good Night
c() // Good Evening (The value in the message variable defined in the function is retained)