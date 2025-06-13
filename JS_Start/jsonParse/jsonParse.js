// JSON string
const jsonString = '{"name": "John", "age": 30, "city": "New York"}';

// Parse JSON string into a JavaScript object
const obj = JSON.parse(jsonString);

// Access object properties
console.log(obj.name); // Output: John
console.log(obj.age);  // Output: 30
console.log(obj.city); // Output: New York