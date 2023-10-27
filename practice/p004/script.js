"use strict";
// Задание 1:

// 1. Создайте массив с элементами 1, 2, 3.
// Выведите на экран каждый из этих элементов.
// 2. Создайте массив с произвольными элементами.
// Выведите на экран количество элементов в этом массиве.
// 3. Создайте массив с элементами 'a', 'b', 'c'. Запишите вместо первого элемента
// число 1, вместо второго - 2, вместо третьего - 3.

// Тайминг: 20 минут.

// const array = [1, 2, 3];

// console.log(array[0]);
// console.log(array[1]);
// console.log(array[2]);

// console.log(array.length);

// const arr = ['a', 'b', 'c'];
// arr[0] = 1;
// arr[1] = 2;
// arr[2] = 3;

// Задание 2:

// 1. Создайте массив с элементами 1, 2 и 3. С помощью оператора ++ увеличьте
// каждый элемент массива на единицу.
// 2. Узнайте длину следующего массива и объясните почему такое значение:
// ```
// const arr = [];
// arr[3] = 'a';
// arr[8] = 'b';
// ```
// 3. Пусть дан такой массив: `[1, 2, 3]`. Добавьте ему в конец элементы 4 и 5.
// 4. Создайте произвольный массив из 5 элементов, удалите из него два элемента.
// Проверьте, какое станет значение свойства length после этого.

// Тайминг: 15 минут.

// const arr = [1, 2, 3];

// for (const key in arr) {
//   arr[key]++;
// }

// const array = [1, 2, 3];
// array.push(4, 5);

// array.pop();
// array.pop();
// console.log(array.length)

// 1. С помощью цикла for выведите в консоль числа от 11 до 33.
// 2. С помощью цикла for выведите в консоль нечетные числа в промежутке от 1
// до 100 включительно.
// 3. С помощью цикла for выведите в консоль числа от 100 до 0.
// 4. Создать переменную с заданным числом. Умножайте число на 3 столько раз,
// пока результат умножения не станет больше 1000. Какое число получится?
// Посчитайте количество итераций, необходимых для этого.

// Тайминг: 25 минут.

// for (let index = 11; index < 34; index++) {
//   console.log(index);
// }

// for (let index = 1; index < 100; index += 2) {
//   console.log(index);
// }

// for (let index = 100; index >= 0; index--) {
//   console.log(index);
// }

// let num = 4;
// let counter = 0;

// while (num <= 1000) {
//   num *= 3;
//   counter++;
// }

// console.log(num);
// console.log(counter);

// Задание 4:

// 1. Создать массив `[2, 5, 9, 15, 1, 4]`.
// Выведите в консоль те элементы массива, которые больше 3-х, но меньше 10.
// 2. Найдите сумму четных чисел от 2 до 100.
// 3. Создать массив `[2, 5, 9, 3, 1, 4]`.
// Найдите сумму элементов этого массива.
// 4. С помощью цикла сформируйте строку '-1-2-3-4-5-6-7-8-9-'.
// 5. Создать массив `[2, 5, 9, 0, 3, 1, 4]`.
// Запустите цикл, который будет по очереди выводить элементы этого массива в
// консоль до тех пор, пока не встретится элемент со значением 0. После этого
// цикл должен завершить свою работу.

// Тайминг: 25 минут.

// const array = [2, 5, 9, 15, 1, 4];
//
// for (const iterator of array) {
//     if (iterator > 3 && iterator < 10) {
//         console.log(iterator);
//     }
// }
//
// let sum = 0;
// for (let i = 2; i <= 100; i += 2) {
//     sum += i;
// }
//
// console.log(sum);
//
// let arrSum = 0;
// const arr = [2, 5, 9, 3, 1, 4];
// for (const iterator of arr) {
//     arrSum += iterator;
// }
//
// let result = '-';
// for (let i = 1; i < 10; i++) {
//     result += `${i}-`;
// }
// console.log(result);
//
// const anotherArray = [2, 5, 9, 0, 3, 1, 4];
//
// for (const iterator of anotherArray) {
//     if (iterator === 0) break;
//     console.log(iterator);
// }
//
//
// for (let i = 0; i < anotherArray.length && anotherArray[i] !== 0; i++) {
//     console.log(anotherArray[i]);
// }
//
//
//
//


// Задание 5:
//
// 1. Создать массив из 10 случайных чисел от 0 до 100 включительно.
//     Наобходимо вывести в консоль все числа, которые делятся и на 2, и на 3.
// 2. Дан массив: `[1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3]`. Подсчитайте количество
// цифр 3 в этом массиве.
// 4. Дан массив: `[1, 2, 3, 4, 5]`.
//     С помощью метода splice преобразуйте массив в следующий: [1, 4, 5]
//
// Тайминг: 25 минут.




// function getNumber() {
//     return Math.ceil(Math.random() * 100);
// }
//
// const array = [];
//
// for (let i = 0; i < 10; i++) {
//     array.push(getNumber());
// }
//
// console.log(array.toString());
//
// for (const number of array) {
//     if (!(number % 6)) {
//         console.log(number);
//     }
// }


const arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
let counter = 0;

for (const number of arr) {
    if (number === 3) counter++;
}
console.log(arr.toString())
console.log(counter);


// const newArr = [1, 2, 3, 4, 5];
// console.log(newArr);
// newArr.splice(1, 2)
// console.log(newArr);

// console.log(arr.reduce((acc, num) => {
//     if (num === 3) {
//         return acc + 1;
//     }
//     return acc;
// }, 0
// ))


const test = [1, 2, 3, 4, 5];
console.log(test.reduce((acc, num) => {
    return acc + num;
}, 0
))