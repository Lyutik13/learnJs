"use strict";
// 1) строка нааборот
const someString = "This is some strange string";

function reverse(str) {
    if (typeof str !== "string") {
        return "Ошибка!";
    } else {
        return str.split("").reverse().join("");
    }
}

console.log(reverse(someString));

/* 4) Представьте такую реальную ситуацию. У вас есть банкомат, который выдает деньги из двух разных банков 
в разных валютах. Один банк основной с базовыми валютами, второй дополнительный с прочими валютами:

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

Вам нужно создать главную функцию банкомата availableCurr, которая принимает два аргумента: 
первый - это массив со всеми доступными валютами из двух банков сразу (сейчас представим, что они не могут повторяться), 
второй - необязательный аргумент, который указывает ту валюту, которая сейчас закончилась в банкомате. 
Если массив в первом аргументе пустой - то функция возвращает строку 'Нет доступных валют'. 
Функция возвращает строку в нужном виде.

Пример:
availableCurr(['UAH', 'RUB', 'CNY'], 'CNY')
Вернет строку:

Доступные валюты:
UAH
RUB
Заметьте:
- CNY (юань) исчез из списка валют, значит такая валюта закончилась
- После валюты: стоит перенос строки \n, и после каждой валюты тоже. Это важно для тестов
- Данные для первого аргумента должны приходить сразу из двух банков, причем сначала baseCurrencies, потом additionalCurrencies по порядку */

// 2)
const baseCurrencies = ["USD", "EUR"];
const additionalCurrencies = ["UAH", "RUB", "CNY"];
const allCurrencies = [
    ...new Set([...baseCurrencies, ...additionalCurrencies]),
];

function availableCurr(arr, missingCurr) {
    let str = "";

    if (arr.length === 0) {
        str = "Нет доступных валют";
    } else {
        str = "Доступные валюты:\n";
    }

    arr.forEach(function (curr) {
        if (curr !== missingCurr) {
            str += `${curr}\n`;
        }
    });

    return str;
}

console.log(allCurrencies);
console.log(availableCurr(allCurrencies, "RUB"));
