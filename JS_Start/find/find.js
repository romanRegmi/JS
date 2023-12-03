var ages = [1,2,3,4];
var toFind = 3;

var check = ages.find( age => age===toFind) // find the first element that matches the condition
// returns undefined if it cannot find the element
console.log(check)

var index = ages.findIndex(function checkage(age){
    return age===3;
})

console.log(index)


const numbers = [1, 2, 3, 4, 5];

numbers.forEach(consoleItems);

function consoleItems(item, index, arr){
    console.log(`${index} : ${item}`);
    console.log(arr);
}

numbers.forEach((item, index, arr) => {
    console.log(`${index} : ${item}`);
    console.log(arr);
});

sum = 0;
numbers.forEach(item => sum += item);
console.log(sum);

let lav = [

{Name: "Jimmy's Cart", Id: 'a0I5j000001QJlnEAG'},
{Name: 'Steve Cart', Id: 'a0I5j000001QJmREAW'},
{Name: 'Steve Cart', Id: 'a0I5j000001QJmCEAW'}

]

let names = [];
lav.forEach((item)=>{
    names.push(item.Name)
})
console.log(names)

console.log(names.includes("Jimmy's Cart"));