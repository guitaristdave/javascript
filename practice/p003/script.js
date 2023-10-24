"use strict";

// Задание 1:

// 1. Написать функцию, которая принимает, имя, фамилия и возраст. Функция должна
// вывести в консоль строку:
// "Привет, `имя` `фамилия`. Вы уже большой, вам `возраст`."
// 2. Создайте функцию, которая принимает число, а возвращает квадрат переданного
// ей числа.
// 3. Создайте функцию, которая принимает число.
// Функция должна вывести в консоль '+++', если число положительное, либо '---',
// если число было отрицательное. В случае, если было передано не число, либо ноль,
// функция ничего не должна выводить.

// Тайминг: 20 минут.

// greetings("Давид", "Акунц", 30);

// function greetings(name, lastname, age) {
//   console.log(`Привет, ${name} ${lastname}. Вы уже большой, вам ${age}.`);
// }

// const numSquare = function (num) {
//   return num ** 2;
// };

// console.log(numSquare(3));

// function numAnalyze(num) {
//   if (num > 0) {
//     console.log("+++");
//   } else if (num < 0) {
//     console.log("---");
//   }
// }

// numAnalyze(2);
// numAnalyze(-2);
// numAnalyze(0);
// numAnalyze("Hello");

// Задание 2:
// 1. Создайте функцию, которая параметрами принимает 3 числа и выводит в
// консоль сумму этих чисел.
// Создайте три переменные, со случайными значениями и продемонстрируйте работу
// данной функции.
// 3. Дан код:

// ```
// func(2);
// func(3);
// func();

// function func(num = 5) {
//   console.log(num * num);
// }
// ```

// Расскажите, каким будет результат каждого из вызовов функции.

// Тайминг: 20 минут.

// const tripleSum = (n1, n2, n3) => {
//   console.log(n1 + n2 + n3);
// };

// const num1 = Math.trunc(Math.random() * 10);
// const num2 = Math.trunc(Math.random() * 10);
// const num3 = Math.trunc(Math.random() * 10);

// tripleSum(num1, num2, num3);

// function triple(n1, n2, n3) {
//   console.log(n1 + n2 + n3);
// }

// triple(2, 3, 4);

// const tripleSum = (n1, n2, n3) => n1 + n2 + n3;

// const num1 = Math.trunc(Math.random() * 10);
// const num2 = Math.trunc(Math.random() * 10);
// const num3 = Math.trunc(Math.random() * 10);

// console.log(tripleSum(num1, num2, num3));

// const tripleSum = () => num1 + num2 + num3;

// Задание 3:

// 1. Создайте функцию, которая принимает число, а возвращает квадратный корень
// переданного числа.
// С помощью созданной функции найдите сумму корней чисел 3 и 4 и выведите данную
// сумму в консоль.
// 2. Создайте функцию, которая находит минимальное число из 2х переданных
// аргументов функции и вернет найденное значение.

// Тайминг: 20 минут.

// function sqrt(num) {
//   return Math.sqrt(num);
// }

// console.log(sqrt(3) + sqrt(4));

// function findMin(num1, num2) {
//   if (num1 < num2) {
//     return num1;
//   }
//   return num2;
// }

// function anotherMin(num1, num2) {
//   return Math.min(num1, num2);
// }

// function yetAnotherMin(num1, num2) {
//     return num1 < num2 ? num1 : num2;
// }

// Задание 4:

// 1. Создайте функцию, которая принимает параметром число от 1 до 7, а возвращает
// день недели на русском языке.
// 2. Создайте функцию, которой мы передаем имя и она возвращает приветствие в
// зависимости от времени суток (утро, день, вечер, ночь), например:
// "Добрый день, Иван." или "Доброй ночи, Иван.".

// Тайминг: 30 минут.

// function weekDay(dayNum) {
//   switch (dayNum) {
//     case 1:
//       return "Monday";
//     case 2:
//       return "Tuesday";
//     case 3:
//       return "Wednesday";
//     case 4:
//       return "Thursday";
//     case 5:
//       return "Friday";
//     case 6:
//       return "Saturday";
//     case 7:
//       return "Sunday";
//     default:
//       return "Error. Invalid weekday";
//   }
// }

// console.log(weekDay(2));
// console.log(weekDay(0));
// console.log(weekDay("sdf"));

// function greetings(username) {
//   const hour = new Date().getHours();
//   if (hour < 6) {
//     return `Доброй ночи, ${username}`;
//   }
//   if (hour < 12) {
//     return `Доброе утро, ${username}`;
//   }
//   if (hour < 18) {
//     return `Добрый день, ${username}`;
//   }
//   return `Добрый вечер, ${username}`;
// }

// console.log(greetings("Давид"));

// Задача 3: перепишите код, используя конструкцию switch-case, запрашивая продукт через диалоговое окно.

// <script>
// let product = "бананы";

// if (product == "мандарины") {
//   alert('Мандарины стоят 100 руб/кг.');
// } else if (product == "бананы") {
//   alert('Бананы и груши стоят 70 руб/кг.');
// } else if (product == "груши") {
//   alert('Бананы и груши стоят 70 руб/кг.');
// } else {
//   alert('Нет такого продукта.');
// }
// </script>

