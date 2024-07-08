(()=>{

    let flash: {name:string,age?:number,powers:string[],getName:()=>string} = {
        name: 'Barry Allen',
        age: 24,
        powers: ['super velocidad','viajar en el tiempo'],
        getName(){
            return this.name;
        }
    }

    //el ejemplo de arriba lo podemos resolver de la siguiente forma:

    type Hero = {
        name:string;
        age?:number;
        powers:string[];
        getName:()=>string;
    }

    let flash2: Hero = {
        name: 'Barry Allen',
        age: 24,
        powers: ['super velocidad','viajar en el tiempo'],
        getName(){
            return this.name;
        }
    }

    let superMan: Hero = {
        name: 'Clark Kent',
        age: 42,
        powers: ['super velocidad','rayos x'],
        getName(){
            return this.name;
        }
    }

    let spiderman: Hero = {
        name: 'Peter Parker',
        age: 21,
        powers: ['sentido arácnido','crear telarañas'],
        getName(){
            return this.name;
        }
    }

    console.log(flash2);
    console.log(superMan);
    console.log(spiderman);


})()
