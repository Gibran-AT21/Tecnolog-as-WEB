"use strict";
(() => {
    const num1 = 10;
    const num2 = 200;
    const num3 = 30;
    let valorbajo = num1;
    let variablemas = "num1";
    if (num2 > valorbajo) {
        valorbajo = num2;
        variablemas = "num2";
    }
    if (num3 > valorbajo) {
        valorbajo = num3;
        variablemas = "num3";
    }
    console.log("El número mayor es " + valorbajo + " y es la variable " + variablemas);
})();
