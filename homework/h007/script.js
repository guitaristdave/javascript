"use strict";

//1. Ко всем элементам, имеющим класс "dropdown-item" добавить еще один класс "super-dropdown", необходимо использовать методы forEach и querySelectorAll и свойство classList у элементов.
let dropdownItems = document.querySelectorAll(".dropdown-item");
dropdownItems.forEach((element) => {
  element.classList.add("super-dropdown");
});

// 2. У элемента с классом btn необходимо убрать класс "btn-secondary", если он присутствует у этого элемента, либо добавить, если такого класса у элемента не было.
let button = document.querySelector(".btn");
if (button.classList.contains("btn-secondary")) {
  button.classList.remove("btn-secondary");
} else {
  button.classList.add("btn-secondary");
}

// 3. Необходимо удалить класс "dropdown-menu" у элемента, у которого присутствует класс "menu".
let menuElement = document.querySelector(".menu");
menuElement.classList.remove("dropdown-menu");

// 4. Используя метод insertAdjacentHTML добавьте после div'a с классом "dropdown" следующую разметку: `<a href="#">link</a>`
const dropdownElement = document.querySelector("div.dropdown");
dropdownElement.insertAdjacentHTML("afterend", '<a href="#">link</a>');

//5. У элемента с id "dropdownMenuButton" замените id на "superDropdown".
let menuButton = document.querySelector("#dropdownMenuButton");
menuButton.setAttribute("id", "superDropdown");

//6. Добавьте атрибут data-dd со значением 3 элементу у которого существует атрибут "aria-labelledby" равный "dropdownMenuButton" используя dataset.
const elementWithAriaLabelledBy = document.querySelector('[aria-labelledby="dropdownMenuButton"]');
elementWithAriaLabelledBy.dataset.dd = 3;


//7. Удалите атрибут type у элемента с классом "dropdown-toggle".
let dropdownToggleElement = document.querySelector(".dropdown-toggle");
dropdownToggleElement.removeAttribute("type");
