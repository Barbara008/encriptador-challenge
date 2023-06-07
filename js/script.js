let btnEncriptar = document.querySelector('.encriptar');
let btnDesencriptar = document.querySelector('.desencriptar');
let txtEncriptar;
let noText = document.querySelector('.no-text');
let yesText = document.querySelector('.yes-text');
let respuesta = document.querySelector('.respuesta');
respuesta.readOnly = true;
let btnCopiar = document.querySelector('.copiar');
// ENCRIPTADOR

/**
 * Retorna encriptado el mensaje enviado por el usuario
 */

function encriptador(texto) {

    return texto.replaceAll(/a/gi,'ai')
                .replaceAll(/e/gi,'enter')
                .replaceAll(/i/gi,'imes')
                .replaceAll(/o/gi,'ober')
                .replaceAll(/u/gi,'ufat');

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


/**
 * Copia el texto dentro la seccion 'mensajEncriptad'
 */
function copiarTxt(){
    
    // Selecciona el contenido del campo
    respuesta.select();

    // Copia el texto seleccionado
    document.execCommand("copy");
   
}

function extraerTxt(){
    txtEncriptar = document.querySelector('.text').value;
    return txtEncriptar;
}

/**
 * funcion que conecta el btn 'Encriptar' con la funcion 'encriptador'
 */

btnEncriptar.addEventListener('click',(e)=>{
    e.preventDefault();
    let txt = extraerTxt()
    
    if (txt == "") {
        campoVacio()
    }else{
        campoLleno()
        respuesta.innerHTML = encriptador(txt);
    }
    
})


// Cipiado de texto:

btnCopiar.addEventListener('click',copiarTxt)

// DESENCRIPTADOR

/**
 * Toma el texto encriptado y lo retorna desencriptado usando
 * la inversion de los parametros en el que se encriptó
 */

function desencriptador(texto) {
    return texto.replaceAll(/ufat/gi,"u")
                        .replaceAll(/ober/gi,'o')
                        .replaceAll(/imes/gi,'i')
                        .replaceAll(/enter/gi,'e')
                        .replaceAll(/ai/gi,'a');

}

/**
 * funcion que conecta el btn 'Desencriptar' con la funcion 'desencriptador'
 */
btnDesencriptar.addEventListener('click',(e)=>{
    e.preventDefault();
    let txt = extraerTxt();
    if (txt == "") {
        campoVacio();
    }else{
        campoLleno();
        respuesta.innerHTML = desencriptador(txt)
    }
})