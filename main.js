/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/popover/popover.js
function Popover(popoverСontentObj) {
  const container = document.querySelectorAll(".form"); //контейнер с формами
  const popoverDiv = document.createElement("div"); // создаем div для тела поповера
  const popoverTitle = document.createElement("h3"); // создаем заголовок для тела поповера
  const popoverContent = document.createElement("p"); // создаем текст для тела поповера
  const body = document.querySelector("body");
  container.forEach(element => {
    element.addEventListener("focus", event => {
      event.preventDefault();
      const {
        target
      } = event;
      const formTrg = target.closest(".form");
      popoverTitle.classList.add("popoverTitle");
      popoverTitle.textContent = popoverСontentObj[formTrg.getAttribute("name")].title;
      popoverDiv.prepend(popoverTitle);
      popoverContent.classList.add("popoverText");
      popoverContent.textContent = popoverСontentObj[formTrg.getAttribute("name")].content;
      popoverDiv.append(popoverContent);
      if (popoverDiv.classList.contains("popover")) {
        popoverDiv.remove;
      } else {
        popoverDiv.classList.add("popover");
      }
      formTrg.before(popoverDiv);
    });
  });
  body.addEventListener("click", event => {
    const element = event.target;
    if (element.id === "body") {
      popoverDiv.classList.add("hidden");
    } else {
      popoverDiv.classList.remove("hidden");
    }
  });
}
;// CONCATENATED MODULE: ./src/js/app.js


//Объект с содержимым для поповеров
const popoverСontentObj = {
  text: {
    title: "text",
    content: "Этот тип применяется для ввода текста"
  },
  range: {
    title: "range",
    content: "Этот тип применяется для вывода ползунка"
  },
  color: {
    title: "color",
    content: "Этот тип применяется для вывода палитры цвета"
  },
  radio: {
    title: "radio",
    content: "Этот тип применяется для вывода перключателя"
  },
  button: {
    title: "button",
    content: "Этот тип применяется для отображения кнопки"
  }
};

//запуск функции формирования поповера
Popover(popoverСontentObj);
;// CONCATENATED MODULE: ./src/index.js

//import "./js/form/formStyle.css";
//import "./js/paymentSystem/paymentSystem.css";


// TODO: write your code in app.js
/******/ })()
;
//# sourceMappingURL=main.js.map