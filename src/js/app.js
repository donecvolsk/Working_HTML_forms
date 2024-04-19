

const container = document.querySelector(".container"); //контейнер с формами

//Объект с содержимым для поповеров
const popoverСontentObj = {
    "text": {
        title: "text",
        content: "Этот тип применяется для ввода текста"
    },

    "range": {
        title: "range",
        content: "Этот тип применяется вывода ползунка"
    },

    "color": {
        title: "color",
        content: "Этот тип применяется для вывода палитры цвета"
    },

    "radio": {
        title: "radio",
        content: "Этот тип применяется для вывода палитры цвета"
    },

    "button": {
        title: "button",
        content: "Этот тип применяется для отображения кнопки"
    }
}

container.addEventListener("click", (event) => {
    event.preventDefault();
    const  trg = event.target;
    const formTrg = trg.closest(".form");

    console.log(formTrg);
    console.log(popoverСontentObj[formTrg.name]);

    const popoverDiv = document.createElement("div");
    popoverDiv.textContent = "Hello";
    document.body.appendChild(popoverDiv);

    /*if(formTrg) {
        let popover = formTrg.querySelector(".popover");
         
        if(popover) {
            popover.clasList.toggle("hidden");
        } else {
            
        }
    }*/
})

//console.log(container);
//console.log(popoverСontentObj.button.content);