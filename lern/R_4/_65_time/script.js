"use strict";

const now = new Date();

// // get
// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getHours());
// console.log(now.getUTCHours());

// console.log(now.getTimezoneOffset());

// // set
// console.log(now.setHours(18));
// console.log(now);

let start = new Date();
for (let i = 0; i < 1000; i++) {
    let some = i ** 3;
}

let end = new Date();

alert(`Цикл отработал за ${end - start} миллисекунд`);
