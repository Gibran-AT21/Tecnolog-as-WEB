const num1: number = 10;
const num2: number = 20;
const num3: number = 30;

let valorbajo: number = num1;
let variablemas: string = "num1";

if (num2 > valorbajo) {
    valorbajo = num2;
    variablemas = "num2";
}

if (num3 > valorbajo) {
    valorbajo = num3;
    variablemas = "num3";
}

console.log("El número mayor es " + valorbajo + " y es la variable " + variablemas);

