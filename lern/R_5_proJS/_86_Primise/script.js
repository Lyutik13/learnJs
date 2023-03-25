"use strict";

// console.log("Запрос даных...");

// const req = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         console.log("Подготовка даных...");

//         const product = {
//             name: "TV",
//             price: 2000,
//         };

//         resolve(product);
//     }, 2000);
// });

// req.then((product) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             product.status = "oder";
//             resolve(product);
//         }, 2000);
//     });
// })
//     // then кокда resolve всё гуд ответ есть
//     .then((data) => {
//         data.modify = true;
//         return data;
//     })
//     .then((data) => {
//         console.log(data);
//     })
//     // catch кокда reject ответа нет, ошибка
//     .catch(() => {
//         console.error("Произошла ошибка!");
//     })
//     // finally действее которое будет выполненно независимо от да или нет
//     .finally(() => {
//         console.log("Finally");
//     });

const test = (time) => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(), time);
    });
};

// test(1000).then(() => console.log("1000"));
// test(2000).then(() => console.log("2000"));


// Promise.all ждёт загрузки всех
// Promise.all([test(1000), test(2000)]).then(() => {
//     console.log("All");
// });

// Promise.race выполняется как только один самый первый ответ получин не дожидаясь остальных
Promise.race([test(1000), test(2000)]).then(() => {
    console.log("All");
});
