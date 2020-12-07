const img = new Image();
const div = document.querySelector('div#container-lamp');
const button = document.querySelector('button#turn');
const lampInfo = document.querySelector('h1#lamp-info');
const lamp = {
    quebrada: false,
    src: {
        acesa: './img/lampada-acesa.jpg',
        apagada: './img/lampada-apagada.jpg',
        quebrada: './img/lampada-quebrada.jpg'
    },
    acender: function() {
        if(!lamp.quebrada) {
            img.src = lamp.src.acesa;
            mudarImagem(img);
            mudarLampInfo('A lâmpada foi acesa');
            alterarNomeBotao('Apagar');
        }
    },
    apagar: function() {
        if(!lamp.quebrada) {
            img.src = lamp.src.apagada;
            mudarImagem(img);
            alterarNomeBotao('Acender');
            mudarLampInfo('A lâmpada foi apagada');
        }
    },
    quebrar: function() {
        if(!lamp.quebrada) {
            lamp.quebrada = true;
            img.src = lamp.src.quebrada;
            mudarImagem(img);
            mudarLampInfo('A lâmpada foi quebrada');
            alterarNomeBotao('Reiniciar');
        }
    }
}
function mudarLampInfo(newName) {
    lampInfo.innerHTML = newName;
}
function mudarImagem(img) {
    div.appendChild(img);
}
function alterarNomeBotao(newName) {
    button.innerHTML = newName;
}
const inicializar = function() {
    img.src = './img/lampada-apagada.jpg';
    mudarImagem(img);
    alterarNomeBotao('Acender');
    mudarLampInfo('A lâmpada está apagada');
    lamp.quebrada = false;
}
div.addEventListener('dblclick', lamp.quebrar);
button.addEventListener('click', function(){
    if(button.innerHTML == 'Acender') {
        lamp.acender();
    } else if(button.innerHTML == 'Apagar') {
        lamp.apagar();
    } else if(button.innerHTML == 'Reiniciar') {
        inicializar();
    }
});
div.addEventListener('mouseenter', lamp.acender);
div.addEventListener('mouseleave', lamp.apagar);
inicializar();