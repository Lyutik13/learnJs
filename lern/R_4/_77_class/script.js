"use strict";

class Rectangle {
    constructor(heigt, width) {
        this.heigt = heigt;
        this.width = width;
    }

    calcArea() {
        return this.heigt * this.width;
    }
}

// создание потомка на основе родителя
const square = new Rectangle(10, 10);
const long = new Rectangle(200, 10);

// console.log(square);
// console.log(square.calcArea());
// console.log(long.calcArea());

// extends наследование класса от родителя
class ColorRectangleWithText extends Rectangle {
    constructor(heigt, width, text, bgColor) {
        // super метод вызова параметров родителя
        super(heigt, width);
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps() {
        console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`);
    }
}

const div = new ColorRectangleWithText(25, 10, "Hello", "red");

// обьявляем
div.showMyProps();

console.log(div.calcArea());
