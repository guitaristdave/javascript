const button = document.querySelector(".btn");
const qrCode = document.querySelector(".result img");
const form = document.querySelector(".content-form");
const textInput = document.querySelector("#text");
const refreshIcon = document.querySelector(".result svg");

const url = "https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=";

button.addEventListener("click", () => {
  const inputValue = document.querySelector("#text").value;
  if (inputValue !== "") {
    const picSource = url + inputValue;
    qrCode.src = picSource;
    form.classList.add("hidden");
    textInput.classList.add("hidden");
    button.classList.add("hidden");
    qrCode.classList.remove("hidden");
    refreshIcon.classList.remove("hidden");
  }
});

refreshIcon.addEventListener("click", () => location.reload());
