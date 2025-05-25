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
        get firstName() {
            return this._firstName;
        }
        set firstName(theFirstName) {
            if (!theFirstName) {
                throw new Error('Invalid first name.');
            }
            this._firstName = theFirstName;
        }
        get lastName() {
            return this._lastName;
        }
        set lastName(theLastName) {
            if (!theLastName) {
                throw new Error('Invalid last name.');
            }
            this._lastName = theLastName;
        }
        getFullName() {
            return `${this._firstName} ${this._lastName}`;
        }
    }
    const alumno = new Person(20, 'Gibran', 'Alvarado');
    console.log(alumno.getFullName);
    alumno.age = 21;
    alumno.firstName = 'Juan';
    alumno.lastName = 'Pérez';
    console.log(alumno.getFullName);
})();
