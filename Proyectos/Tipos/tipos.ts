(()=>{

    type Heroe = {
        name: string;
        age: number;
        powers: number[];
        getName: () => string;
    }

    let flash: Heroe = {
        name: 'Barry Allen',
        age: 24,
        powers: [1, 2,],
        getName() {
            return this.name;
        }
  } 

  let batman: Heroe = {
    name: 'Bruce Wayne',
        age: 35,
        powers: [3],
        getName() {
            return this.name;
        }
  }

    let superman: Heroe = {
        name: 'Clark Kent',
            age: 33,
            powers: [1],
            getName() {
                return this.name;
            }
    }

})();