"use strict";

const persone = {
    name: "Vitya",
    tel: "+792646547589",
    parents: {
        mom: "tanya",
        ded: "oleg",
    },
};

// //перевод в JSON для отправки на сервер
// console.log(JSON.stringify(persone));

// // перевод в обычный формат пришедшего JSON с сервера
// console.log(JSON.parse(JSON.stringify(persone)));

// глубокая копия обьекта через JSON.parse(JSON.stringify(...))
const clone = JSON.parse(JSON.stringify(persone));
clone.parents.mom = "Ann";

console.log(persone);
console.log(clone);
