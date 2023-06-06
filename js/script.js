let btnEncriptar = document.querySelector('.encriptar');
let txtEncriptar;
let noText = document.querySelector('.no-text');
let yesText = document.querySelector('.yes-text');
let respuesta = document.querySelector('.respuesta');

// ENCRIPTADOR

/**
 * Retorna encriptado el mensaje enviado por el usuario
 */

function encriptador(texto) {

    return texto.replaceAll(/a/gi,'ai').replaceAll(/e/gi,'enter').replaceAll(/i/gi,'imes').replaceAll(/o/gi,'ober').replaceAll(/u/gi,'ufat');

}


// cambian el estado de la caja de respuesta
function campoVacio() {
    noText.classList.remove('of')
    yesText.classList.add('of')
}

function campoLleno() {
    noText.classList.add('of');
    yesText.classList.remove('of')
}

btnEncriptar.addEventListener('click',(e)=>{
    e.preventDefault();
    txtEncriptar = document.querySelector('.text').value;
    
    if (txtEncriptar == "") {
        campoVacio()
    }else{
        campoLleno()
        respuesta.innerHTML = encriptador(txtEncriptar);
    }
    
})


// DESENCRIPTADOR

/**
 * Retorna desencriptado el mensaje que fue previamente encriptado
 */

// function desencriptador() {
//     let fraseDesencriptada = fraseCambiada.replaceAll(/ufat/gi,"u").replaceAll(/ober/gi,'o').replaceAll(/imes/gi,'i').replaceAll(/enter/gi,'e').replaceAll(/ai/gi,'a')

//     return fraseDesencriptada;

// }