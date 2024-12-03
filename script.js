function limparFormulario() {
    location.reload(); // Recarregar a página.
}

function mostrarpergunta1(event) {
    event.preventDefault(); // Evita o comportamento padrão (recarregar a página)

    let buttons = document.getElementsByClassName('pergunta1'); // Coleta todos os botões com a classe 'pergunta1'

    // Percorre os botões e altera a visibilidade de cada um
    for (let button of buttons) {
        button.style.visibility = 'visible';
    }

    limpar1.style.visibility = 'visible';

    // Adiciona a classe 'pressionado' ao botão de "Pós-Graduação"
    let btnPosgrad = document.getElementById('btnPosgrad');
    btnPosgrad.classList.add('pressionado');  // Aplica o efeito de pressionado ao botão
}

function mostrarpergunta3(event) {
    event.preventDefault();

    let buttons = document.getElementsByClassName('pergunta2');

    // Percorre os botões e altera a visibilidade de cada um
    for (let button of buttons) {
        button.style.visibility = 'visible';
    }

    limpar1.style.visibility = 'hidden';
    limpar2.style.visibility = 'visible';

    // Adiciona a classe 'pressionado' ao botão de "Outro Estado"
    let btnOutroEstado = document.getElementById('btnOutroEstado');
    btnOutroEstado.classList.add('pressionado');  // Aplica o efeito de pressionado ao botão

    // Desabilita o botão "Escola São Paulo" com a TAG 'desabilitado'
    let btnEscolaSP = document.getElementById('btnEscolaSP');
    btnEscolaSP.classList.add('desabilitado');  // Adiciona a classe de desabilitado
    btnEscolaSP.disabled = true;  // Impede a interação com o botão
}

function mostrarResposta1(event) {
    event.preventDefault();

    let textArea = document.getElementById('meuTextarea');
    textArea.style.visibility = 'visible';

    let texto = "1. Consultar o CREA de Origem;\n2. Mandar email para o IES@ com a resposta;\n\nCaso o curso não esteja cadastrado:\n\n1. Mandar email para o IES@ para criarmos o curso e vincular a atribuição 'Sem Atribuição' ao profissional.";
            
    // Acessa o textarea pelo ID e preenche com o texto
    document.getElementById('meuTextarea').value = texto;

    // Adiciona a classe 'pressionado' ao botão de "Anotação"
    let btnAnotacao = document.getElementById('btnAnotacao');
    btnAnotacao.classList.add('pressionado');  // Aplica o efeito de pressionado ao botão

    // Desabilita o botão "Revisão de Atribuição" com a TAG 'desabilitado'
    let btnRevisao = document.getElementById('btnRevisao');
    btnRevisao.classList.add('desabilitado');  // Adiciona a classe de desabilitado
    btnRevisao.disabled = true;  // Impede a interação com o botão

    limpar2.style.visibility = 'hidden';
    limpar3.style.visibility = 'visible';
}
