const recipient = "James"

const email = "Hey " + recipient + "! How is it going? Cheers Per"
console.log(email)

const temp = `Hey ${recipient}! How is it going? Cheers Per`
console.log(temp)

let example = 'Roman';

console.log(example.padStart(10, '-')); 
// Makes the string 10 characters long by adding '-' to the beginning if needed

// -----Roman


let fullName = 'Roman Regmi';

console.log(fullName.padStart(10, '-')); 
// Roman Regmi


let test = 'India';

console.log(fullName.padStart(100).length); 
// 100