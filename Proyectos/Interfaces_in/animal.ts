(()=> {

interface Animal {
  name: string;
}

interface Bear extends Animal {
  honey: boolean;
}


const bear: Bear = {
    name: 'Panda',
    honey: true
}

console.log(bear.name);
console.log(bear.honey);


})();