/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

"use strict";

let numberOfFilms;

function start() {
  numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
  }
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

// const endFilm = prompt("Один из последних просмотренных фильмов?", "");
// const raiting = +prompt("На сколько оцените его с 1 до 5?", "");

// // personalMovieDB.movies.endFilms = endFilm;
// // personalMovieDB.movies.raitings = raiting;

// personalMovieDB.movies[endFilm] = raiting;

function remembeMyFilms() {
  for (let i = 0; i < 2; i++) {
    const endFilm = prompt("Один из последних просмотренных фильмов?", "").trim();
    const raiting = +prompt("На сколько оцените его с 1 до 5?", "");

    if (
      endFilm != null &&
      raiting != null &&
      endFilm != "" &&
      raiting != "" &&
      endFilm.length < 50 &&
      raiting <= 5
    ) {
      personalMovieDB.movies[endFilm] = raiting;
      console.log("good");
    } else {
      console.log("error");
      i--;
    }
  }
}

remembeMyFilms();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
  } else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
  } else {
    console.log("Произошла ошибка");
  }
}

detectPersonalLevel();

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    const genres = prompt(`Ваш любимый жанр под номером ${i}`);
    personalMovieDB.genres[i - 1] = genres;
  }
}

writeYourGenres();

function showMyDB() {
  if (personalMovieDB.privat === false) {
    console.log(personalMovieDB);
  }
}

showMyDB();
