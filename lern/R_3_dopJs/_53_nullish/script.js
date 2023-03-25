'use strict';
// (??)

const box = document.querySelector('.box');

const newHeight;
const newWidth;

function changeParams(elem, h, w) {
    elem.style.height = `${h ?? 200}px`;
    elem.style.width = `${w ?? 200}px`;
}

changeParams(box, newHeight, newWidth);