"use strict";

const arr = [1, 2, 3, 6, 8];

// delete end elemeut
arr.pop();

// add element in end
arr.push(10);

console.log(arr);

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

//  for of
for (let value of arr) {
  console.log(value);
}

//вложеныя функция forEach
arr.forEach(function (item, i, arr) {
  console.log(`${i}: ${item} внутри масива ${arr}`);
});

// ///////////////////////
const video = ["youtube", "rutube", "hoholz"],
  blogs = ["wordpress", "lorem", "hahaha"],
  internet = [...video, ...blogs, "vk", "fb"];

console.log(internet);
