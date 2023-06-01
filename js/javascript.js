let edad = prompt("Ingrese su edad por favor:");

function acceso() {
    if (edad < 18) {
        alert("Tené cuidado. Este sitio es para mayores, vas a entrar bajo tu responsabilidad.");
    } else {
        alert("Bienvenido a la página. Espero que te sirva la información.");
    }
}

let nombre = prompt("Ingrese su nombre:");

function saludar() {
    alert("¡Hola " + nombre + "! Bienvenido/a.");
}

acceso();

window.onbeforeunload = function() {
    return "¡Atención! Estás saliendo de nuestro sitio web.";
};