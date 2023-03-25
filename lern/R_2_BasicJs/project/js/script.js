/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

/* Задания на урок:

6) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

7) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

8) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

9) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

10) Фильмы должны быть отсортированы по алфавиту */

"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const movieDB = {
    movies: [
      "Логан",
      "Лига справедливости",
      "Ла-ла лэнд",
      "Одержимость",
      "Скотт Пилигрим против...",
    ],
  };

  const reclam = document.querySelectorAll(".promo__adv img"),
    poster = document.querySelector(".promo__bg"),
    genre = poster.querySelector(".promo__genre"),
    filmsList = document.querySelector(".promo__interactive-list"),
    addForm = document.querySelector("form.add"),
    addImput = addForm.querySelector(".adding__input"),
    checkbox = addForm.querySelector("[type='checkbox']");

  // 6
  addForm.addEventListener("submit", (event) => {
    // отмена стандартного поведения браузера в форме
    event.preventDefault();

    let newFilm = addImput.value;
    const favorite = checkbox.checked;

    if (newFilm) {
      if (newFilm.length > 21) {
        newFilm = `${newFilm.substring(0, 18)}...`;
      }

      if (favorite) {
        console.log(`Сделать любимым ${newFilm}`);
      }

      movieDB.movies.push(newFilm);
      sortArr(movieDB.movies);

      createMoveList(movieDB.movies, filmsList);
    }

    event.target.reset();
  });

  // 1
  const deleteAdv = (arr) => {
    arr.forEach((item) => {
      item.remove();
    });
  };

  // 2-3
  const makeChanges = () => {
    genre.textContent = "драма";

    poster.style.backgroundImage = "url('img/bg.jpg')";
  };

  // 4
  const sortArr = (arr) => {
    arr.sort();
  };

  function createMoveList(films, parent) {
    parent.innerHTML = "";
    sortArr(films);

    films.forEach((film, i) => {
      parent.innerHTML += `
    <li class="promo__interactive-item">${i + 1}. ${film}
      <div class="delete"></div>
    </li>
    `;
    });

    document.querySelectorAll(".delete").forEach((btn, i) => {
      btn.addEventListener("click", () => {
        btn.parentElement.remove();
        movieDB.movies.splice(i, 1);

        createMoveList(films, parent);
      });
    });
  }

  deleteAdv(reclam);
  makeChanges();
  createMoveList(movieDB.movies, filmsList);
});
