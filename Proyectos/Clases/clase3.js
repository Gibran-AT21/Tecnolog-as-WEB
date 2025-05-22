"use strict";
(() => {
    //1.-arributos, 2.-constructor, 3.-metodos, 4.-getters y setters
    class Animal {
        constructor(raza, patas, color) {
            this.raza = raza;
            this.patas = patas;
            this.color = color;
            this.raza = raza;
            this.patas = patas;
            this.color = color;
        }
    }
    const perro = new Animal("perro", 4, "negro");
    console.log(perro);
})();
