// Maps in JavaScript: We can use any type of key or value

const myMap = new Map();
// console.log(myMap);

const firstKey = "first";
secondKey = {};
thirdKey = function(){};

myMap.set(firstKey, 'This is a string')
myMap.set(secondKey, 'This is an object')
myMap.set(thirdKey, 'This is a function')

console.log(myMap);

// Getting values from a map
let firstValue = myMap.get(firstKey)
console.log(firstValue)

// Get the size of the map
console.log(myMap.size)

// Loop through the map
for(let [key, value] of myMap){
    console.log(key, value);
}

for(let key of myMap.keys()){
    console.log(key);
}

// You can loop through a map using for each loop
myMap.forEach((value, key)=>{
    console.log('Key is ', key);
    console.log('Value is ', value);
})

// Converting map to an array
let myArray = Array.from(myMap);
console.log('Map to array is ', myArray);

// Converting map keys to an array
let myKeysArray = Array.from(myMap.keys());
console.log('Map to keys array is ', myKeysArray);

// Converting map values to an array
let myValuesArray = Array.from(myMap.values());
console.log('Map to values array is ', myValuesArray);