"use strict";
// 4-е команды для работы

// localStorage.setItem("number", 5);

// // localStorage.removeItem("number");
// localStorage.clear();

// console.log(localStorage.getItem("number"));

const checkbox = document.querySelector("#checkbox"),
    form = document.querySelector("form"),
    change = document.querySelector("#color");

if (localStorage.getItem("isCheked") === "true") {
    checkbox.checked = true;
}

if (localStorage.getItem("bg") === "change") {
    form.style.backgroundColor = "red";
}

checkbox.addEventListener("change", () => {
    localStorage.setItem("isCheked", true);
});

change.addEventListener("click", () => {
    if (localStorage.getItem("bg") === "change") {
        localStorage.removeItem("bg");
        form.style.backgroundColor = "#fff";
    } else {
        localStorage.setItem("bg", "change");
        form.style.backgroundColor = "red";
    }
});

// запить JSON формата
const person = {
    name: "Alex",
    age: 25,
};

const serializePersone = JSON.stringify(person);
localStorage.setItem("alex", serializePersone);

console.log(localStorage.getItem("alex"))
