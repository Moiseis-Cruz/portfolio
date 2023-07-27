window.scroll({
    top:0,
    behavior:"smooth"
});

const btnSection = document.querySelectorAll(".btn-section")

const section = document.querySelectorAll(".section")

btnSection.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        desativarSecaoAtiva()

        section[i].classList.toggle("active")

        mudarCorBotao()

        btnSection[i].classList.toggle("color-selected")
    })

})

function desativarSecaoAtiva() {
    const sectionActive = document.querySelector(".active")

    sectionActive.classList.remove("active")
}

function mudarCorBotao() {
    const btnColored = document.querySelector(".color-selected")

    btnColored.classList.remove("color-selected")
}
