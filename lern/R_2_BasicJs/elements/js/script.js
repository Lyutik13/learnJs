"use strict";

// const box = document.getElementById("box");

// console.log(box);

// const btns = document.getElementsByTagName("button");

// console.log(btns);

// const circle = document.getElementsByClassName("circle");

// console.log(circle);

// const hearts = document.querySelectorAll(".heart");

// hearts.forEach((item) => {
//   console.log(item);
// });

const box = document.getElementById("box"),
  btns = document.getElementsByTagName("button"),
  circle = document.getElementsByClassName("circle"),
  wrapper = document.querySelector(".wrapper"),
  hearts = wrapper.querySelectorAll(".heart"),
  oneheart = wrapper.querySelector(".heart");

// console.dir(box);

// box.style.backgroundColor = "blue";
// box.style.width = "500px";

box.style.cssText = "background-color: blue; width: 500px;";

btns[1].style.borderRadius = "25px";
btns[2].style.color = "red";

circle[1].style.backgroundColor = "red";

// for (let i = 0; i < hearts.length; i++) {
//   hearts[i].style.backgroundColor = "blue";
// }

hearts.forEach((item) => {
  item.style.backgroundColor = "blue";
});

const div = document.createElement("div");
// const text = document.createTextNode("тут был я");

div.classList.add("black");

// document.body.append(div);

// wrapper.append(div);

wrapper.prepend(div);

circle[0].remove();

hearts[0].replaceWith(circle[0]);

// опасный метод (чужие скрипты)
div.innerHTML = "Hello world"; 

// div.textContent = "<h1>Hello world</h1>";

div.insertAdjacentHTML("afterend", "<h2>yes</h2>");
