export default function Popover(popoverСontentObj) {
    const container = document.querySelectorAll(".form"); //контейнер с формами

    const popoverDiv = document.createElement("div"); // создаем div для тела поповера

    const popoverTitle = document.createElement("h3"); // создаем заголовок для тела поповера

    const popoverContent = document.createElement("p"); // создаем текст для тела поповера


    container.forEach(element => {
        element.addEventListener("focus", (event) => {
            event.preventDefault();
            const  { target }  = event;
            const formTrg = target.closest(".form"); 

            popoverTitle.classList.add("popoverTitle");
            popoverTitle.textContent = popoverСontentObj[formTrg.getAttribute('name')].title;        
            popoverDiv.prepend(popoverTitle);

            popoverContent.classList.add("popoverText");
            popoverContent.textContent = popoverСontentObj[formTrg.getAttribute('name')].content;
            popoverDiv.append(popoverContent);
    
            if(popoverDiv.classList.contains('popover')) {
                popoverDiv.remove;
            } else {
                popoverDiv.classList.add("popover");
            } 
            popoverContent.classList.add("popoverText");        
            formTrg.before(popoverDiv);          
        }); 
    });
}