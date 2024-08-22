const users = [
    { name: "James", role: "admin" },
    { name: "Alex", role: "member" },
    { name: "Rock", role: "member" },
    { name: "Mick", role: "admin" },
];

const result = Object.groupBy(users, ({role}) => role);
console.log(result);
console.log(result.admin);

/*
    admin: [
        { name: "James", rote: "admin" },
        { name: "Mick", rote: "admin" },
    ];

    member: [
        { name: "Alex", role: "member" },
        { name: "Rock", role: "member" },
    ];
*/

const scores = [
    { name: "James", subject: "Computer Science", marks: 80 },
    { name: "Alex", subject: "Computer Science", marks: 20 },
    { name: "Rock", subject: "Computer Science", marks: 90 },
    { name: "Mick", subject: "Computer Science", marks: 40 },
    { name: "Mick", subject: "Computer Science", marks: 40 },
];
    
const result = Object.groupBy(scores, (user) => {
    if (user.marks > 50) {
        return "pass"; 
    } else {
        return "fail";
    }
});

console.log(result);
console.log(result.fail);