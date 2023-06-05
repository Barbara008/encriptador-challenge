const encriptar = document.querySelector('.encriptar');
const desencriptar = document.querySelector('.desencriptar');
let texto = document.querySelector('.text');
let textoAEncriptar = texto.value;

let fraseCambiada = '';
function encriptador() {

    fraseCambiada = textoAEncriptar.replaceAll('a','ai').replaceAll('e','enter').replaceAll('i','imes').replaceAll('o','ober').replaceAll('u','ufat');

    return fraseCambiada;

    
}

function desencriptador() {
    fraseDesencriptada = fraseCambiada.replaceAll("ufat","u").replaceAll('ober','o').replaceAll('imes','i').replaceAll('enter','e').replaceAll('ai','a')

    return fraseDesencriptada;

}



