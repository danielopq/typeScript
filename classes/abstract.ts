(()=>{
    abstract class Mutant{
        constructor(public name:string, public realName:string){

        }
    }


    class Xmen extends Mutant{
        saveWorld(){
            return 'The world is safe!!'
        }
    }
    class Villian extends Mutant{
        conquestWorld(){
            return 'The world is mine!!';
        }
    }

    // Al ser una clase abstracta, lo siguiente no estaría permitido: 
    // const wolverine:Mutant = new Mutant('Wolverine','Logan');

    const wolverine:Xmen = new Xmen('Wolverine','Logan');
    // console.log('wolverine:', wolverine)
    const magneto:Villian = new Villian('Magneto','Magnus');
    // console.log('Magneto:', magneto);

    // console.log(wolverine.saveWorld());
    // console.log(magneto.conquestWorld());
})()