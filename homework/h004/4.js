"use strict";

/*
Необязательное задание. 
Необходимо вывести горку в консоль (используя цикл for), как показано на
рисунке, только у вашей горки должно быть 20 рядов, а не 5:

x
xx
xxx
xxxx
xxxxx
*/

/**
 * Функция принимает символ sign и выводит в консоль "елочку" из rows рядов
 * @param {any} sign
 * @param {number} rows
 */
function drawTree(sign, rows) {
    for (let i = 1; i <= rows; i++) {
        console.log(' '.repeat(rows - i) + sign.repeat(2 * i - 1));
    }
}


drawTree('*', 10) // звездочки для большей симметрии)