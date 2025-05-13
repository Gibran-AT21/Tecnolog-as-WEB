
// Definición de un arreglo

(()=>{
    const numeros = [1, 2, 3, 4, 5];
    const numero2 : number[] = [6,7,8,9,10];

    numeros.push(100);

    console.log(numeros);

    console.log({numeros});

    const nombres = ['Juan', 'Pedro', 'Maria', 'Jose'];
    const nombres2 : string [] = ['Ana', 'Lupita', 'Carlos'];

    console.log(nombres.sort());
    console.log(nombres2.sort());

    let pos = nombres.indexOf('Juan');
    console.log(pos);


})()