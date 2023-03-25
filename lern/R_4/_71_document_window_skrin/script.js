"use strict";

const box = document.querySelector(".box"),
    btns = document.querySelector("button");

// const width = box.clientWidth;
// const height = box.clientHeight;

// const width = box.offsetWidth;
// const height = box.offsetHeight;

const width = box.scrollWidth;
const height = box.scrollHeight;

console.log(width, height);
console.log(btns);

btns.addEventListener("click", () => {
    box.style.height = box.scrollHeight + "px";
    //  /////// inLine стили преорететней Computed и перебевают css
    console.log(box.scrollTop);
    // получение кол-во px проскроленных вверх
});

console.log(box.getBoundingClientRect());
// получение всех координат

const style = window.getComputedStyle(box);
// получение всех стилей эл-та (Computed стили идут из css)
console.log(style.display);

document.documentElement.scrollTop = 0;

const header = document.querySelector(".header");
console.log(header.getBoundingClientRect());
console.log(header.scrollHeight);