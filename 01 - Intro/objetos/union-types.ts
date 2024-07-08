(() => {
    type Hero = {
        name: string;
        age?: number;
        powers: string[];
        getName?: () => string;
    }

    let myCustonVariable: string | number | Hero;

    myCustonVariable = 'Flash';
    console.log(typeof myCustonVariable);

    myCustonVariable = 19;
    console.log(typeof myCustonVariable);
    
    myCustonVariable = {
        name: 'superman',
        age: 23,
        powers:['super fuerza','rayos x']
    }
    console.log(typeof myCustonVariable);

})()