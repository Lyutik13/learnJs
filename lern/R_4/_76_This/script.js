"use strict";
// 1) Обычная ф-я this = window, но усли "use strict"; - undefined

// function showThis() {
//     console.log(this);
// }

// showThis();

// function showThisToo(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return a + b;
//     }
//     console.log(sum());
// }

// showThisToo(10, 1);

// end 1

// 2) контекст у методов обьектов сам обьект
// const obj = {
//     a: 20,
//     b: 15,
//     sum: function () {
//         function shout() {
//             console.log(this);
//         }
//         shout();
//     },
// };
// obj.sum();

// end 2

// 3) this в конструкторах и класах это новый экземпляр обьекта
// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function () {
//         console.log(`Hello ${this.name}`);
//     };
// }
// let ivan = new User("Ivan", 26);

// end 3

// 4) Ручная привязка this: coll, apply, bind;
// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + surname);
// }

// const user = {
//     name: "Viktor",
// };

// sayName.call(user, "Lyut");
// sayName.apply(user, ["Lyut"]);

// function count(num) {
//     return this * num;
// }

// const double = count.bind(2);
// console.log(double(3));
// console.log(double(5));

// end 4

// PRIMER
const btn = document.querySelector("button");

// когда обычная функция - контекст вызова сам элемент на котором произошло событие

btn.addEventListener("click", function () {
    // console.log(this);
    this.style.backgroundColor = "green";
});

// => функция!
const obj = {
    num: 5,
    sayNumber: function () {
        const say = () => {
            console.log(this.num);
        };
        say();
    },
};

obj.sayNumber();

// const double = (a) => {
//     return a * 2;
// };

const double = (a) => a * 2;

console.log(double(4));
