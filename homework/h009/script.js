"use strict";

// 1. задание

let input = document.querySelector("#from");
let inputInspector = document.querySelector("span");
input.addEventListener("input", () => {
  inputInspector.innerHTML = input.value;
});

//2 задание

const button = document.querySelector(".messageBtn");
let message = document.querySelector(".message");

button.addEventListener("click", () => {
  message.classList.add("animate_animated", "animate_fadeInLeftBig");
  message.style.visibility = "visible";
});

// 3. задание

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  // Проверка заполненности полей
  const formInputs = form.querySelectorAll(".form-control");
  let formIsValid = true;

  formInputs.forEach(function (input) {
    if (input.value.trim() === "") {
      input.classList.add("error");
      formIsValid = false;
    } else {
      input.classList.remove("error");
    }
  });

  // Отмена отправки формы, если не все поля заполнены
  if (!formIsValid) {
    e.preventDefault();
  }
});

// Обработчики ввода для полей формы
const formInputs = form.querySelectorAll(".form-control");

formInputs.forEach( (input) => {
  input.addEventListener("input", function () {
    if (input.value.trim() === "") {
      input.classList.add("error");
    } else {
      input.classList.remove("error");
    }
  });
});
