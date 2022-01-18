const students = [
    {name: "Tanya", course: 3, points: 4},
    {name: "Victor", course: 2, points: 5},
]

// run this function 3 seconds after it has been invoked
function enrollStudents(student, callback){
    setTimeout(function(){
        students.push(student);
        callback();
    }, 3000);
}

function getStudents(){
    setTimeout(function(){
        let str="";
        students.forEach(function(student){
            str += `<li>${student.name}</li>`;
        });
        document.getElementById("students").innerHTML = str;
    }, 1000);
}

let newStudent = {name: "John", course: 1, points: 5};


enrollStudents(newStudent, getStudents); // do not call the function, just the name 



