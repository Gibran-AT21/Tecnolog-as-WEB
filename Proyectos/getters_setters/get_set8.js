"use strict";
(() => {
    class Car {
        constructor() {
            //Regular Property 
            //Also known as backing Property to color getter & setter property
            this._color = "blue";
        }
        // Accessor Property with the name color
        get color() {
            return this._color;
        }
        set color(value) {
            this._color = value;
        }
    }
    ;
    let car = new Car();
    //Using the getter method
    console.log(car.color); //blue  
})();
