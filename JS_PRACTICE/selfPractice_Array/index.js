const people = [
    { firstName: 'Sam', lastName: 'Hughes', DOB: '07/07/1978', department: 'Development', salary: '45000' },
    { firstName: 'Terri', lastName: 'Bishop', DOB: '02/04/1989', department: 'Development', salary: '35000' },
    { firstName: 'Jar', lastName: 'Burke', DOB: '11/01/1985', department: 'Marketing', salary: '38000' },
    { firstName: 'Julio', lastName: 'Miller', DOB: '12/07/1991', department: 'Sales', salary: '40000' },
    { firstName: 'Chester', lastName: 'Flores', DOB: '03/15/1988', department: 'Development', salary: '41000' },
    { firstName: 'Madison', lastName: 'Marshall', DOB: '09/22/1980', department: 'Sales', salary: '32000' },
    { firstName: 'Ava', lastName: 'Pena', DOB: '11/02/1986', department: 'Development', salary: '38000' },
    { firstName: 'Gabriella', lastName: 'Steward', DOB: '08/26/1994', department: 'Marketing', salary: '46000' },
    { firstName: 'Charles', lastName: 'Campbell', DOB: '09/04/1977', department: 'Sales', salary: '42000' },
    { firstName: 'Tiffany', lastName: 'Lambert', DOB: '05/11/1990', department: 'Development', salary: '34000' },
    { firstName: 'Antonio', lastName: 'Gonzalez', DOB: '03/24/1985', department: 'Office Management', salary: '49000' },
    { firstName: 'Aaron', lastName: 'Garrett', DOB: '09/04/1985', department: 'Development', salary: '39000' },
];

avgSalary = people.reduce((acc, person) => acc + parseInt(person.salary), 0) / people.length; // 0 is the default value of acc
console.log(avgSalary)

olderThanThirty = people.filter(person => new Date().getFullYear() - new Date(person.DOB).getFullYear() > 30);
console.log(olderThanThirty)

fullName = people.map(name => name.firstName + ' ' + name.lastName);
console.log(fullName)

const orders = [
    {
        orderId: '123', customerId: '123', deliveryDate: '01-01-2020', delivered: true, items: [
            { productId: '123', price: 55 },
            { productId: '234', price: 30 },
        ]
    },
    {
        orderId: '234', customerId: '234', deliveryDate: '01-02-2020', delivered: false, items: [
            { productId: '234', price: 30 },
        ]
    },
    {
        orderId: '345', customerId: '234', deliveryDate: '05-01-2020', delivered: true, items: [
            { productId: '567', price: 30 },
            { productId: '678', price: 80 },
        ]
    },
    {
        orderId: '456', customerId: '345', deliveryDate: '12-01-2020', delivered: true, items: [
            { productId: '789', price: 12 },
            { productId: '890', price: 90 },
        ]
    },
    {
        orderId: '578', customerId: '456', deliveryDate: '12-01-2020', delivered: true, items: [
            { productId: '901', price: 43 },
            { productId: '123', price: 55 },
        ]
    },
];

// 1) Get a list of the orders for the customer with the ID 234 that have not been delivered.

console.log(orders.filter(order => order.customerId === '234' && !order.delivered));

// 2) Create a new property on each order with the total price of items ordered.

console.log(orders.map(order => ({ ...order, totalPrice: order.items.reduce((acc, item) => acc + item.price, 0) })));

// 3) Have all the orders been delivered?

console.log(orders.every(order => order.delivered));

// 4) Has the customer with ID '123' made any orders?

console.log(orders.some(order => order.customerId === '123'));

// How many orders has the custome with ID '234' made?

console.log(orders.filter(order => order.customerId === '234').length);

// 5) Have any products with an id of 123 been sold?

console.log(orders.some(order => order.items.some(item => item.productId === '123')));

// 6) Count the number of products with an id of 123 that have been sold.

console.log(orders.reduce((acc, order) => acc + order.items.filter(item => item.productId === '123').length, 0));



// Create a function that takes an array of numbers and returns "Booms" if the digit 7 is in the array.

function booms(arr) {
    return arr.join('').includes('7') ? 'Booms' : 'there is no 7';
}
console.log(booms([1, 2, 3, 4]));
console.log(booms([1, 2, 3, 7]));
console.log(booms([1, 2, 3, 97]))

// Split array into group of 3

function splitArray(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i += 3) {
        newArr.push(arr.slice(i, i + 3));
    }
    return newArr;
}

console.log(splitArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// Split array into group of 3 including previous numbers
function splitArr(arr) {
    let newArr = [];
    for (let i = 0; i < (arr.length - 2); i++) {
        newArr.push(arr.slice(i, i + 3));
    }
    return newArr;
}
console.log(splitArr([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// Count the number of boomerang in an array. 
// Boomerang : same first and last element.

newArr = splitArr([1, 2, 1, 2, 3, 2, 1, 2, 1, 7]);
function countBoomerang(arr) {
    counter = 0;
    for (let i = 0; i < newArr.length; i++) {

        if (newArr[i][0] === newArr[i][newArr[i].length - 1]) {
            counter++;
        }
    }
    return counter;

}
console.log(countBoomerang(newArr));

// Check if user likes or dislikes a video
// ['Like', 'Dislike'] => 'Dislike'
// ['Like', 'Like'] => 'Nothing'

function likeordislike(arr) {
    if (arr[arr.length - 1] === arr[arr.length - 2]) {
        return 'Nothing';
    }
    else if (arr[arr.length - 1] != arr[arr.length - 2]) {
        return arr[arr.length - 1];

    }
}

console.log(likeordislike(['Like', 'Dislike', 'Like', 'Like', 'Dislike']));