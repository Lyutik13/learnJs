"use strict";

// const usdCurr = 28;
// const eurCurr = 40;

// function convert(amount, curr) {
//   console.log(curr * amount);
// }

// convert(500, usdCurr);

const usdCurr = 28;
const discount = 0.9;

function convert(amount, curr) {
  return curr * amount;
}

function promotion(result) {
  console.log(result * discount);
}

promotion(convert(500, usdCurr));

// ////////////////////////////////////////

function test() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
    if (i === 2) return;
  }
  console.log("good");
}

test();

// ////////////////////////////////////////
function sayHello(name) {
  return `Привет, ${name}`;
}

sayHello("Антон");

// ////////////////////////////////////////

function returnNeighboringNumbers(num) {
  return [num - 1, num, num + 1];
}

console.log(returnNeighboringNumbers(5));

// ////////////////////////////////////////

function getMathResult(num, times) {
  if (typeof times !== "number" || times <= 0) {
    return num;
  }
}

console.log(getMathResult(5, 0));
