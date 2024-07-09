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
        getFullNameFromXmen() {
            console.log(super.getFullname());
        }
    }
    const wolverine = new Xmen('Wolverine', 'Logan', true);
    console.log(wolverine);
    wolverine.getFullNameFromXmen();
})();
//# sourceMappingURL=main.js.map