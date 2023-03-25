"use strict";

function factorial(n) {
  if (
    typeof n !== "number" ||
    n < 0 ||
    !Number.isInteger(n)
  ) {
    console.log("Enter corect number");
  } else {
    if (n === 1) {
      return n;
    } else {
      return n * factorial(n - 1);
    }
  }
}

console.log(factorial(5.5));
