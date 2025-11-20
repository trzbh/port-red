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
function toggleRedacao(id) {
    const balao = document.getElementById(id);

    if (!balao) {
        console.warn("ID inexistente:", id);
        return;
    }

    balao.style.display = balao.style.display === "block" ? "none" : "block";
}

