"use strict";

function getCoupeNumber(seatNumber) {
    if (
        typeof seatNumber !== "number" ||
        seatNumber < 0 ||
        !Number.isInteger(seatNumber)
    ) {
        return "Ошибка. Проверьте правильность введенного номера места";
    }
    if (seatNumber === 0 || seatNumber > 36) {
        return "Таких мест в вагоне не существует";
    }
    console.log(Math.ceil(seatNumber / 4));
}

getCoupeNumber(15);

const tt = 1000000000;

console.log(tt);

// zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz

function getTimeFromMinutes(time) {
    if (typeof time !== "number" || time < 0 || !Number.isInteger(time)) {
        return "Ошибка, проверьте данные";
    }
    const hours = Math.trunc(time / 60);
    const minutes = time % 60;

    let hoursStr = "";

    switch (hours) {
        case 0:
            hoursStr = "часов";
            break;
        case 1:
            hoursStr = "час";
            break;
        case 2:
        case 3:
        case 4:
            hoursStr = "часа";
            break;
        default:
            hoursStr = "часов";
    }

    return `Это ${hours} ${hoursStr} и ${minutes} минут`;
}

getTimeFromMinutes(-50);

/* 2) Напишите функцию, которая принимает в себя 4 числа и возвращает самое большее из них. 
Если один из аргументов не является числом или их меньше 4 - возвращается 0. Дробные числа разрешены.

Пример:
findMaxNumber(1, 5, 6.6, 11); =>  11
findMaxNumber(1, 5, '6', '10');  =>  0 */

function findMaxNumber(a, b, c, d) {
    if (
        typeof a !== "number" ||
        typeof b !== "number" ||
        typeof c !== "number" ||
        typeof d !== "number"
    ) {
        return 0;
    } else {
        return Math.max(a, b, c, d);
    }
}

console.log(findMaxNumber(1, 1, 5, 8));
console.log(findMaxNumber(1, 10, "5", 8));
console.log(findMaxNumber(1, 10, "5"));
