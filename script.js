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
