"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
(() => {
    const avengers = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Downey Jr.',
        vision: 'Paul Bettany',
        activo: true,
        poder: 1500
    };
    const printAvengers = (_a) => {
        var { ironman } = _a, rest = __rest(_a, ["ironman"]);
        console.log(ironman, rest);
    };
    printAvengers(avengers);
    const arrAvengers = ['superman', 42, true];
    const [name, age, DcComic] = arrAvengers;
    console.log(name, age, DcComic);
})();
(() => {
    const ironman = {
        name: 'Ironman',
        weapon: 'armor'
    };
    const captainAmerica = {
        name: 'Captain America',
        weapon: 'Shield'
    };
    const thor = {
        name: 'Thor',
        weapon: 'Mjolnir'
    };
    const avengers = [ironman, thor, captainAmerica];
    for (const heroe of avengers) {
        console.log(heroe.name);
    }
})();
(() => {
    let variable = 'hola';
})();
//# sourceMappingURL=main.js.map