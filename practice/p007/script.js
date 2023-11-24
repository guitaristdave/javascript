// В html создать кнопку button
// После загрузки страницы вывести в консоль текст “страница загрузилась”
// Добавить событие onclick которое выводит в консоль текст “событие onclick”
// Добавить событие addEventListener которое выводит в консоль текст “событие addEventListener”

// const button = document.querySelector("button");

// window.onload = () => console.log("страница загрузилась");

// button.onclick = () => console.log("событие onclick");
// button.addEventListener("click", () => console.log("событие addEventListener"));

// Создать в html три кнопки button с нумерацией (1, 2, 3 соответственно)
// Добавить клик на кнопку , чтобы в консоль выводилась именно та кнопка на которую мы нажали
// Добавить кнопку button с текстом 4, которая считает сколько раз на нее нажали и количество нажатий на эту кнопку выводит в консоль
// Создать кнопку button с текстом 5, При клике на которую, меняется текст данной кнопки на “Вы нажали на эту кнопку”

// let button1 = document.querySelector(".btn1");
// let button2 = document.querySelector(".btn2");
// let button3 = document.querySelector(".btn3");
// let button4 = document.querySelector(".btn4");
// let button5 = document.querySelector(".btn5");

// let counter = 0;

// let func = (event) => {
//   console.log(event.target);
// };

// button1.addEventListener("click", func);
// button2.addEventListener("click", func);
// button3.addEventListener("click", func);

// button4.addEventListener("click", () => {
//   console.log(++counter);
// });

// button5.addEventListener("click", () => {
//   if (button5.textContent === "Вы нажали на эту кнопку") {
//     button5.textContent = "Button 5";
//   } else {
//     button5.innerHTML = "Вы нажали на эту кнопку";
//   }
// });

// Создать кнопку, которая добавляем заголовок h1 с текстом, “Новый заголовок, данный элемент нужно расположить после кнопки
// Создать вторую кнопку, которая будет удалять созданный заголовок h1
// Создать третью кнопку, при наведении на которую в консоль будет выводиться текст “вы навели на данную кнопку” , как только вы убираем курсор мыши с кнопки, в консоли должен появиться текст “Наведения на кнопку больше нет”
// const container = document.querySelector(".container");
// const buttonCreate = document.querySelector(".btn");
// const buttonDelete = document.querySelector(".btn2");

// buttonCreate.addEventListener("click", () => {
//   let title = document.createElement("h1");
//   title.textContent = "TITLE";
//   container.appendChild(title);
// });

// buttonDelete.addEventListener("click", () => {
//   let title = container.querySelectorAll("h1");
//   if (title.length) {
//     title[title.length - 1].remove();
//   }
// });

// const button = document.querySelector(".btn3");

// button.addEventListener("mouseover", () =>
//   console.log("вы навели на данную кнопку")
// );

// button.addEventListener("mouseout", () =>
//   console.log("Наведения на кнопку больше нет")
// );

// Создать в html список состоящий из 3-х произвольных элементов li
// Нужно создать кнопку которая будет добавлять элементы списка с текстом “новый элемент списка”
// Создать кнопку, которая будет удалять первый элемент из созданного списка
// Создать кнопку, при клике на которую ей добавляется класс “click”

// const ul = document.querySelector("ul");

// const buttonAdd = document.querySelector(".btn1");
// const buttonDel = document.querySelector(".btn2");
// const buttonAddClass = document.querySelector(".btn3");

// buttonAdd.addEventListener("click", () => {
//   let li = document.createElement("li");
//   li.textContent = "more list";
//   ul.appendChild(li);
// });

// buttonDel.addEventListener("click", () => {
//   let liEls = document.querySelectorAll("li");
//   if (liEls.length) {
//     liEls[0].remove();
//   }
// });

// buttonAddClass.addEventListener("click", () =>
//   buttonAddClass.classList.add("click")
// );

