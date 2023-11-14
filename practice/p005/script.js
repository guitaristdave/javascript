// Задание 1:

// 1. Создайте объект с ключами от 1 до 7, в качестве значений содержащий имена
// дней недели. Выведите на экран “Вторник”.
// 2. Создайте объект user с ключами 'name', 'surname', 'age'. Выведите в консоль
// фамилию, имя и возраст одной строкой.
// 3. Добавьте в объект user свойство отчество, которое пользователь должен
// ввести с клавиатуры.
// 4. Удалите свойство surname.

// Тайминг: 20 минут.

// const weekDays = {
//   1: "Monday",
//   2: "Tuesday",
//   3: "Wednesday",
//   4: "Thursday",
//   5: "Friday",
//   6: "Saturday",
//   7: "Sunday",
// };

// console.log(weekDays[2]);

// const userData = {
//   name: "Freddie",
//   surname: "Mercury",
//   age: 45,
//   patronym: prompt('Введите отчество')
// };

// // console.log(`${userData.name} ${userData.surname} ${userData.age} ${userData.patronym}`);

// delete userData.surname

// console.log(userData);

// Задание 2:

// 1. Создайте два массива: первый с названиями дней недели, а второй - с их
// порядковыми номерами:
// `['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']`
// `[1, 2, 3, 4, 5, 6, 7]`
// 2. С помощью цикла создайте объект, ключами которого будут названия дней,
// а значениями - их номера.
// 3. Создайте объект: `{x: 1, y: 2, z: 3}`. Переберите этот объект циклом и
// возведите каждый элемент этого объекта в квадрат.

// const weekDays = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];
// const weekNums = [1, 2, 3, 4, 5, 6, 7];
// const result = {};

// for (let i = 0; i < weekDays.length; i++) {
//   result[weekDays[i]] = weekNums[i];
// }
// console.log(result);

// const points = {
//     x: 1,
//     y: 2,
//     z: 3,
// };

// for (const key in points) {
//     points[key] = points[key] ** 2
// }

// console.log(points);

// Задание 3:

// const obj = {
//   key1: {
//     key1: 1,
//     key2: 2,
//     key3: 3,
//   },
//   key2: {
//     key1: 4,
//     key2: 5,
//     key3: 6,
//     key4: {
//       hello: 0,
//     },
//   },
//   key55: 0,
//   key3: {
//     key1: 0,
//     key2: 0,
//     key3: 0,
//   },
// };

// Найдите сумму всех чисел, приведенного объекта.

// function sumValues(obj) {
//   let sum = 0;
//   for (const key in obj) {
//     if (obj[key] !== null && typeof obj[key] === "object") {
//       sum += sumValues(obj[key]);
//     } else {
//         sum += obj[key]
//     }
//   }
//   return sum
// }

// console.log(sumValues(obj));

// Задание 4:

// 1. Создайте объект riddle.
// 2. Добавьте свойства question со значениями(текст загадки) и
// answer (ответ на загадку).
// 3. Создайте метод askQuestion который спрашивает у пользователя вопрос
// question и сравнивает ответ с answer.
// В случае верного ответа, необходимо поздравить пользователя.
// В случае, если пользователь ответил неверно, необходимо подсказать,
// подсказок может быть несколько.
// Если пользователь ответил неверно после всех подсказок, то в консоль
// выводится текст: “вы проиграли”.

// const riddle = {
//   question: "Зимой и летом одним цветом",
//   answer: "ель",
//   clues: ["колючая", "растет в лесу", "НОВОГОДНЯЯ"],
//   askQuestion() {
//     let answ = prompt(`${this.question}?`);
//     if (answ === this.answer) {
//       console.log("Всё верно. Ура!");
//       return;
//     }
//     for (let i = 0; i < this.clues.length; i++) {
//       answ = prompt(`Неверно. Подсказка: ${this.clues[i]}`);
//       if (answ === this.answer) {
//         console.log("Всё верно. Ура!");
//         return;
//       }
//     }
//     console.log("Вы проиграли");
//   },
// };

// riddle.askQuestion();

// const arr = [8, 2, 2, 4, 5, 6, -2, 8, 9];
// const newArr = arr.map((num) => num + 2);
// console.log(arr);
// console.log(newArr);

// const evenArr = arr.filter((num) => num % 2 === 0);
// console.log(evenArr);

// arr.sort((num1, num2) => {
//   if (num1 > num2) {
//     return 1;
//   }
//   if (num1 === num2) {
//     return 0;
//   }
//   if (num1 < num2) {
//     return -1;
//   }
// });

// arr.sort((num1, num2) => num1 - num2)

// console.log(arr);

// const arr = [8, 7, 2, 4, 5, 6, -2, 1, 9];

// const oddSum = arr.reduce((acc, num) => {
//   if (num % 2) {
//     return acc + num;
//   } else {
//     return acc;
//   }
// }, 0);

// console.log(oddSum);

/*
Напишите функцию cakes(recipe, ingredients), которая принимает рецепт (объект)
и доступные ингредиенты (также объект) и возвращает максимальное количество
пирожных, которое можно испечь (целое число). Для простоты не существует единиц
измерения количества (например, 1 фунт муки или 200 г сахара - это просто 1 или
200). Ингредиенты, которых нет в предметах, можно рассматривать как 0.
*/

// function cakes(recipe, ingredients) {
//   let result = [];

//   for (const key in recipe) {
//     if (!ingredients[key]) {
//       return 0;
//     }
//       result.push(Math.trunc(ingredients[key] / recipe[key]));
//   }

//   return Math.min(...result);
// }

// console.log(
//   cakes(
//     { flour: 500, sugar: 200, eggs: 1 },
//     { flour: 1200, sugar: 1200, eggs: 5, milk: 200 }
//   )
// ); // 2

// console.log(
//   cakes(
//     { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 },
//     { sugar: 500, flour: 2000, milk: 2000 }
//   )
// ); // 0

// Функция func принимает массив чисел, необходимо реализовать функцию так, чтобы
// она вернула количество элементов переданного массива, которые отличны от
// наибольшего элемента не более чем на 10%.

function func(arr) {
  if (arr.length === 0) {
    return [];
  }

  const maxElement = Math.max(...arr);
  const threshold = 0.1 * Math.abs(maxElement);

  const result = arr.filter((element) => Math.abs(maxElement - element) < threshold && maxElement !== element);
  return result;
}

console.log(func([5, 88, 95, 100, 77, 21, 92])); // [95, 92]
console.log(func([2, 13, 55, 29, 19, 5, -5])); // []
