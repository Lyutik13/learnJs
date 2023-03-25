"use strict";

const btns = document.querySelectorAll("button");

// btn.onclick = function () {
//   alert("Click");
// };

// btn.addEventListener("click", () => {
//   alert("Click");
// });

// btn.addEventListener("click", () => {
//   alert("Secong click");
// });

let i = 0;
const deleteElement = (e) => {
  console.log(e.target);
  i++;
  if (i == 2) {
    btn.removeEventListener("click", deleteElement);
  }
};

// btns.addEventListener("click", deleteElement);

btns.forEach((btn) => {
  btn.addEventListener("click", deleteElement);
});

const link = document.querySelector("a");

link.addEventListener("click", (e) => {
  e.preventDefault();

  console.log(e.target);
});
