function add(nums){
    console.log(arguments);
}

add(1,2,3,4,5);
// [Arguments] { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5 }


function sum(...nums){
    console.log(nums);
}

sum(1,2,3,4,5);
// [ 1, 2, 3, 4, 5 ]


function amount(...nums){
    let total = nums.reduce((acc, curr) => acc + curr);
    console.log(total);
}
amount(1,2,3,4,5);
// 15


function sum(a, b, ...restExam){
    console.log(restExam); // [3,4,5]
  }
  
  //list items converted into array
  sum(1,2,3,4,5)
  
  let x = [1,2,3];
  
  //convert array into a list of items
  let y = [...x, 4, 5, 6]