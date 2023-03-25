"use strict";
// обработчик ошибок

try {
    console.log("Normal");
    console.log(s);
} catch (error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
}
