"use strict";

//1. Необходимо вывести сообщение в консоль "все теги прогрузились", когда все теги будут созданы браузером.
document.addEventListener("DOMContentLoaded", () =>
  console.log("Все теги прогрузились")
);

// 2. Вывести сообщение "страница загрузилась" после полной загрузки ресурсов страницы
window.addEventListener("load", () => console.log("страница загрузилась"));

// 3. При клике на какой-либо тег на странице в консоль должно выводиться сообщение наподобие:
// - Класс "super_element" присутствует в элементе "div".
// - сообщение должно определять присутствует или отсутствует класс "super_element"
// - у элемента, а также выводить в нижнем регистре верный тег в данной строке, по
// - которому был совершен клик.
// - Необходимо использовать делегирование.

document.body.addEventListener("click", (e) => {
  const target = e.target;

  const hasElement = target.classList.contains("super_element");
  const postfix = hasElement ? "присутствует" : "отсутствует";

  console.log(
    `Класс "super_element" ${postfix} в элементе "${target.tagName.toLowerCase()}".`
  );
});

//4. Сделайте, чтобы при наведении на textarea в консоли появлялось сообщение: "Вы навели на textarea."
const textarea = document.querySelector("textarea");
textarea.addEventListener("mouseover", () =>
  console.log("Вы навели на textarea.")
);

//5. Необходимо повесить событие клика на тег ul. В обработчике события в консоль необходимо выводить текст, который записан внутри элемента кнопки, по которой был произведен клик. Если клик был не по кнопке, то ничего выводить не нужно. Необходимо использовать делегирование.
const ul = document.querySelector("ul");

ul.addEventListener("click", (e) => {
  const target = e.target;

  if (target.tagName === "BUTTON") {
    console.log(target.textContent);
  }
});

//6. Вопрос: Почему в console.log пишется сначала текст из 5 задания и только потом выводится текст из 3 задания, если мы кликаем по кнопкам в ul? Ответ необходимо написать здесь же, под этим комментарием, своими словами.

const answer = 'Это происходит из-за асинхронности выполнения кода в браузере. Когда мы кликаем на кнопку внутри ul, сначала выполняется обработчик события для ul, и только потом для body. Таким образом, сообщение из обработчика ul попадает в консоль раньше, чем сообщение из обработчика body.'

//7. С помощью JS необходимо изменить цвет заднего фона каждого второго тега li.
const liElements = document.querySelectorAll("li");

liElements.forEach((li, index) => {
  if (index % 2) {
    li.style.backgroundColor = "gray";
  }
});
