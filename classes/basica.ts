(()=>{
    class Avenger {
        private name : string;
        private team: string;
        private realName?: string;
        static age: number = 35;

        constructor(name:string,team:string,realname?:string){
            this.name = name;
            this.team = team;
            this.realName = realname;
        }

    }


    const antman: Avenger = new Avenger('Antmam','Team A');
    console.log(antman);
})()