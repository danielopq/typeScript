"use strict";
(() => {
    class Avenger {
        constructor(name, team, realname) {
            this.name = name;
            this.team = team;
            this.realName = realname;
        }
    }
    Avenger.age = 35;
    const antman = new Avenger('Antmam', 'Team A');
    console.log(antman);
})();
//# sourceMappingURL=main.js.map