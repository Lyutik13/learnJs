// 1) У вас есть небольшой массив с данными о доходах каждой торговой точки. Напишите функцию getPositiveIncomeAmount, которая принимает этот массив данных и возвращает сумму только положительных значений из каждого объекта. (число)
// Пример:
// getPositiveIncomeAmount(funds) => 13300

"use strict";
const funds = [
    { amount: -1400 },
    { amount: 2400 },
    { amount: -1000 },
    { amount: 500 },
    { amount: 10400 },
    { amount: -11400 },
];

let someUsers = [];
let sumUsers = 0;

const getPositiveIncomeAmount = (data) => {
    someUsers = data.filter((item) => item.amount >= 0);
    someUsers = someUsers.map((x) => x.amount);
    sumUsers = someUsers.reduce(function (sum, elem) {
        return sum + elem;
    }, 0);
};
// ОТВЕТ
// const getPositiveIncomeAmount = (data) => {
//     return data.filter(item => item.amount > 0).reduce((acc, curr) => acc + curr.amount, 0)
// }

// 2) Напишите функцию getTotalIncomeAmount, которая тоже принимает этот массив данных. Если хотя бы один из объектов содержит отрицательное значение поля amount, то функция возвращает сумму всех значений. (число) Если таких значений нет - запускается функция getPositiveIncomeAmount с тем же массивом данных.
// Пример:
// getTotalIncomeAmount(funds) => -500

const getTotalIncomeAmount = (data) => {
    if (
        (someUsers = data.filter(
            (item) =>
                item.amount <= 0 || data.filter((item) => item.amount >= 0)
        ))
    ) {
        someUsers = someUsers.map((x) => x.amount);
        sumUsers = someUsers.reduce(function (sum, elem) {
            return sum + elem;
        }, 0);
    } else {
        getPositiveIncomeAmount(funds);
    }
};

getTotalIncomeAmount(funds);

console.log(someUsers);
console.log(sumUsers);

// ОТВЕТ
// const getTotalIncomeAmount = (data) => {
//     return data.some(item => item.amount < 0) ? data.reduce((acc, curr) => acc + curr.amount, 0) : getPositiveIncomeAmount(data);
// }