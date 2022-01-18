const students = [
    {name: "Tanya", course: 3, points: 4},
    {name: "Victor", course: 2, points: 5},
]

// run this function 3 seconds after it has been invoked
function enrollStudents(student){ 
    setTimeout(function(){ // used when server takes time to load
        students.push(student);
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

/* 
although the enrollStudent function is invoked before the getStudents function,
the new student is added to the students array after the getStudents function has been invoked
so the new student is not displayed in the list
this is because enrollStudents takes 3 seconds to complete
and the getStudents function is invoked within this timeframe
*/

enrollStudents(newStudent);
getStudents();

// callBacks.js has the callback method in it.