"use strict";
(() => {
    class Rectangle {
        constructor(width, height) {
            this._width = width;
            this._height = height;
        }
        get area() {
            return this._width * this._height;
        }
    }
    const rectangle = new Rectangle(5, 10);
    console.log(rectangle.area);
})();
