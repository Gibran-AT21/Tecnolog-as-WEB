"use strict";
(() => {
    class employee {
        constructor() {
            // creating private class members
            this.emp_Name = "Los cabos fc player";
            this.age_of_emp = 22;
            this.role = "Content Writer";
        }
        // getters to get the name of the employee
        get name() {
            return this.emp_Name;
        }
        //  getter to get the age
        get age() {
            return this.age_of_emp;
        }
    }
    // Creating the object of the Student class
    let man = new employee();
    // Call the getter without paranthesis
    let name_Value = man.name;
    // Print the name
    console.log("The name of the employee is " + name_Value);
    console.log("The age of the employee is " + man.age);
})();
