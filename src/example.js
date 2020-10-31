"use strict";
/*
* Работа с простыми типами
* Напиши тип функции, конкатенирующей две строки
*/
/* 1й вариант */
var concat = function (firstText, secondText) {
    return firstText + " + " + secondText;
};
concat('Hello ', 'World');
/* 2й вариант с женериками */
var arrayWords = ['Hello ', 'World'];
var concat2 = function (array) {
    return array.join();
};
console.log(concat('Hello ', 'World')); // "Hello ,World"
console.log(concat2(arrayWords)); // "Hello ,World"
var MyHometask = {
    howIDoIt: "I Do It Wel",
    simeArray: ["string one", "string two", 42],
    withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],
};
console.log(MyHometask);
var TsArray = [1, 2, 3, 4];
var fn = function (a, b) { return a + b; };
console.log(TsArray.reduce(fn)); // 10
//# sourceMappingURL=example.js.map