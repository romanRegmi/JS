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