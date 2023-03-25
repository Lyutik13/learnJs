"use strict";

// filter фильтрует масив

const names = ["Ivan", "Ann", "Ksenia", "Vtktor"];

const shortNames = names.filter(function (name) {
    return name.length < 5;
});

console.log(shortNames);

// map берём масив и изменяем его - трансформация

const answers = ["cvnFcg", "AnnA", "Hello"];

const result = answers.map((item) => item.toLowerCase());

console.log(result);

// every/some возвращают булиновое значение
// используем some если хотябы одно условие будет правдой
// every вернёт правду если всё значения верны

const some = [4, "qwq", "ghnfgh"];

console.log(
    some.some(function (item) {
        return typeof item === "number";
    })
);

console.log(some.every((item) => typeof item === "number"));

// reduce собирает масив в одно целое. имееет 2-а аргумента
// const arr = [4, 5, 2, 3, 7, 8];

// //                       0    4
// //                       4    5
// //                       9    2   и тд далеее
// const res = arr.reduce((sum, current) => sum + current);

// console.log(res);

const arr = ["apple", "pear", "plum"];

const res = arr.reduce((sum, current) => sum + ", " + current);

console.log(res);

// пример
const obj = {
    ivan: "persone",
    add: "persone",
    dog: "animal",
    cat: "animal",
};

// обьект в масив и фильтруем
const newArr = Object.entries(obj)
    .filter((item) => item[1] == "persone")
    .map((item) => item[0]);

console.log(newArr);
