"use strict";
(() => {
    const hola = function () {
        return "Hola UPJR!";
    };
    const hola2 = () => {
        return "Hola UPJR! v2";
    };
    const hola3 = () => "Hola UPJR! v3";
    const hola4 = (nombre) => `Hola ${nombre} UPJR! v4`;
    const suma = (num1, num2) => num1 + num2;
    const resta = (num1, num2) => num1 - num2;
    const multi = (num1, num2) => num1 * num2;
    const divi = (num1, num2) => num1 / num2;
    const suma2 = function (num1, num2) {
        return num1 + num2;
    };
})();
