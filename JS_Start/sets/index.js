// Set stores unique values

let mySet = new Set();
console.log(mySet);

// Adding values to the set
mySet.add('This')
mySet.add('World')
mySet.add('This')
console.log(mySet)

mySet = new Set([1, 45, 'Hello', false, {a:1, b:2}, 'Hello']);
console.log(mySet)
console.log(mySet.has('Hello'));

mySet.delete('Hello');
console.log(mySet.has('Hello'));

const exampleSet = new Set([1, 2, 1, 1, 2, 1]);

console.log(exampleSet);
// Set(2) { 1, 2 }

console.log(exampleSet.size);
// 2

exampleSet.add(5).add(5).add(15);

console.log(exampleSet.has(5));
// true
