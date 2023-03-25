"use strict";

const log = function (a, b, ...rest) {
    console.log(a, b, rest);
};

log("basic", "rest", "oper", "usage");

function caclOrDuble(number, basis = 2) {
    // basis значение по умолчанию
    // basis = basis || 2;
    console.log(number * basis);
}

caclOrDuble(3);

function setOptions(height, width, ...additional) {
    console.log(height, width, ...additional);
}
setOptions(400, 500, "red", "top");

