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