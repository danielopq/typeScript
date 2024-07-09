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
    class Mutant {
        mutantPower(id) {
            return this.name + ' ' + this.realName;
        }
        constructor(age, name, realName) {
            this.age = age;
            this.name = name;
            this.realName = realName;
        }
    }
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
(() => {
    let addNumbers;
    addNumbers = (a, b) => {
        return a + b;
    };
})();
(() => {
    // Crear interfaces
    const conducirBatimovil = (auto) => {
        auto.encender = true;
        auto.velocidadMaxima = 100;
        auto.acelerar();
    };
    const batimovil = {
        encender: false,
        velocidadMaxima: 0,
        acelerar() {
            console.log("...... gogogo!!!");
        }
    };
    const guason = {
        reir: true,
        comer: true,
        llorar: false
    };
    const reir = (guason) => {
        if (guason.reir) {
            console.log("JAJAJAJA");
        }
    };
    const ciudadGotica = (ciudadanos) => {
        return ciudadanos.length;
    };
    /*
      propiedades:
        - nombre
        - edad
        - sexo
        - estadoCivil
        - imprimirBio(): void // en consola una breve descripcion.
    */
    class Persona {
        constructor() {
            this.nombre = 'María';
            this.edad = 45;
            this.sexo = 'Mujer';
            this.estadoCivil = 'Casada';
        }
        imprimirBio() {
            console.log(`Me llamo ${this.nombre} tengo ${this.edad} años y mi estado civil es ${this.estadoCivil}`);
        }
    }
})();
//# sourceMappingURL=main.js.map