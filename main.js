"use strict";
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['super velocidad', 'viajar en el tiempo'],
        getName() {
            return this.name;
        }
    };
    let superMan = {
        name: 'Clark Kent',
        age: 42,
        powers: ['super velocidad', 'rayos x'],
        getName() {
            return this.name;
        }
    };
    let spiderman = {
        name: 'Peter Parker',
        age: 21,
        powers: ['sentido arácnido', 'crear telarañas'],
        getName() {
            return this.name;
        }
    };
    console.log(flash);
    console.log(superMan);
    console.log(spiderman);
})();
//# sourceMappingURL=main.js.map