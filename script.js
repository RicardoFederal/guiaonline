function mostrarpergunta1(event) {
    event.preventDefault(); // Evita o comportamento padrão (recarregar a página)

    let buttons = document.getElementsByClassName('pergunta1'); // Coleta todos os botões com a classe 'pergunta1'

    // Percorre os botões e altera a visibilidade de cada um
    for (let button of buttons) {
        button.style.visibility = 'visible';
    }

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

    //let buttons = document.getElementsByClassName('pergunta2');

    // Percorre os botões e altera a visibilidade de cada um
    //for (let button of buttons) {
        //button.style.visibility = 'visible';
    //}

    // Adiciona a classe 'pressionado' ao botão de "Anotação"
    let btnAnotacao = document.getElementById('btnAnotacao');
    btnAnotacao.classList.add('pressionado');  // Aplica o efeito de pressionado ao botão

    // Desabilita o botão "Revisão de Atribuição" com a TAG 'desabilitado'
    let btnRevisao = document.getElementById('btnRevisao');
    btnRevisao.classList.add('desabilitado');  // Adiciona a classe de desabilitado
    btnRevisao.disabled = true;  // Impede a interação com o botão
}
