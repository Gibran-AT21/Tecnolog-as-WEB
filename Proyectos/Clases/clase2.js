"use strict";
(() => {
    //1.-arributos, 2.-constructor, 3.-metodos, 4.-getters y setters
    class Alumno {
        //public nombre : string;
        //public matricula : string;
        //public academico : string;
        constructor(nombre, matricula, academico) {
            this.nombre = nombre;
            this.matricula = matricula;
            this.academico = academico;
            this.nombre = nombre;
            this.matricula = matricula;
            this.academico = academico;
        }
    }
    const rios = new Alumno("Rios", "123456", "Ingenieria");
    console.log(rios);
    console.log(rios.nombre);
})();
