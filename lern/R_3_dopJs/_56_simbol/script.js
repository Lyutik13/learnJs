"use strict";

const obj = {
    name: "Test",
    [Symbol("id")]: 1,
    getId: function () {
        return this[id];
    },
};

// let id = Symbol("id");

// obj[id] = 1;

// console.log(obj[id]);

console.log(obj[Object.getOwnPropertySymbols(obj)[0]]);
