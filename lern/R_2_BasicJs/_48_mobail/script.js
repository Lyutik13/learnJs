"use strict";
// touchstart косание
// touchmove  косание+движение пальца
// touchend   end
// touchenter +-hover скользит по экрану
// touchleave  скользит по экрану, но за пределами
// touchcancel

window.addEventListener("DOMContentLoaded", () => {
  const box = document.querySelector(".box");

  box.addEventListener("touchstart", (e) => {
    e.preventDefault();

    console.log("Start");
  });

    box.addEventListener("touchmove", (e) => {
      e.preventDefault();

      console.log("move");
      console.log(e.targetTouches[0].pageX);
    });

  //   box.addEventListener("touchend", (e) => {
  //     e.preventDefault();

  //     console.log("end");
  //   });
});

// touches список пальцев на экране
// targetTouches
// changedTouches
