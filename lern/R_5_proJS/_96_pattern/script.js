"use strict";

// new RegExp("pattern", "flags");
// /pattern/flags

const ans = prompt("enter you number pl");

const reg = /\d/gi;

console.log(ans.match(reg));

// поиск по классам
// \d - числа
// \w - слова
// \s - пробелы

// \D не числа
// \W не буквы

// 3-и флага
// i - вне зависимости от регистра
// g - несколько значений
// m - многострочный режим

// console.log(ann.search(reg));
// console.log(ann.match(reg));

// const pass = prompt("Password");

// console.log(pass.replace(/./g, "*"));

// console.log("12-34-56".replace(/-/g, ":"));
