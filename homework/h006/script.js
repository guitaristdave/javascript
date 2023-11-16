"use strict";

// 1. Найти по id, используя getElementById, элемент с id равным "super_link" и вывести этот элемент в консоль.
const superLink = document.getElementById("super_link");
console.log(superLink);

// 2. Внутри всех элементов на странице, которые имеют класс "card-link", поменяйте текст внутри элемента на "ссылка".
const cardLinks = document.querySelectorAll(".card-link");
cardLinks.forEach((link) => {
  link.textContent = "ссылка";
});

// 3. Найти все элементы на странице с классом "card-link", которые лежат в элементе с классом "card-body" и вывести полученную коллекцию в консоль.
const cardBodyLinks = document.querySelectorAll(".card-body .card-link");
console.log(cardBodyLinks);

// 4. Найти первый попавшийся элемент на странице у которого есть атрибут data-number со значением 50 и вывести его в консоль.
const dataNumber = document.querySelector('[data-number="50"]');
console.log(dataNumber);

// 5. Вывести содержимое тега title в консоль.
console.log(document.title);

// 6. Получить элемент с классом "card-title" и вывести его родительский узел в консоль.
const cardTitle = document.getElementsByClassName("card-title")[0];
console.log(cardTitle.parentNode);

// 7. Создать тег p, заполнить его текстом "Привет" и добавить его в начало элемента с классом "card".
const newParagraph = document.createElement("p");
newParagraph.textContent = "Привет";
const cardBlock = document.getElementsByClassName("card")[0];
cardBlock.insertBefore(newParagraph, cardBlock.firstChild);

//8. Удалить тег h6 на странице.
const h6Element = document.getElementsByTagName("h6")[0];
h6Element.remove();
