"use strict";

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function () {
        console.log(`Hello ${this.name}`);
    };
}

const ivan = new User("Ivan", 28);
const alex = new User("Alex", 26);

ivan.hello();

console.log(ivan);
console.log(alex);

// Добовление фичей в User без затрагивания его
User.prototype.exit = function () {
    console.log(`Пользователь ${this.name} ушел`);
};
