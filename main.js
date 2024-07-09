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
    console.log(superman.getName())
})();
//# sourceMappingURL=main.js.map