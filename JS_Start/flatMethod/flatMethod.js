const users = [
    { id: 1, name: 'Alice', hobbies: ['Reading', 'Cycling'] },
    { id: 2, name: 'Bob', hobbies: ['Gaming', 'Cooking'] },
    { id: 3, name: 'Charlie', hobbies: ['Hiking'] },
];
    
const allHobbies = users.flatMap(user=> user.hobbies);

console.log(allHobbies);
//Output: ['Reading', 'Cycling', 'Gaming','Cooking', 'Hiking']