function selecionarPagamento(tipo) {
    // Remove seleção anterior
    document.querySelectorAll(".opcao").forEach(el => el.classList.remove("selecionada"));

    // Marca a nova opção
    const selecionada = document.querySelector(`.opcao[onclick="selecionarPagamento('${tipo}')"]`);
    selecionada.classList.add("selecionada");

    // Armazena o tipo escolhido
    document.getElementById("formaSelecionada").value = tipo;
}

function confirmarPagamento() {
    const forma = document.getElementById("formaSelecionada").value;
    if (!forma) {
        alert("Por favor, selecione uma forma de pagamento antes de continuar!");
        return;
    }
    alert("Forma de pagamento selecionada: " + forma.toUpperCase());
}

function limparSelecao() {
    document.querySelectorAll(".opcao").forEach(el => el.classList.remove("selecionada"));
    document.getElementById("formaSelecionada").value = "";
}
