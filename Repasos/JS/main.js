// Variables
let nombre = "Marcos";
let apellidos = "Martín Pérez";
let alturaVar = 179;

// Alertas
//alert(nombre);

// Constantes
const altura = 179;

// Mostrar por consola
console.log(nombre);
console.log(altura);

// Concatenación
let concat = nombre + " " + apellidos;

// Seleccionar elementos de la página
let datos = document.querySelector("#datos");
datos.innerHTML = `
    <hr>
    <h2>Soy la caja de datos</h2>
    <h3>Mi nombre es: ${concat}</h3>
    <h4>Mido: ${altura}</h4>`;

// Condiciones
if(alturaVar >= 185){
    datos.innerHTML += "<hr><h4>Eres una persona alta</h4><hr>";
}else if(alturaVar < 185 && alturaVar > 175){
    datos.innerHTML += "<hr><h4>Eres una persona de altura media</h4><hr>";
}else{
    datos.innerHTML += "<hr><h4>Eres una persona baja</h4><hr>";
}

// Bucles
for(let year = 2019; year <= 2023; year++){
    datos.innerHTML += `<h4>Estamos en el año: ${year}</h4>`;
}
datos.innerHTML += "<hr>";
// Arrays
let nombres =  ["Marcos", "Gema", "Miguel", "David"];

let divNombres = document.querySelector("#nombres");

// divNombres.innerHTML = nombres[3];
   // Forma 1
/*nombres.forEach(nombre => {
    divNombres.innerHTML += "<li>"+nombre+"</li>"
});*/
    // Forma 2
for (let nombre of nombres){
    divNombres.innerHTML += "<li>"+nombre+"</li>"
}

divNombres.innerHTML += "</ul>";

// Funciones
const miInformacion = (nombre, altura) => {
    let misDatos = `
        <h3>Soy la caja de datos</h3>
        <h4>Mi nombre es: ${nombre}</h4>
        <h5>Mido: ${altura} cm</h5>
    `;
    return misDatos;
}

console.log(miInformacion("Max Power", 219));

const imprimir = () => {
    let datos = document.querySelector("#datos");
    datos.innerHTML += miInformacion("Max Power", 219)
}

imprimir();
datos.innerHTML += "<hr>";