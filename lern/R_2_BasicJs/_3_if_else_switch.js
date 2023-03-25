"use strict";

if (4 == 9) {
  console.log("ok");
} else {
  console.log("eror");
}

const num = 50;

if (num < 49) {
  console.log("err");
} else if (num > 100) {
  console.log("many");
} else {
  console.log("ok");
}

// тернарный оператор
const num2 = 50;
num2 === 50 ? console.log("oke") : console.log("Error");

// ////////////////////////////////////////////

const num3 = 50;

switch (num3) {
  case 49:
    console.log("неверно");
    break;
  case 100:
    console.log("неверно");
    break;
  case 50:
    console.log("верно");
    break;
  default:
    console.log("не сегодня");
    break;
}

// ////////////////////////////////////////////
let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;

if ((hamburger && cola) || (fries === 3 && nuggets)) {
  console.log("Done!");
} else {
  console.log("NoDone!");
}
