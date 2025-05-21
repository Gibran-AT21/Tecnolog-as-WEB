(()=> {

    type Hero = {
        name: string;
        age?: number;
        powers: number[];
        getName?: () => string;
    }

    let myCustomVariable: (string | number | Hero) = 33;
    //myCustomVariable = 'GAT';

    myCustomVariable = {
        name: 'git',
        age:23,
        powers: [1]
    }
    
    
    console.log(typeof myCustomVariable)
    console.log(myCustomVariable)

})()