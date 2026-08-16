const container = document.querySelector(".container")

const lista = document.querySelector(".container .list")

const thumbs = document.querySelector(".thumb")


const btnNext = document.querySelector(".next")
const btnBack = document.querySelector(".back")

btnNext.addEventListener("click", () => {
    let listItems = document.querySelectorAll(".list .list-item")
    let thumbItems = document.querySelectorAll(".thumb .thumb-item")

    lista.appendChild(listItems[0])
    thumbs.appendChild(thumbItems[0])
    container.classList.add("next")

    /* 0 1 2 3 --- Quando você aperta o botão Next, esse código pega o primeiro item da lista e coloca ele no final. O mesmo acontece com a primeira miniatura.*/

    setTimeout(() => {
    container.classList.remove("next")
    container.classList.remove("back")
    }, 3000);
})

btnBack.addEventListener("click", () => {
    let listItems = document.querySelectorAll(".list .list-item")
    let thumbItems = document.querySelectorAll(".thumb .thumb-item")

   /*ao clicar quero que o item do final seja colocado no começo*/
    lista.prepend(listItems[listItems.length - 1])
    thumbs.prepend(thumbItems[thumbItems.length - 1])
    container.classList.add("back")

    setTimeout(() => {
    container.classList.remove("next")
    container.classList.remove("back")
    }, 3000);
})

