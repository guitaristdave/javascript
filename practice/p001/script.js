"use strict";

console.log("Текст из script.js!");

// Задание 2:
// 1. Создайте переменную `num` и присвойте ей значение `123`. Выведите значение этой переменной в консоль.
// 2. Создайте переменную `а` и присвойте ей значение `5`, переопределите переменную `а` на значение `7`, выведите переменную `а` в консоль.
// 3. Создайте переменную `b`. Запишите в нее сумму чисел `1`, `2` и `3`. С помощью функции `console.log` выведите в консоль содержимое переменной `b`.
// 4. Создайте два вида комментариев в вашем коде, добавьте в них произвольный текст.
// Тайминг: 20 минут.
console.log("");
console.log("Задание 3");
const num = 123;
console.log(`num: ${num}`);

let a = 5;
a = 7;
console.log(`a: ${a}`);

const b = 1 + 2 + 3;
console.log(`b: ${b}`);

console.log("");
console.log("Задание 3");
// Задание 3:
// 1. Создайте две переменные, одна будет хранить ваш возраст (девушкам всегда 18), а другая переменная будет хранить текущий год (все созданные переменные должны быть логично названы).
// - Создайте переменную суммы и присвойте сумму чисел из двух переменных.
// - Создайте переменную разности и присвойте разность текущего года и вашего возраста.
// - Создайте переменную произведения и присвойте произведение чисел двух переменных.
// - Создайте переменную частного и присвойте деление чисел текущего года к вашему возрасту.

const age = 30;
const currentYear = 2023;
const sum = age + currentYear;
const difference = currentYear - age;
const multiply = currentYear * age;
const divide = Math.floor(currentYear / age);

// 2. Выведите в консоль все созданные переменные.

console.log(`age: ${age}`);
console.log(`currentYear: ${currentYear}`);
console.log(`sum: ${sum}`);
console.log(`difference: ${difference}`);
console.log(`multiply: ${multiply}`);
console.log(`divide: ${divide}`);

// 3. Сложите все созданные переменные и выведите результат в консоль.

const total = age + currentYear + sum + difference + multiply + divide;
console.log(`total sum: ${total}`);

// Тайминг: 20 минут.

// Задание 4:
// Не запуская код, определите, что отобразится в консоли:
// `let a = 5 + 5 * 3 + 3;` 23
// Не запуская код, определите, что отобразится в консоли:
// `let b = 8 / 2 + 2;` 6
// Не запуская код, определите, что отобразится в консоли:
// `let c = (2 + 3) * (2 + 3);` 25
// Не запуская код, определите, что отобразится в консоли:
// `let d = (2 + 3) * 2 + 3;` 13
// Не запуская код, определите, что отобразится в консоли:
// `let e = (2 * 8) / 4;` 4
// Не запуская код, определите, что отобразится в консоли:
// `let f = 2 * (8 / 4);` 4
// Тайминг: 20 минут.

// Задание 5:
// 1. Запишите в переменную `a` число `0.1`, а в переменную `b` - число `0.2`. Найдите сумму значений этих переменных и выведите ее на экран.
// 2. Создайте переменную `c`, запишите в нее какое-нибудь положительное или отрицательное число. Выведите на экран это число с обратным знаком.
// Тайминг: 5 минут.

console.log("");
console.log("Задание 5");

const x = 0.1;
const y = 0.2;
const z = 12;

console.log(Math.trunc((x + y) * 10) / 10);
console.log(-z);

console.log(Math.round(12.542));
console.log(Math.round(12.542));
console.log((x + y).toFixed(2));

const number = "234";
console.log(typeof number)
console.log(typeof Number.parseInt(number));

console.log(Number(number))
