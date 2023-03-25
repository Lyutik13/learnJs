"use strict";

const solder = {
  health: 400,
  armor: 100,
  sayHello: function () {
    console.log("Hello");
  },
};

const jonh = Object.create(solder);

jonh.sayHello();

// Object.setPrototypeOf(jonh, solder);
