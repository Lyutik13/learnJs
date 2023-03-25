"use strict";

const person = {
    name: "Viktor",
    age: 26,

    get userAge() {
        return this.age;
    },

    set userAge(num) {
        this.age = num;
    },
};

console.log(person.userAge);
console.log(person.userAge=30);
console.log(person.userAge);
