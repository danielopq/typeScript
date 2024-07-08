"use strict";
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || 'Doe'}`;
    };
    const name = fullName('Tony');
    console.log('name:', name);
})();
