(() => {

    type Avengers = {
        nick: string;
        ironman: string;
        vision: string;
        activo: boolean;
        poder: number;
    }

    const avengers = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Downey Jr.',
        vision: 'Paul Bettany',
        activo: true,
        poder: 1500
    }



    const printAvengers = ({ironman,vision}:Avengers)=>{
        console.log(ironman,vision);
    }

    printAvengers(avengers);

})()