import Popover from "./popover/popover";

//Объект с содержимым для поповеров
const popoverСontentObj = {
  text: {
    title: "text",
    content: "Этот тип применяется для ввода текста",
  },

  range: {
    title: "range",
    content: "Этот тип применяется для вывода ползунка",
  },

  color: {
    title: "color",
    content: "Этот тип применяется для вывода палитры цвета",
  },

  radio: {
    title: "radio",
    content: "Этот тип применяется для вывода перключателя",
  },

  button: {
    title: "button",
    content: "Этот тип применяется для отображения кнопки",
  },
};

//запуск функции формирования поповера
Popover(popoverСontentObj);
