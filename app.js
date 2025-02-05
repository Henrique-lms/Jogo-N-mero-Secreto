let listaNumeroSorteados = [];
let numeroLimite = 10
let numeroSecreto = gerarNumeroAleatorio();
console.log(gerarNumeroAleatorio);
let tentativas = 1;

//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo Do Número Secreto';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

//CONTRL + L = limpar console.

function exibirTextoNaTela(tag, texto){
let campo = document.querySelector(tag);
campo.innerHTML = texto;
responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial(){
exibirTextoNaTela('h1', 'Jogo Do Número Secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;
    console.log(chute == numeroSecreto);

    if(chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou!!');
        let tentativaCont = tentativas > 1 ? 'tentativas' : 'tentativa';
        let tentativasCont = `Você descobriu o número secreto com ${tentativas} ${tentativaCont}`;
        exibirTextoNaTela('p', tentativasCont);
        document.getElementById('reiniciar').removeAttribute('disabled');
        return tentativas = 1;
    } else {
        if(chute > numeroSecreto){
            exibirTextoNaTela('p', 'O número é menor do que você digitou.');
        } else {
            exibirTextoNaTela('p', 'O número é maior do que você digitou.');
        } tentativas++;
        limparCampo();
    } 
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quatidadeMaxima = listaNumeroSorteados.length;

    if (quatidadeMaxima == numeroLimite){
        listaNumeroSorteados = []; 
    }

    if (listaNumeroSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        listaNumeroSorteados.push(numeroEscolhido);
        console.log(listaNumeroSorteados);
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    tentativas;
    limparCampo();
    console.log(numeroSecreto);
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}