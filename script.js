// Menu hambúrguer
function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.style.display = menu.style.display === "flex" ? "none" : "flex";
}

// Função simples de envio de formulário
function enviarFormulario() {
    alert("Mensagem enviada com sucesso!");
    return false; // evita envio real
}
