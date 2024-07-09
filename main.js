"use strict";
(() => {
    class Mutant {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
    }
    class Xmen extends Mutant {
        saveWorld() {
            return 'The world is safe!!';
        }
    }
    class Villian extends Mutant {
        conquestWorld() {
            return 'The world is mine!!';
        }
    }
    // Al ser una clase abstracta, lo siguiente no estaría permitido: 
    // const wolverine:Mutant = new Mutant('Wolverine','Logan');
    const wolverine = new Xmen('Wolverine', 'Logan');
    // console.log('wolverine:', wolverine)
    const magneto = new Villian('Magneto', 'Magnus');
    // console.log('Magneto:', magneto);
    // console.log(wolverine.saveWorld());
    // console.log(magneto.conquestWorld());
})();
(() => {
    //forma larga de declarar una clase
    class Avenger {
        constructor(name, team, realname) {
            this.name = name;
            this.team = team;
            this.realName = realname;
        }
    }
    Avenger.age = 35;
    //forma corta de declarar una clase
    class Avenger2 {
        constructor(name, team, realname) {
            this.name = name;
            this.team = team;
            this.realname = realname;
        }
        getName() {
            return this.name;
        }
    }
    Avenger2.age = 35;
    const antman = new Avenger('Antmam', 'Team A');
    // console.log('antman:', antman);
    const superman = new Avenger2('superman', 'Team B');
    // console.log('superman:', superman);
})();
(() => {
    class Avenger {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
            console.log('Constructor Avenger llamado!!');
        }
        getFullname() {
            return `${this.name} ${this.realName} `;
        }
    }
    class Xmen extends Avenger {
        constructor(name, realName, isMutant) {
            super(name, realName);
            this.isMutant = isMutant;
            console.log('Constructor Xmen llamado!!');
        }
        //getter and setters can have the same name (not mandatory)
        get fullName() {
            return `Full name (getter): ${this.name} - ${this.realName}`;
        }
        set fullName(name) {
            if (name.length < 3) {
                throw new Error('Name must contain at least 3 characters');
            }
            this.name = name;
        }
        getFullNameFromXmen() {
            console.log('Full name (super -> xMen): ' + super.getFullname());
        }
    }
    const wolverine = new Xmen('Wolverine', 'Logan', true);
    console.log(wolverine);
    wolverine.getFullNameFromXmen();
    wolverine.fullName = 'Manolo';
    console.log(wolverine.fullName);
})();
(() => {
    class Apocalipse {
        constructor(name) {
            this.name = name;
        }
        static createApocalipse() {
            if (!Apocalipse.instance) {
                Apocalipse.instance = new Apocalipse('I am the only one');
            }
            return Apocalipse.instance;
        }
        changeName(name) {
            this.name = name;
        }
    }
    const apoc1 = Apocalipse.createApocalipse();
    const apoc2 = Apocalipse.createApocalipse();
    const apoc3 = Apocalipse.createApocalipse();
    console.log(apoc1, apoc2, apoc3);
    apoc1.changeName('I change one instance, but they all change');
    console.log(apoc1, apoc2, apoc3);
})();
//# sourceMappingURL=main.js.map