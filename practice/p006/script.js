// Дано поле ввода и кнопка отправить, необходим реализовать функционал, если пользователь нажимает на кнопку отправить, а поле ввода пустое, то под полем ввода и кнопкой должен появиться заголовок h2 с текстом вы не заполнили поле ввода
// Цвет у рамки сделать красным

const input = document.querySelector("form input[type='text']");
const button = document.querySelector("button.btn");

let delButton = document.createElement("button");
delButton.innerHTML = "Delete h2";
button.parentElement.appendChild(delButton);
let counter = 0;

button.addEventListener("click", () => {
  if (!input.value) {
    const h2 = document.createElement("h2");
    h2.innerHTML = "Some Text " + counter;
    button.parentElement.appendChild(h2);
    input.style.border = "1px solid red";
    counter++;
  }
});

delButton.addEventListener("click", () => {
  let h2 = document.querySelectorAll("form h2");
  if (h2.length > 0) {
    h2[h2.length - 1].remove();
  }
});
