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



    const printAvengers = ({ironman,...rest}:Avengers)=>{
        console.log(ironman,rest);
    }

    printAvengers(avengers);

    const arrAvengers:[string,number,true] = ['superman',42,true];

    const [name,age,DcComic] = arrAvengers;

    console.log(name,age,DcComic);

})()