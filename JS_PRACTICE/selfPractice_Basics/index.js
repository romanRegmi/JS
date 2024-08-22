// Check two numbers and return true if one of the number is 100 or if the sum of the two numbers is 100.
const isEqualTo100 = (a, b) => {
    if (a === 100 || b === 100 || a + b === 100) {
        return true;
    } else {
        return false;
    }
}
console.log(isEqualTo100(99, 1));

// Fetch extension of a file name
const getExtension = (filename) => {
    return filename.split('.').pop();
}
console.log(getExtension('index.html'));

// Replace every charcter in a string with the next character in the alphabet
const replaceChar = (str) => {
    let newStr = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'z') {
            newStr += 'a';
        } else {
            newStr += String.fromCharCode(str.charCodeAt(i) + 1);
        }
    }
    return newStr;
}
console.log(replaceChar('abc'));

// Add "New!" in front of a given string. If the given string already begins with "New!", return the string unchanged.
const addNew = (str) => str.indexOf('New!') === 0 ? str : 'New!' + str;
console.log(addNew('Hello'));

/*
 
*/
function newStr(text) {
    if (text.length < 3) {
        return text;
    } else {
        return text.slice(-3) + text.slice(0, 3);
    }

}
console.log(newStr('abc'));
console.log(newStr('ab'));

/*
Write a JS program to check a given string contains 2 to 4 occurences of a specified character
*/
function checkOccurence(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }
    if (count >= 2 && count <= 4) {
        return true;
    } else {
        return false;
    }
}
console.log(checkOccurence('aabc', 'a'));

// Find number of even digits in a array of integers
function findEven(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            count++;
        }
    }
    return count;
}

// Check if array of Integers is sorted in ascending order
function isSorted(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }
    return true;
}
isSorted([1, 2, 3, 4, 5]);

// Largest even number from an array of integers
function largestEven(arr) {
    let largest = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0 && arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}

/*
Write a JS program to convert a CSV string to a 2D array.
A new line indicates a new row in the array
 
Example:
-------
abc, def, ghi
jkl, mno, pqr
stu, vwx, yza
*/

const parseCSV = (csvString) =>
    csvString.split('\n').map(row => row.split(','));

const str = `abc, def, ghi
    jkl, mno, pqr
    stu, vwx, yza`

console.log(parseCSV(str))

/*
*/

console.log([1, 2, 3, 4, 5].every(x => x > 0))
console.log([1, 2, 3, 4, 5].every(x => x > 3))

// Count the number of vowels in a string
function countVowels(str, letters = ['a', 'e', 'i', 'o', 'u']) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (letters.includes(str[i])) {
            count++;
        }
    }
    return count;

}
console.log(countVowels('abcde'))

const countLetters = (
    str, letters = ['a', 'e', 'i', 'o', 'u']) =>
    str
        .split('')
        .filter(s => letters.indexOf(s) > -1)
        .length;

console.log(countLetters('abcde'))

// Extract unique characters from string
const uniqueChars = (str) => {
    let unique = '';
    for (let i = 0; i < str.length; i++) {
        if (!unique.includes(str[i])) {
            unique += str[i];
        }
    }
    return unique;
}

const getUniqueChars = (str) =>
    new Set(str.split('')).join('');