// const product = prompt("Какой продукт?").toLowerCase();

// switch (product) {
//   case "мандарины":
//     alert("Мандарины стоят 100 руб/кг.");
//     break;
//   case "бананы":
//   case "груши":
//     alert("Бананы и груши стоят 70 руб/кг.");
//     break;
//   default:
//     alert("Нет такого продукта.");
// }

// const num = 57;
// console.log(57 * 0.2);
// console.log((57 / 100) * 20);

// /**
//  * Функция возводит число в квадрат
//  * @param {number} num
//  * @returns {number} число в квадрате
//  */
// function anyFunc(num) {
//   return num ** 2;
// }

// console.log(anyFunc('sdf'));

// function pow(num, grade) {
//   if (grade === 0) {
//     return 1;
//   }
//   return num * pow(num, grade - 1);
// }

// console.log(pow(2, 100));

// Реализовать функцию round5, которой передается целое число, функция должна
// возвращать ближайшее целое число к тому что было передано, без остатка делящееся
// на 5.

// function round5(val) {
//   const remainder = Math.abs(val) % 5;
//   if (val > 0) {
//     if (remainder <= 2.5) {
//       return val - remainder;
//     }
//     return val + (5 - remainder);
//   }
//   if (remainder <= 2.5) {
//     return val + remainder;
//   }
//   return val - (5 - remainder);
// }

// function round5(val) {
//     const r = Math.abs(val) % 5;
//     if (r <= 2.5) {
//         return val - Math.sign(val)*r;
//     }
//     return val + Math.sign(val)*(5 - r);
// }

// console.log(round5(0)); // 0
// console.log(round5(2)); // 0
// console.log(round5(3)); // 5
// console.log(round5(11)); // 10
// console.log(round5(14)); // 15
// console.log(round5(50)); // 50
// console.log(round5(-2)); // 0
// console.log(round5(-3)); // -5

// Напишите программу, которая выводит на экран числа от 1 до 100. При этом вместо
// чисел, кратных трем, программа должна выводить слово «Fizz», а вместо чисел,
// кратных пяти — слово «Buzz». Если число кратно и 3, и 5, то программа должна
// выводить слово «FizzBuzz»

// function fizzBuzz(num) {
//   if (!(num % 15)) {
//     console.log("FizzBuzz");
//   } else if (!(num % 5)) {
//     console.log("Buzz");
//   } else if (!(num % 3)) {
//     console.log("Fizz");
//   } else {
//     console.log(num);
//   }
// }

// fizzBuzz(99)


// Напишите функцию, которая вычисляет наименьшее представимое число с плавающей точкой, следующее после заданного целого n. Указание: каково наименьшее представимое число после 1? А после 2? А после 3? А  после 4? Можете обратиться к  какой-нибудь статье, описывающей представление чисел с  плавающей точкой в  стандарте IEEE. Дополнительные баллы, если сможете получить результат для произвольного числа.

function nextFloatAfterInteger(n) {
    if (n < 0) {
      return "There is no next representable number for negative integers.";
    }
  
    const buffer = new ArrayBuffer(8);
    const floatArray = new Float64Array(buffer);
    
    // Convert the integer to its IEEE 754 representation
    const signBit = 0;
    const exponentBits = 1023; // Bias for double precision
    const mantissaBits = n * Math.pow(2, -52);
    
    const ieee754 = (signBit << 63) | (exponentBits << 52) | mantissaBits;
    
    floatArray[0] = ieee754;
  
    // Increment the bit pattern to get the next representable number
    floatArray[0] += Math.pow(2, -52);
  
    return floatArray[0];
  }
  
  // Пример использования
  const n = 1;
  const nextRepresentable = nextFloatAfterInteger(n);
  console.log(`The next representable number after ${n} is ${nextRepresentable}`);
  
//   Эта функция также конвертирует целое число n в его представление в формате IEEE 754 двойной точности, затем увеличивает мантиссу наименьшей значащей цифры на 2^(-52) и возвращает следующее представимое число с плавающей точкой.

// Представимое число в контексте чисел с плавающей точкой означает число, которое можно точно представить в данной системе с плавающей точкой. Системы с плавающей точкой, такие как стандарт IEEE 754, представляют вещественные числа в виде набора битов, состоящего из знака, экспоненты и мантиссы.

// Однако не все вещественные числа могут быть представлены точно в такой системе из-за ограниченной разрядности (например, 32 бита или 64 бита) и особенностей представления. Некоторые числа могут быть приближенно представлены, и в этом случае разница между фактическим числом и его ближайшим представимым значением называется ошибкой представления.

// Наименьшее представимое положительное число (positive representable number) в системе с плавающей точкой - это наименьшее положительное число, которое может быть точно представлено в этой системе. Это число зависит от разрядности (например, одинарной или двойной точности) и параметров представления, таких как смещение экспоненты (bias). В предыдущем ответе была приведена функция для вычисления наименьшего представимого числа с плавающей точкой в двойной точности в стандарте IEEE 754 после заданного целого числа.