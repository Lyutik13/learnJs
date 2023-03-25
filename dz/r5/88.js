"use strict";

// 1) У вас есть список фильмов с рейтингом в виде массива объектов. Напишите функцию showGoodFilms, которая будет принимать этот массив, а возвращать будет массив объектов только с теми фильмами, у которых рейтинг больше или равен 8.

// 1
const films = [
    {
        name: "Titanic",
        rating: 9,
    },
    {
        name: "Die hard 5",
        rating: 5,
    },
    {
        name: "Matrix",
        rating: 8,
    },
    {
        name: "Some bad film",
        rating: 4,
    },
];

// let goodFilms = [];

// function showGoodFilms(arr) {
//     let goodFilms = [];
//     return (goodFilms = arr.filter((e) => e.rating >= 8));
// }

// showGoodFilms(films);

// console.log(showGoodFilms(films));

// 2) Напишите функцию showListOfFilms, которая будет принимать этот же массив, а возвращать будет строку, которая содержит названия фильмов через запятую.

function showListOfFilms(arr) {
    return arr.reduce(
        (acc, curr) =>
            `${typeof acc === "object" ? acc.name : acc}, ${curr.name}`
    );
}

console.log(showListOfFilms(films));

function setFilmsIds(arr) {
    return arr.map((film, i) => {
        film.id = i;
        return film;
    });
}

console.log(setFilmsIds(films));
