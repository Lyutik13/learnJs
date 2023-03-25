"use strict";
const btn = document.querySelector(".btn");
let timerId,
    i = 0;

// назначение таймера
// const timerId = setTimeout(logger, 2000);

// Отмена таймера "обязательно через переменную что бы отменить!"
// clearInterval(timerId);

// btn.addEventListener("click", () => {
//     timerId = setInterval(logger, 1000);
// });

// function logger() {
//     if (i === 3) {
//         clearInterval(timerId);
//     }
//     console.log("text");
//     i++;
// }

// пример рекурсивного метада с setTimeout
// let id = setTimeout(function log() {
//     console.log("hi");
//     id = setTimeout(log, 500);
// }, 500);

function myAnimation() {
    const elem = document.querySelector(".box");
    let pos = 0;

    const id = setInterval(frame, 10);
    function frame() {
        if (pos == 300) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + "px";
            elem.style.left = pos + "px";
        }
    }
}

btn.addEventListener("click", () => {
    myAnimation();
});
