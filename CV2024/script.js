'use strict';

// Array con diferentes textos
const textos = ["Desarrolladora Full-Stack", "Consultora SAP"];

// Obtener el elemento donde se escribirá el texto
const textoMecanico = document.getElementById('dw');

// Función para simular la escritura y borrado del texto
function escribirYBorrar(textos, indiceTexto, indiceCaracter) {
    const textoActual = textos[indiceTexto];

    if (indiceCaracter < textoActual.length) {
        textoMecanico.textContent += textoActual.charAt(indiceCaracter);
        setTimeout(function () {
            escribirYBorrar(textos, indiceTexto, indiceCaracter + 1);
        }, 200); // Velocidad de escritura (ajustable)
    } else {
        setTimeout(function () {
            borrar(textos, indiceTexto, indiceCaracter);
        }, 2000); // Tiempo antes de borrar el texto (ajustable)
    }
}

// Función para borrar el texto
function borrar(textos, indiceTexto, indiceCaracter) {
    if (indiceCaracter >= 0) {
        textoMecanico.textContent = textos[indiceTexto].substring(0, indiceCaracter);
        setTimeout(function () {
            borrar(textos, indiceTexto, indiceCaracter - 1);
        }, 50); // Velocidad de borrado (ajustable)
    } else {
        setTimeout(function () {
            // Escoge el siguiente texto en el array
            const siguienteIndiceTexto = (indiceTexto + 1) % textos.length;
            escribirYBorrar(textos, siguienteIndiceTexto, 0);
        }, 1000); // Tiempo antes de empezar a escribir de nuevo (ajustable)
    }
}

// Iniciar el proceso con el primer texto del array
escribirYBorrar(textos, 0, 0);


// Valores iniciales para cada barra de progreso
const valoresIniciales = {
    sap: 50,
    grafana: 90,
    powerbi: 70,
    mysql: 90,
    java: 100,
    javafxswing: 100,
    kotlin: 70,
    htmlcss: 60,
    spring: 90,
    unity: 65,
    csharp: 50,
    github: 90
};

function llenarBarraProgreso(id, valor) {
    const barraProgreso = document.getElementById(id).querySelector('.progreso');
    const porcentajeText = document.getElementById(id).querySelector('.porcentaje');

    barraProgreso.style.width = valor + '%';
    porcentajeText.textContent = valor + '%';

    if (valor < valoresIniciales[id]) {
        valor++;
        setTimeout(() => llenarBarraProgreso(id, valor), 40); // Velocidad de llenado (ajustable)
    }
}

// Iniciar el llenado desde 0 para cada barra de progreso
for (const id in valoresIniciales) {
    llenarBarraProgreso(id, 0);
}

function descargar(){
    const url = './CV.pdf';
            
    // Crear un enlace temporal
    const link = document.createElement('a');
    link.href = url;
    link.download = 'CV.pdf';
    
    // Simular un clic en el enlace
    document.body.appendChild(link);
    link.click();
    
    // Eliminar el enlace temporal del DOM
    document.body.removeChild(link);
}

