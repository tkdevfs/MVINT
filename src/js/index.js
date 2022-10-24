
//  1- Pegar o elemento botão "sim"
const btnSim = document.getElementById('btn-sim');
const btnNao = document.getElementById('btn-nao');

const btnCerteza = document.getElementById('btn-certeza');
const btnNaoTenho = document.getElementById('btn-naoTenho');

const respostas = document.querySelectorAll('.resposta');

let respAtual = 0;

function esconderRespSelecionada(){
    const respSelecionada = document.querySelector('.selecionada');
    respSelecionada.classList.remove('selecionada');
}

//  2- Identificar o click no botão "sim"
btnSim.addEventListener('click', function(play){
    if(respAtual === respostas.length -3) return;

    esconderRespSelecionada();

    respostas[1].classList.add('selecionada');
    

    if( btnSim.click)
        videoCerteza.play();
    }
)
//  3-Imprimir na Tela o MEME do TEM CTZ? VAI SE APAIXONAR?
var videoCerteza = document.querySelector("#temCerteza");

function playPause(){
    if(videoCerteza.paused)
        videoCerteza.play()
    else
        videoCerteza.pause()
}

//Clickando Não.
btnNao.addEventListener("click", function(){
    if(respAtual === 3) return;
  
    esconderRespSelecionada();

    respostas[3].classList.add('selecionada');
});

//clickando CERTEZA!
btnCerteza.addEventListener("click", function(){
    
    esconderRespSelecionada();

    respostas[2].classList.add('selecionada');
});

btnNaoTenho.addEventListener("click", function(){
    
    esconderRespSelecionada();

    respostas[3].classList.add('selecionada');
})