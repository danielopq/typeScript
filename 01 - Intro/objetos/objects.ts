(()=>{
    let flash= {
        name: 'Barry Allen',
        age: 24,
        powers: ['super velocidad','viajar en el tiempo']
    }

    console.log('flash:', flash)
    // dado el objetos flash, en los ejemplos de abajo, nos daría error:

    // flash = {
    //     name2: 'Barry Allen',
    //     age2: 24,
    //     powers2: ['super velocidad','viajar en el tiempo']
    // }

    // flash = {
    //     name: 'Barry Allen',
    //     age: 'veinticuatro',
    //     powers: ['super velocidad','viajar en el tiempo']
    // }

    // flash = {
    //     name: 'Barry Allen',
    //     age: 24,
    //     powers: ['super velocidad','viajar en el tiempo'],
    //     getNombre(){
    //         return this.name;
    //     }
    // }

    let flash2: {name:string,age?:number,powers:string[],getNombre:Function} = {
        name: 'Barry Allen',
        age: 24,
        powers: ['super velocidad','viajar en el tiempo'],
        getNombre(){
            return this.name;
        }
    }

    //ejemplo de argumentos opcionales y función dentro de un objeto
    flash2 = {
        name: 'Barry Allen',
        powers: ['super velocidad','viajar en el tiempo'],
        getNombre(){
            return this.name;
        }
    }

    console.log('flash2', flash2);
    console.log(flash2.getNombre());

})()