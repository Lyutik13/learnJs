"use strict";

const family = ["Peter", "Ann", "Alex", "Linda"];

function showFamily(arr) {
  if (arr.length === 0) {
    console.log("Семья пуста");
  } else {
    console.log(`Семья состоит из: ${arr.join(" ")}`);
  }
}

showFamily(family);

// //////////////////////////
const favoriteCities = ["liSBon", "ROME", "miLan", "Dublin"];

function standardizeStrings(arr) {
  for (let value of arr) {
    console.log(value.toLowerCase());
  }
}

standardizeStrings(favoriteCities);

favoriteCities.forEach((num) => {
  console.log(num.toLowerCase());
});
