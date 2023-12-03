let name = {
    firstname: "Roman",
    lastname: "Regmi",
    printFullName : function () {
      console.log(this.firstname + " " + this.lastname)
    }
  }
  
  name.printFullName(); // Roman Regmi
  
  let name2 = {
    firstname: "Raj",
    lastname: "Roy",
  }
  
  name.printFullName.call(name2); // Raj Roy
  
  // But the above way isn't how it's usually done
  
  let name = {
    firstname: "Roman",
    lastname: "Regmi",
  }
  
  let printFullName = function (hometown, country) {
    console.log(this.firstname + " " + this.lastname + " from " + hometown + ", " + country)
  }
  
  //function borrowing
  printFullName.call(name, "KTM", "Nepal"); // Roman Regmi from KTM, Nepal
  
  printFullName.apply(name, ["KTM", "Nepal"]) // arguments is passed as an array.
  // Roman Regmi from KTM, Nepal
  
  //bind method
  /*
  * Creates a copy of the printFullName fun and binds it to the name object and returns a function 
  */
  let printMyName = printFullName.bind(name, "KTM", "Nepal");
  printMyName(); // Roman Regmi from KTM, Nepal