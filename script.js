// Menu hambúrguer
const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('show');
});

// Mensagem de envio do formulário
document.getElementById('contato-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Mensagem enviada com sucesso!");
    this.reset();
});

// Mostrar/ocultar redações
function toggleRedacao(id) {
    const balao = document.getElementById(id);

    if (!balao) {
        console.warn("ID inexistente:", id);
        return;
    }

    balao.style.display = balao.style.display === "block" ? "none" : "block";
}

// Cabeçalho que some ao rolar para baixo e reaparece ao subir
let prevScrollpos = window.pageYOffset;
const header = document.querySelector("header");

window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        header.style.top = "0"; // rolando para cima → mostra header
    } else {
        header.style.top = "-100px"; // rolando para baixo → esconde header
    }
    prevScrollpos = currentScrollPos;
};

};
