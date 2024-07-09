(()=>{
    class Avenger{
        constructor(
            public name:String,
            public realName:String,
        ){
            console.log('Constructor Avenger llamado!!')
        }

        protected getFullname(){
            return `${this.name} ${this.realName} `
        }
    }


    class Xmen extends Avenger{
        constructor(name:string,realName:string,public isMutant:boolean){
            super(name,realName);
            console.log('Constructor Xmen llamado!!');
        }
        //getter and setters can have the same name (not mandatory)
        get fullName(){
            return `Full name (getter): ${this.name} - ${this.realName}`;
        }

        set fullName(name:string){
            if(name.length < 3){
                throw new Error('Name must contain at least 3 characters');
            }
            this.name = name;
        }

        getFullNameFromXmen(){
            console.log('Full name (super -> xMen): ' + super.getFullname());
        }
    }

    const wolverine = new Xmen('Wolverine','Logan',true);
    console.log(wolverine);
    wolverine.getFullNameFromXmen();
    wolverine.fullName = 'Manolo';
    console.log(wolverine.fullName);


})()