(()=>{
    class Apocalipse{
        static instance:Apocalipse;
        private constructor(public name:string){

        }

        static createApocalipse():Apocalipse{
            if(!Apocalipse.instance){
                Apocalipse.instance = new Apocalipse('I am the only one');
            }

            return Apocalipse.instance;
        }

        changeName(name:string){
            this.name = name;
        }
    }

    const apoc1:Apocalipse = Apocalipse.createApocalipse();
    const apoc2:Apocalipse = Apocalipse.createApocalipse();
    const apoc3:Apocalipse = Apocalipse.createApocalipse();
    console.log(apoc1, apoc2, apoc3);

    apoc1.changeName('I change one instance, but they all change');
    console.log(apoc1, apoc2, apoc3);

})()