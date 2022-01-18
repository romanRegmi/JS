let text = "Roman Regmi";
let n = text.search("Regmi");
console.log(n)


let sentence = "My name is Roman Regmi";
console.log(sentence.search(/regmi/i));

let words = "Visit Microsoft!";
let result = words.replace("Microsoft", "W3Schools");
console.log(result)

let repTst = "Hey, I'm 25 years old! My brother is 16 years old!";

let repFst = repTst.replace(/\d+/, "18");
console.log(repFst)

let rpeAll = repTst.replace(/\d+/g, "18");
console.log(rpeAll)

//Grouping
let myStr = "Hey, I'm 25 and she is 31";
console.log(myStr.replace(/(\d+)([^\d]+)(\d+)/g, "$3$2$1")); // groups are $1, $2, $3
