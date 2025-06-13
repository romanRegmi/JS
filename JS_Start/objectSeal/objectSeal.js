const car = {
    make : 'Toyota',
    model : 'Camry',
    year: '2020'
};

Object.seal(car);

//Attempt to add a new property
car.color = 'black'; // This will not work

//Attempt to delete an existing property
delete car.year; // This will not work

//Modify existing property
car.year = '2022';