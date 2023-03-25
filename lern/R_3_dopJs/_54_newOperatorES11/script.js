"use strict";
// (?.)

const box = document.querySelector(".box");
const block = document.querySelector(".block");

// проверка на существование данных ?
console.log(block?.textContent);

const userData = {
    name: "viktor",
    age: null,
    say: function () {
        console.log("Hello");
    },
};

userData.say();

// не существует
userData.hay?.();

// проверка 
// if (userData && userData.slills && userData.slills.js) {
//     console.log(userData.slills.js);
// }
console.log(userData?.slills?.js);
