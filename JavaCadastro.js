// Função que mostra o formulário correspondente (mantém a seleção visível)
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

// Mostra/oculta senhas (mantive as funções globais pois são usadas no HTML)
function mostrarSenha() {
    const campo = document.getElementById("senha");
    const olho = campo.parentElement.querySelector('.toggle-senha');
    if (!campo) return;
    if (campo.type === "password") {
        campo.type = "text";
        olho.textContent = "🙈";
    } else {
        campo.type = "password";
        olho.textContent = "🐵";
    }
}
function mostrarSenhaNovamente() {
    const campo = document.getElementById("senhaNovamente");
    const olho = campo.parentElement.querySelector('.toggle-senha');
    if (!campo) return;
    if (campo.type === "password") {
        campo.type = "text";
        olho.textContent = "🙈";
    } else {
        campo.type = "password";
        olho.textContent = "🐵";
    }
}
function mostrarSenhaJuridica() {
    const campo = document.getElementById("senhaJuridica");
    const olho = campo.parentElement.querySelector('.toggle-senha');
    if (!campo) return;
    if (campo.type === "password") {
        campo.type = "text";
        olho.textContent = "🙈";
    } else {
        campo.type = "password";
        olho.textContent = "🐵";
    }
}
function mostrarSenhaNovamenteJuridica() {
    const campo = document.getElementById("senhaNovamenteJuridica");
    const olho = campo.parentElement.querySelector('.toggle-senha');
    if (!campo) return;
    if (campo.type === "password") {
        campo.type = "text";
        olho.textContent = "🙈";
    } else {
        campo.type = "password";
        olho.textContent = "🐵";
    }
}

// Voltar: esconde os formulários e limpa seleção (os botões continuam visíveis)
function voltarParaSelecao() {
    document.getElementById('formFisica').style.display = 'none';
    document.getElementById('formJuridica').style.display = 'none';
    const radios = document.querySelectorAll('input[name="tipo"]');
    radios.forEach(r => r.checked = false);
    // opcional: rola pra seleção
    document.getElementById('caixaSelecao').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Vincula os listeners quando a página carrega
document.addEventListener('DOMContentLoaded', function () {
    const radios = document.querySelectorAll('input[name="tipo"]');
    radios.forEach(r => {
        r.addEventListener('change', function (e) {
            alternarFormulario(e.target.value);
        });
    });

    // Se algum radio estiver marcado inicialmente, mostra o form correspondente
    const inicial = document.querySelector('input[name="tipo"]:checked');
    if (inicial) alternarFormulario(inicial.value);
});
