"use strict";

const btnPhone = document.querySelector("#iphone"),
    btnMacbook = document.querySelector("#macbook"),
    images = document.querySelectorAll("img");

let phoneAnimation;
btnPhone.addEventListener("click", () => {
    if (!phoneAnimation) {
        phoneAnimation = images[0].animate(
            [
                { transform: "translateY(0)" },
                { transform: "translateY(100px)" },
                { transform: "translateY(-100px)" },
                { transform: "translateY(0)" },
            ],
            {
                duration: 4000,
                iterations: Infinity,
            }
        );
    } else if (phoneAnimation.playState === "paused") {
        phoneAnimation.play();
    } else {
        phoneAnimation.pause();
    }
});
