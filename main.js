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
(() => {
    const client = {
        name: 'Manuel',
        age: 25,
        address: {
            id: 125,
            zip: 'KY SUD12',
            city: 'Ottawa',
        },
        getFullAddress(id) {
            return this.address.city;
        }
    };
    const client2 = {
        name: 'Melissa',
        age: 30,
        address: {
            id: 56,
            zip: 'N20-1000',
            city: 'Toronto'
        },
        getFullAddress(id) {
            return this.address.city;
        }
    };
})();
//# sourceMappingURL=main.js.map