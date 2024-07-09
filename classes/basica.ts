(()=>{

    //forma larga de declarar una clase
    class Avenger {
        private name : string;
        private team: string;
        public realName?: string;
        static age: number = 35;

        constructor(name:string,team:string,realname?:string){
            this.name = name;
            this.team = team;
            this.realName = realname;
        }

    }

    
    //forma corta de declarar una clase

    class Avenger2 {
        static age: number = 35;

        constructor(
            private name:string,
            private team:string,
            public realname?:string
        ){}

        public getName(){
            return this.name;
        }
    }

    const antman: Avenger = new Avenger('Antmam','Team A');
    // console.log('antman:', antman);
    const superman: Avenger2 = new Avenger2('superman','Team B');
    // console.log('superman:', superman);
})()