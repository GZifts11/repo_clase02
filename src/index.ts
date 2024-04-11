/**
 * ESTO ES UN COMENTARIO DE DOCUMENTACIÓN 
 * /
 * 
 */

let variable_intermedia_comentario = "esto no está comentado"

/*
ESTOS SON COMENTARIOS
EN BLOQUES
QUIZAS PARA PROBAR COMPONENTES,
DESACTIVAR COMPONENTES
DESACTIVAR CÓDIGO
HACER PRUEBAS
*/

//TIPOS DE VARIABLES
var pepe

let donJose = "Hola don Pepito"

let clase02 = "Seguimos hasta las 00hs?"

let seguimosClase02 = true

let mensajeSeguimos = "hasta las 00 no paramos";
let mensajeParamos = "ya fue profe, cortemos.";

//Condicionales

if (seguimosClase02){
    mensajeSeguimos
}else{
    mensajeParamos
}

// Condicional - Operador Ternario 

seguimosClase02 ? mensajeSeguimos : mensajeParamos

let miAuto = {
    color:"Rojo",
    colorPuertas: "Violeta",
    patente: "ASD-IFTS11",
    precio: 5000,
}

console.log(miAuto)

//tipeOf
let variableCambiante = 22

console.log("Variable Cambiante es: " + typeof variableCambiante)

//variableCambiante = "ahora soy un string"

console.log("Variable Cambiante es: " + typeof variableCambiante)

//variableCambiante = true

console.log("Variable Cambiante es: " + typeof variableCambiante)

//variableCambiante = "true"

console.log("Variable Cambiante es: " + typeof variableCambiante)

console.log("El precio del auto es: " + miAuto.precio)

//miAuto.disponible = true

console.log(miAuto)

//FUNCIONES - DECLARACION - EXPRESIÖN - LAMBDA O ANONIMA 

/**
 * NO RECIBE _ NO DEVUELVE
 * RECIVE _ NO DEVUELVE
 * NO RECIBE _ DEVUELVE
 * RECIBE _ DEVUELVE
 */

//Declaración
/* function saludar() {
    return "HOLA ALUMNOS DE BACKEND"
}
 */


//Expresión
const saludo = function saludar( materia: any ) {
    return  console.log(`HOLA ALUMNOS DE BACKEND ${materia}`) //``
}

let miCadena = "parte uno " + "parte dos" + miAuto.patente
let miCadenaPro = `parte uno parte dos ${miAuto.colorPuertas}`

saludo("FRONTEND")
//saludar("Backend") //el interprete no reconoce el método saludar porque es parte de la expresión.
//y la otra función saludar está comentada.
console.log(typeof saludo)


function suma(var1: any, var2: any){
    return var1 + var2
}

let resultado1 = suma(5,5)
let resultado2 = suma(5,'5')

console.log(typeof resultado1)
console.log(typeof resultado2)


//Lambda
const saludos = function ( materia: any ) {
    return  console.log(`HOLA ALUMNOS DE BACKEND ${materia}`)
}

console.log("La constante saludos es de tipo: " + typeof saludos)

//ARROW - Flecha
const saluditos = ( materia: any, materia2: any, materia3: any ) => {
    return  console.log(`HOLA ALUMNOS DE ${materia}, ${materia2}, ${materia3}`)
}

console.log("La constante saludos es de tipo: " + typeof saludos)

saluditos("Backend", "FrontEnd", "Ingenieria")

var alumnosTienenPreguntas
var responder = function () {}
var finDeClase = function () {}


if (alumnosTienenPreguntas) {
    responder()
} else {
    finDeClase()
}