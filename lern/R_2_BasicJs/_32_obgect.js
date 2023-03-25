"use strict";

const options = {
  name: "test",
  width: 1024,
  height: 1080,
  colors: {
    border: "black",
    bg: "red",
  },
  makeTest: function () {
    console.log("Test");
  },
};

let counter = 0;

for (let key in options) {
  if (typeof options[key] === "object") {
    for (let i in options[key]) {
      console.log(`Свойство ${key} имеет значение ${options[key][i]}`);
      counter++;
    }
  } else {
    console.log(`Свойство ${key} имеет значение ${options[key]}`);
    counter++;
  }
}

console.log(counter);

options.makeTest();

console.log(Object.keys(options).length);
