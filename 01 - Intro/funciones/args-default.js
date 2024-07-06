"use strict";
(() => {
    const fullName = (firstName, lastName, upper = false) => {
        if (upper) {
            return `${firstName} ${lastName || 'Doe'}`.toUpperCase();
        }
        return `${firstName} ${lastName || 'Doe'}`;
    };
    let name = fullName('Tony');
    console.log('name:', name);
    name = fullName('Tony', 'Stark', true);
    console.log('name:', name);
})();
