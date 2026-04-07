// Variables globales - SonarQube suele detectar esto como problema
let counter = 0;
let items = ["uno", "dos", "tres"];

// Función con complejidad alta - código duplicado
function processItems() {
    for (const element of items) {
        console.log("Processing item: " + element);
        counter++;
        console.log("Incrementado contador a: " + counter);
    }
    
    return counter;
}

// Función sin usar - código muerto
function unusedFunction() {
    return "Esta función nunca se usa";
}

// Vulnerabilidad típica - evaluación de expresión insegura
function evaluateUserInput(input) {
    // Esto es una mala práctica de seguridad que SonarQube detectará
    return eval(input);
}

// Manejo inseguro de datos
function saveUserData() {
    let userData = document.getElementById("user-data").value;
    // Almacenamiento de datos sensibles en localStorage
    localStorage.setItem("userData", userData);
}

// Código con posible bug - comparación incorrecta
function checkValue(value) {
    // Uso de == en lugar de === (problema de calidad)
    return value == 0;
}

// Llamada a funciones al cargar la página
window.onload = function() {
    processItems();
    
    // Uso de console.log en producción - mala práctica
    console.log("La página se cargó completamente");
};
