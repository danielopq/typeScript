"use strict";
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
    console.log('antman:', antman);
    const superman = new Avenger2('superman', 'Team B');
    console.log('superman:', superman);
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
//# sourceMappingURL=main.js.map