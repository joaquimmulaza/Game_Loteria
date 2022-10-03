$('.close-btn').click(function () {
    $('.alert').addClass("hide");
    $('.alert').removeClass("show");
})

const splash = document.querySelector('.splash');
const tela = document.querySelector('.tela');

document.addEventListener('DOMContentLoaded', (r) => {
    setTimeout(() => {
        splash.classList.add('display-none');
        tela.classList.add('display-none');
    }, 2000);
})

const botao = document.querySelectorAll('button');
botao.forEach(btn => {
    btn.addEventListener('click', function (e) {
        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;

        let efeito = document.createElement('span');
        efeito.className = "sp";
        efeito.style.left = x + 'px';
        efeito.style.top = y + 'px';

        this.appendChild(efeito);

        setTimeout(() => {
            efeito.remove()
        }, 1000);
    })
})

let numeros = Math.round(Math.random() * 2);
console.log(numeros)
let caixaDoNumero = window.document.getElementById('numero');
var botaoAdivinhar = window.document.getElementById('botao');
botaoAdivinhar.onclick = botaoClicado;

function botaoClicado() {

    $('.alert').removeClass("hide");
    $('.alert').addClass("show");
    $('.alert').addClass("showAlert");
    setTimeout(function () {
        $('.alert').addClass("hide");
        $('.alert').removeClass("show");
    }, 3000); //Fecha o alert automaticamente

    for (var i = 0; i < numeros; i++) {
        if (numeros == caixaDoNumero.value) {            
            let texto = window.document.getElementById('alerta');
            let icone = window.document.getElementById('icone');
            let alerta = window.document.getElementById('novo');
            alerta.style.borderLeftColor = 'green';
            texto.innerText = 'Parabéns você venceu!';
            icone.style.color = 'green';
            $('.ico').addClass("fas fa-face-grin-beam");
            document.addEventListener('DOMContentLoaded', (r) => {
                setTimeout(() => {
                    location.reload();
                }, 4000);
            })
            playAudio2();
            return;
        }

        if (caixaDoNumero.value == undefined || caixaDoNumero.value == "") {
            let texto = window.document.getElementById('alerta');
            let alert = window.document.getElementById('novo');
            let icone = window.document.getElementById('icone');
            icone.style.color = 'red';
            $('.ico').addClass("fas fa-exclamation-circle excla");
            alert.style.borderLeftColor = 'red';
            texto.innerText = 'Erro, digite um número!';
            playAudio3();
            return;
        }
    }

    let texto = window.document.getElementById('alerta');
    let icone = window.document.getElementById('icone');
    let alerta = window.document.getElementById('novo');
    icone.style.color = "red";
    $('.ico').addClass('fas fa-face-sad-tear');
    alerta.style.borderLeftColor = "red";
    texto.innerText = 'Infelizmente você perdeu!';
    playAudio1();
}

function playAudio2() {
    document.getElementById('audio2').play();
}

function playAudio3() {
    document.getElementById('audio3').play();
}

function playAudio1() {
    document.getElementById('audio').play();
}

function fundo(){
    document.addEventListener('DOMContentLoaded', (l) => {
    document.getElementById('audio4').play();
    })
}
fundo()

/* window.addEventListener('DOMContentLoaded', (event) => {
    playAudio4()
}); */
