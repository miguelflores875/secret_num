let numeroSecreto = 0;
let intentos = 1;
let listaNumSorteados = [];
let numMax = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function verificaIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsiario').value);

    console.log(numeroDeUsuario === numeroSecreto);

    if (numeroSecreto === numeroDeUsuario) {
        asignarTextoElemento('p', `Acertaste en ${intentos} ${(intentos == 1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else {
        //el usuario no acerto
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El numero es menor');
        } else {
            asignarTextoElemento('p', 'El numero es mayor');
        }
        intentos++;
        limpiaCampo();
    }
    return;
}

function limpiaCampo() {
    document.getElementById('valorUsiario').value = '';
    return;
}

function generarNumeroSecreto(params) {
    return Math.floor(Math.random() * 10) + 1;
}

function generaNumeroSecreto(params) {
    let numeroGenerado = Math.floor(Math.random() * 10) + 1;
    if (listaNumSorteados.length == numMax) {
        asignarTextoElemento('p', 'Ya se sortearon todos los numero de la lista')
    } else {
        //si el # generado esta incluidl en la lista
        if (listaNumSorteados.includes(numeroGenerado)) {
            return generaNumeroSecreto();
        } else {
            listaNumSorteados.push(numeroGenerado);
            return numeroGenerado;
        }

    }

}

function condicionesIniciales() {
    let intentos = 1;
    asignarTextoElemento('h1', 'Juego del numero secreto');
    asignarTextoElemento('p', 'Adivina el numero entre 1 y 10');
    numeroSecreto = generaNumeroSecreto();
}

function reiniciaJuego() {
    //limpiar caja
    limpiaCampo();
    //setear condiciones iniciales
    condicionesIniciales();
    //inabilitar el boton de nuevo juego
    document.getElementById('reiniciar').setAttribute('disabled', true)

}

condicionesIniciales();