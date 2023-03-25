"use strict";

const btns = document.querySelectorAll("button"),
  wrapper = document.querySelector(".btn-block");

// console.log(btns[0].classList.length);
// console.log(btns[0].classList.item(0));
// console.log(btns[2].classList.add("red"));
// console.log(btns[0].classList.remove("blue"));

// Добавляет или кбирает рласс
// console.log(btns[4].classList.toggle("red"));

// if (btns[2].classList.contains("red")) {
//   console.log("red");
// }

btns[0].addEventListener("click", () => {
  if (!btns[2].classList.contains("red")) {
    btns[2].classList.add("red");
  } else {
    btns[2].classList.remove("red");
  }

  btns[5].classList.toggle("red");
});

wrapper.addEventListener("click", (event) => {
  //   console.dir(event.target);
  
//   if (event.target && event.target.tagName == "BUTTON") {
//     console.log("hi");
//   }

  if (event.target && event.target.matches("button.red")) {
    console.log("hi");
  }

  //   if (event.target && event.target.classList.contains("blue")) {
  //     console.log("hi");
  //   }
});

const btn = document.createElement("button");
btn.classList.add("red");
wrapper.append(btn);

// btns.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     console.log("hi");
//   });
// });
