const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

const inicio = document.querySelector(".inicio");
const final = document.querySelector(".final");


// Función para validar la entrada en los textarea
function validarEntrada(event) {
    const input = event.target.value;
    // Expresión regular que permite solo letras minúsculas y espacios
    const regex = /^[a-z\s]*$/; // Permite letras minúsculas y espacios

    // Si el valor no coincide con la expresión regular, se evita el ingreso
    if (!regex.test(input) && input !== '') {
        event.target.value = input.slice(0, -1); // Elimina el último carácter ingresado
    }
}

// Agregar el evento de entrada a los textarea
document.querySelector('.text-area').addEventListener('input', validarEntrada);
document.querySelector('.mensaje').addEventListener('input', validarEntrada);


// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"


function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);

    // Verifica si el texto encriptado está vacío
    if (textoEncriptado === "") {
        return; // No hace nada si el valor es vacío
    }

    mensaje.value = textoEncriptado;
    textArea.value = "";
    inicio.style.display = "none";
    final.style.display = "flex";
}

function encriptar(stringEncriptado) {
    // Verifica si la cadena está vacía
    if (!stringEncriptado.trim()) {
        alert("Ingresa el mensaje que deseas encriptar"); // Muestra un mensaje de alerta
        return ""; // Retorna una cadena vacía
    }

    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptado.includes(matrizCodigo[i][0])) {
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptado;
}


function btnDesencriptar() {
    const textoDesencriptado = desencriptar(textArea.value);

    // Verifica si el texto desencriptado está vacío
    if (textoDesencriptado === "") {
        return; // No hace nada si el valor es vacío
    }

    mensaje.value = textoDesencriptado;
    textArea.value = "";
    inicio.style.display = "none";
    final.style.display = "flex";
}

function desencriptar(stringDesencriptado) {
    // Verifica si la cadena está vacía
    if (!stringDesencriptado.trim()) {
        alert("Ingresa el mensaje que deseas desencriptar"); // Muestra un mensaje de alerta
        return ""; // Retorna una cadena vacía
    }
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptado.includes(matrizCodigo[i][1])) {
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptado;
}


function btnCopiar() {
    const textoParaCopiar = mensaje.value;

    // Verifica si el texto a copiar no está vacío
    if (textoParaCopiar.trim() === "") {
        alert("No hay mensaje para copiar"); // Mensaje si el campo está vacío
        return;
    }

    // Selecciona el texto del área de texto
    mensaje.select();
    document.execCommand('copy');

    // Muestra el mensaje de confirmación
    alert("Mensaje copiado al portapapeles");
}


function btnLimpiar() {
    let textoEncriptado = document.getElementById('texto');
    document.getElementById("texto").value = '';
}