function mostrarSecao(secaoId) {
    document.getElementById('home').style.display = 'none';
    document.getElementById('sobre').style.display = 'none';
    document.getElementById('fotos').style.display = 'none';
    document.getElementById('jogo').style.display = 'none';
    document.getElementById('btn-voltar').style.display = 'none';
    document.getElementById(secaoId).style.display = 'block';
}

function mostrarJogo() {
    document.getElementById('home').style.display = 'none';
    document.getElementById('sobre').style.display = 'none';
    document.getElementById('fotos').style.display = 'none';
    document.getElementById('jogo').style.display = 'block';
    document.getElementById('btn-voltar').style.display = 'block';
}

function voltarInicio() {
    mostrarSecao('home');
}

// Impede rolagem com setas e espaço
window.addEventListener("keydown", function(e) {
    const keysToBlock = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", " "];
    if (keysToBlock.includes(e.key)) {
        e.preventDefault();
    }
}, { passive: false });
