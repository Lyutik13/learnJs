"use strict";
// инкапсуляция #

class User {
    constructor(name, age) {
        this.name = name;
        this._age = age;
    }

    // c #
    #surname = "Lyutikov";

    say = () => {
        console.log(
            `Имя пользователя: ${this.name} ${this.#surname}, возраст ${
                this._age
            }`
        );
    };

    get age() {
        return this._age;
    }

    set age(age) {
        if (typeof age === "number" && age > 0 && age < 110) {
            this._age = age;
        } else {
            console.log("enrer number!");
        }
    }
}

const ivan = new User("Ivan", 27);
console.log(ivan.surname);

// console.log(ivan._age);
// ivan._age = 99;

// console.log(ivan._age);

ivan.say();

// ////////////
class User2 {
    constructor(name, age) {
        this.name2 = name;
        this.age2 = age;
    }

    #surname2 = "Relocate";

    say2 = () => {
        console.log(
            `name User is: ${this.name2} ${this.#surname2} and age:${this.age2}`
        );
    };
}

const dima = new User2("Dima", 29);
dima.say2();

