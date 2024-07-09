(()=>{
    type Avenger = {
        name: string;
        weapon: string
    }

    const ironman:Avenger = {
        name:'Ironman',
        weapon:'armor'
    }

    const captainAmerica:Avenger = {
        name:'Captain America',
        weapon:'Shield'
    }

    const thor:Avenger = {
        name:'Thor',
        weapon:'Mjolnir'
    }

    const avengers:Avenger[] = [ironman,thor,captainAmerica];

    for (const heroe of avengers) {
        console.log(heroe.name)
    }
})()