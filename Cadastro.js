// Função que mostra o formulário correspondente
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

// Função única para mostrar/ocultar senhas
function alternarVisibilidadeSenha(campoId) {
    const campo = document.getElementById(campoId);
    if (!campo) return;
    
    const olho = campo.parentElement.querySelector('.toggle-senha');
    if (campo.type === "password") {
        campo.type = "text";
        olho.textContent = "🙈";
    } else {
        campo.type = "password";
        olho.textContent = "🐵";
    }
}

// Funções específicas para cada campo (mantidas para compatibilidade com HTML)
function mostrarSenha() { alternarVisibilidadeSenha("senha"); }
function mostrarSenhaNovamente() { alternarVisibilidadeSenha("senhaNovamente"); }
function mostrarSenhaJuridica() { alternarVisibilidadeSenha("senhaJuridica"); }
function mostrarSenhaNovamenteJuridica() { alternarVisibilidadeSenha("senhaNovamenteJuridica"); }

// Voltar para seleção de tipo
function voltarParaSelecao() {
    document.getElementById('formFisica').style.display = 'none';
    document.getElementById('formJuridica').style.display = 'none';
    
    const radios = document.querySelectorAll('input[name="tipo"]');
    radios.forEach(r => r.checked = false);
    
    document.getElementById('caixaSelecao').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Configuração inicial quando a página carrega
document.addEventListener('DOMContentLoaded', function () {
    // Listeners para os radios de seleção
    const radios = document.querySelectorAll('input[name="tipo"]');
    radios.forEach(r => {
        r.addEventListener('change', function (e) {
            alternarFormulario(e.target.value);
        });
    });

    // Mostrar formulário se algum radio estiver marcado inicialmente
    const inicial = document.querySelector('input[name="tipo"]:checked');
    if (inicial) alternarFormulario(inicial.value);

    // Listeners para os botões Continuar
    const botoesContinuar = document.querySelectorAll('.Continuar');
    botoesContinuar.forEach(botao => {
        botao.addEventListener('click', function() {
            window.location.href = 'Login.html';
        });
    });
});