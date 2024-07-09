(()=>{
    interface Xmen{
        name:String;
        realName:String;
        mutantPower(id:number):String;
    }

    interface Human{
        age:number;
    }



    class Mutant implements Xmen, Human {

        mutantPower(id: number): String {
            return this.name +' '+this.realName;
        }

        constructor(public age:number, public name:String, public realName:string){

        }
    }

})()