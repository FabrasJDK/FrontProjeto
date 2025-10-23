// Alterna entre Pessoa Física e Jurídica
function alternarFormulario(tipo) {
    const formFisica = document.getElementById('formFisica');
    const formJuridica = document.getElementById('formJuridica');

    formFisica.style.display = 'none';
    formJuridica.style.display = 'none';

    if (tipo === 'fisica') {
        formFisica.style.display = 'block';
        formFisica.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (tipo === 'juridica') {
        formJuridica.style.display = 'block';
        formJuridica.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Mostrar / ocultar senha
function mostrarSenha(id, botao) {
    const campo = document.getElementById(id);
    if (campo.type === 'password') {
        campo.type = 'text';
        botao.textContent = '🙈';
    } else {
        campo.type = 'password';
        botao.textContent = '🐵';
    }
}

// Voltar para seleção
function voltarParaSelecao() {
    document.getElementById('formFisica').style.display = 'none';
    document.getElementById('formJuridica').style.display = 'none';
    const radios = document.querySelectorAll('input[name="tipo"]');
    radios.forEach(r => r.checked = false);
    document.getElementById('caixaSelecao').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Listeners
document.addEventListener('DOMContentLoaded', function () {
    const radios = document.querySelectorAll('input[name="tipo"]');
    radios.forEach(r => {
        r.addEventListener('change', function (e) {
            alternarFormulario(e.target.value);
        });
    });
});
