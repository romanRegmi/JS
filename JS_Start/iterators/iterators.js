function fruitsIterator(values) {
    let nextIndex = 0;
    // we will return an object
    return {
        next: function () { // The next() method returns an object with two properties done and value.
            if (nextIndex < values.length) {
                // We will return the following object
                return {
                    value: values[nextIndex++],
                    done: false
                }
            }
            else {
                // We will return the following object
                return {
                    done: true
                }
            }
        }
    }
}

const myArray = ['Apples', 'Grapes', 'Oranges', 'Mango'];
console.log("My array is ", myArray)

// Using the iterator
const fruits = fruitsIterator(myArray);


console.log(fruits.next())
console.log(fruits.next())
console.log(fruits.next())
console.log(fruits.next())
console.log(fruits.next())


console.log(fruits.next().value) // Apples
console.log(fruits.next().value) // Grapes
console.log(fruits.next().value) // Oranges
console.log(fruits.next().value) // Mango
console.log(fruits.next().value) // undefined
