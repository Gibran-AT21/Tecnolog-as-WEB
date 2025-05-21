"use strict";
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: [1, 2,],
        getName() {
            return this.name;
        }
    };
    let batman = {
        name: 'Bruce Wayne',
        age: 35,
        powers: [3],
        getName() {
            return this.name;
        }
    };
    let superman = {
        name: 'Clark Kent',
        age: 33,
        powers: [1],
        getName() {
            return this.name;
        }
    };
})();
