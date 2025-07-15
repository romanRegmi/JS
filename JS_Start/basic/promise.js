/*
promise:
    -resolve
    -reject
    -pending
*/

function func1(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            const error = true;
            if(!error){
                console.log("Promise Resolved");
                resolve();
            }
            else{
                console.log("Promise Rejected");
                reject('Sorry not fulfilled');
            }            
        },1000);
    })
}

func1().then(function(){
    console.log("Thanks for resolving"); // this will be executed if the promise is resolved
}).catch(function(error){ // the parameter is the value passed in the reject function - in this case 'Sorry not fulfilled'
    console.log("Sorry not fulfilled " + error); // this will be executed if the promise is rejected
})



let p = new Promise((resolve, reject) => {
    let a = 1 + 1;
    if (a === 2) {
        resolve('Success'); // if true calls the resolve function
    }
    else {
        reject('Failure'); // if false calls the reject function
    }
})

p.then((message) => { // if resolve is called
    console.log('This is the message: ' + message);
}).catch((message) => { // if reject is called
    console.log('This is the message: ' + message);
}
);


const recordVideoOne = new Promise((resolve, reject) => {
    resolve('Video 1 Recorded');
});

const recordVideoTwo = new Promise((resolve, reject) => {
    resolve('Video 2 Recorded');
});

const recordVideoThree = new Promise((resolve, reject) => {
    resolve('Video 3 Recorded');
});

Promise.all([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree

]).then((messages) => { // if all promises are resolved
    // all promises will have to be completed before this code is executed
    console.log(messages);
})


// Race

const recordVideoFour = new Promise((resolve, reject) => {
    resolve('Video 4 Recorded');
});

const recordVideoFive = new Promise((resolve, reject) => {
    resolve('Video 5 Recorded');
});

const recordVideoSix = new Promise((resolve, reject) => {
    resolve('Video 6 Recorded');
});

Promise.race([ // will wait for the FIRST ONE to complete instead of waiting for all the promises to complete
    recordVideoFour,
    recordVideoFive,
    recordVideoSix

]).then((message) => { 
    console.log(message);
})

// New Examples
async function example() {
  const promise01 = await asyncFunc01(); 
  const promise02 = await asyncFunc02();
  
  console.log(promise01, promise02); // Will take 10 seconds to print
}

function asyncFunc01() {
  return new Promise((resolve) => setTimeout(() => resolve("Result 1"), 5000));
}

function asyncFunc02() {
  return new Promise((resolve) => setTimeout(() => resolve("Result 2"), 5000));
}

example();


async function example() {
  const promise01 = asyncFunc01();
  const promise02 = asyncFunc02();
  
  // Do other work here (synchronous or async)
  console.log("Doing other work...");
  
  // Wait for both to complete when needed
  const [result01, result02] = await Promise.all([promise01, promise02]);
  console.log(result01, result02); // Will print in 15 sec
}

function asyncFunc01() {
  const promise = new Promise(function(resolve) {
    setTimeout(function() {
      resolve("Result 1");
    }, 15000);
    console.log('Inside Promise'); // Will print immediately
  });
  console.log('Outside Promise') // Will print immediately
  return promise;
}

function asyncFunc02() {
  return new Promise((resolve) => setTimeout(() => resolve("Result 2"), 10000));
}


