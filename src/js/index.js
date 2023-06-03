const btnSection = document.querySelectorAll(".btn-section")

const section = document.querySelectorAll(".section")

btnSection.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        desativarSecaoAtiva()

        section[i].classList.toggle("active")
    })
})

function desativarSecaoAtiva() {
    const sectionActive = document.querySelector(".active")

    sectionActive.classList.remove("active")
}