"use strict";
(() => {
    class Person {
        constructor(age, firstName, lastName) {
            this._age = age;
            this._firstName = firstName;
            this._lastName = lastName;
        }
        get age() {
            return this._age;
        }
        set age(theAge) {
            if (theAge <= 0 || theAge >= 200) {
                throw new Error('The age is invalid');
            }
            this._age = theAge;
        }
        getFullName() {
            return `${this._firstName} ${this._lastName}`;
        }
    }
    const alumno = new Person(20, 'Juan', 'Pérez');
    console.log(alumno);
    alumno.age = 25;
    console.log(alumno.age);
})();
