(()=>{
    //1.-arributos, 2.-constructor, 3.-metodos, 4.-getters y setters

    class Animal{
       
        constructor( public raza: string, public patas: number, public color: string){
            this.raza = raza;
            this.patas = patas;
            this.color = color;
        }
    }

    const perro: Animal = new Animal ("perro", 4, "negro");

    console.log(perro);
  
 

})();