"use strict";
(() => {
    const hero = 'Flash';
    function returnName() {
        return hero;
    }
    const activateBatSignal = () => {
        return 'Bat signal activated';
    };
    console.log(typeof activateBatSignal());
})();
