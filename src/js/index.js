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

const btnFormulary = document.getElementById('btn-email')

btnFormulary.addEventListener('click', function (event) {
    var name = document.getElementById('full-name').value;
    var email = document.getElementById('email-address').value;
    var message = document.getElementById('message').value;

    if (name === '' || email === '' || message === '') {
        event.preventDefault();
        alert('Por favor, preencha todos os campos antes de enviar.');
    } else {
        alert('Muito obrigado por entrar em contato comigo! Entro em contato logo, logo.');
    }
});