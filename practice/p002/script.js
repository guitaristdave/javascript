"use strict";

// Задание 1:
// 1. Создать две переменные и спросить у пользователя значения для данных
// переменных. Одна переменная будет хранить имя пользователя, другая его возраст.
// 2. Вывести на экран текст:
// “Добро пожаловать, `имя`. Ваше количество оборотов вокруг солнца - `возраст`.”
// Тайминг: 15 минут.

// const username = prompt("Как вас зовут?");
// const age = Number(prompt("Сколько вам лет?"));

// const insertDiv = document.getElementById("content");
// const text = `Добро пожаловать, ${username}. Ваше количество оборотов вокруг солнца - ${age}`;
// insertDiv.innerHTML = text;

// Задание 2:

// 1. Найти остаток от деления переменных `a` на `b`, где a = 13, b = 5.
// 2. Что выведет на экран (Сначала проговорите, потом проверьте)
// ```
// let a;
// alert(a); undefined
// ```
// 3. Что выведет на экран (Сначала проговорите, потом проверьте)
// ```
// alert('abc' * 3); NaN
// ```
// 4. Что выведет на экран (Сначала проговорите, потом проверьте)
// ```
// alert(1 / 0); Infinity
// alert(-1 / 0); -Infinity
// ```
// 5. Что выведет на экран (Сначала проговорите, потом проверьте)
// ```
// alert('2' * '3'); 6
// ```

// Тайминг: 20 минут.

// function aDivB(a, b) {
//   return a % b;
// }

// const a = 13;
// const b = 5;

// console.log(aDivB(a, b));

// Задание 3:
// 1. Сознательно допустите ошибку в вашем коде. Убедитесь, что ошибка появляется
// в консоли. Определите, в какой строке кода случилась ошибка.
// 2. Необходимо вывести в консоль результат суммы переменных a = '2', b = '3'.
// 3. Пользователь с клавиатуры вводит 2 числа, необходимо в консоль вывести весь
// текст ниже, одной строкой с переносами строк:

// Сумма чисел равна “результат”.
// Разность чисел равна “результат”.
// Произведение чисел равно “результат”.
// Частное чисел равно “результат”.
// Остаток от деления чисел равен “результат”.

// Тайминг: 20 минут.

// const a = "2";
// const b = "3";
// console.log(a + b);

// const num1 = Number(prompt("Введите число 1"));
// const num2 = Number(prompt("Введите число 2"));

// console.log(`Сумма чисел равна: ${num1 + num2}\nРазность чисел равна: ${num1 - num2}
// Произведение чисел равно: ${num1 * num2}\nЧастное чисел равно: ${num1 / num2}
// Остаток от деления чисел равен: ${num1 % num2}`);

// 1. Не запуская код, определите, что выводится в консоль:

// ```
// console.log(String(true)); 'true'
// console.log('a' + true); 'atrue'
// console.log(Number(true)); 1
// console.log(true + 1); 2
// console.log(true + true); 2
// console.log(true - true); 0
// console.log(String(true) + Number(true)); 'true1'
// ```

// Тайминг: 20 минут.

// Задание 5:
// 1. Пользователь с клавиатуры вводит число. Необходимо создать условный
// оператор, который выведет одну из следующих строк в консоль:
// “Число больше 5”, “Число меньше 5”, либо “Число равно 5”.
// 2. Создайте две переменные test1 и test2. Проверьте, равны ли их значения и
// выведите соответствующее сообщение.
// 3. Пользовать с клавиатуры вводит 2 числа, необходимо определить, какие из двух
// чисел минимальное и вывести в консоль строку “Минимальное число `число`”.
// 4. Попросить пользователя ввести число, которое будет больше нуля и меньше 15.
// Если пользователь ввел значение, о котором его попросили, необходимо вывести
// сообщение “Спасибо за число `число`.”, в противном случае, вывести сообщение:
// “А вы, я смотрю, хулиганите! `число` - неверное значение.”

// Тайминг: 25 минут.

// const num = Number(prompt("Введите число"));
// if (num > 5) {
//   console.log("Число больше 5");
// } else if (num < 5) {
//   console.log("Число меньше 5");
// } else if (num === 5) {
//   console.log("Число равно 5");
// } else {
//   console.log("Вы ввели не число");
// }

// const test1 = 23;
// const test2 = 23;

// alert((test1 === test2) ? 'values are equal' : 'values are not equal');

// const num1 = Number(prompt('Введите 1 число'));
// const num2 = Number(prompt('Введите 2 число'));

// console.log((num1 > num2) ? `Минимальное число: ${num2}` : `Минимальное число: ${num1}`);

// console.log(`Минимальное число: ${Math.min(num1, num2)}`);

// const num = Number(prompt("Введите число больше нуля и меньше 15"));
// if (num > 0 && num < 15) {
//   console.log(`Спасибо за число ${num}`);
// } else {
//   console.log(`А вы, я смотрю, хулиганите! ${num} - неверное значение.`);
// }

// const smth = 2345;
// const lastNumber = smth % 10;
// const thirdNumber = Math.trunc(smth / 10) % 10;
// const secondNumber = Math.trunc(smth / 100) % 10;
// const firstNumber = Math.trunc(smth / 1000);

const msgCount = Number(prompt("Введите количество сообщений")); // msgCount > 0
const msgModule = Math.abs(msgCount);

// if (msgModule % 10 === 1 && msgModule % 100 !== 11) {
//   console.log(`Вы отправили ${msgCount} сообщение`);
// } else if (
//   [2, 3, 4].includes(msgModule % 10) &&
//   ![12, 13, 14].includes(msgModule % 100)
// ) {
//   console.log(`Вы отправили ${msgCount} сообщения`);
// } else {
//   console.log(`Вы отправили ${msgCount} сообщений`);
// }

if ([11, 12, 13, 14].includes(msgModule % 100)) {
  console.log(`Вы отправили ${msgCount} сообщений`);
} else if (msgModule % 10 === 1) {
  console.log(`Вы отправили ${msgCount} сообщение`);
} else if ([2, 3, 4].includes(msgModule % 10)) {
  console.log(`Вы отправили ${msgCount} сообщения`);
} else {
  console.log(`Вы отправили ${msgCount} сообщений`);
}