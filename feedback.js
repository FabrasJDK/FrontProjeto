let notaSelecionada = 0;

// Função para pintar estrelas
function pintarEstrelas(qtd) {
    const estrelas = document.querySelectorAll(".estrela");
    estrelas.forEach((estrela, index) => {
        estrela.style.color = index < qtd ? "#ffc107" : "#ccc";
    });
}

// Inicializa interatividade
document.addEventListener("DOMContentLoaded", () => {
    const estrelas = document.querySelectorAll(".estrela");

    estrelas.forEach((estrela) => {
        const valor = parseInt(estrela.getAttribute("data-value"));

        estrela.addEventListener("mouseover", () => pintarEstrelas(valor));
        estrela.addEventListener("mouseout", () => pintarEstrelas(notaSelecionada));
        estrela.addEventListener("click", () => {
            notaSelecionada = valor;
            document.getElementById("notaFeedback").value = valor;
            pintarEstrelas(valor);
        });
    });
});

// Enviar feedback
function enviarFeedback() {
    const nome = document.getElementById("nomeFeedback").value.trim();
    const email = document.getElementById("emailFeedback").value.trim();
    const mensagem = document.getElementById("mensagemFeedback").value.trim();
    const nota = document.getElementById("notaFeedback").value;

    if (!nome || !email || !mensagem || nota == 0) {
        alert("Por favor, preencha todos os campos e selecione uma nota!");
        return;
    }

    alert(`Obrigado pelo feedback, ${nome}! Sua nota foi ${nota} estrelas.`);
    limparFormulario();
}

// Limpar formulário
function limparFormulario() {
    document.getElementById("nomeFeedback").value = "";
    document.getElementById("emailFeedback").value = "";
    document.getElementById("mensagemFeedback").value = "";
    document.getElementById("notaFeedback").value = 0;
    notaSelecionada = 0;
    pintarEstrelas(0);
}
