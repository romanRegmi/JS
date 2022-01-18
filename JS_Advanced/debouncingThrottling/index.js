// debouncing - only call the function after the user has stopped typing for a second

let getData = () => {
    // call API
    console.log('Fetching data...'); // Everytime a keyup event is triggered, this will be called
    // This means that a lot of API calls will be made
    // We want the function to be called only after the user has stopped typing for a second
};

const doSomeMagic = function(fn, delay){
    let timer;
    return function(){
        let context = this;
        let args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(context, args);
        }, delay);
    }
}


const betterGetData = doSomeMagic(getData, 1000);

// throttling - calling an API after certain intervals of time
//            - events occuring in between is ignored