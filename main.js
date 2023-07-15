// comentario de línea 

/*
comentario
de
bloque
*/
// forma recomendada para declarar variable
let edad = 15;
let nombre ="ricardo";

//forma no recomedada para declarar variables
var numero = 4;

//constantes
const NUMERO = 5;

//edad = 20;

// camelCase => nombreBonitoGrande <-- este siempre
// snake_case => nombre_bonito_grande
// PascalCase => NombreBonitoGrande < --- más adelante

let numeroUno = 3;
let numeroDos =5;

let resultadosSuma = numeroUno + numeroDos;
let resultadosResta = numeroUno - numeroDos;
let resultadosMultiplicacion = numeroUno * numeroDos;
let resultadosDivision = numeroUno / numeroDos;

console.log("resultado suma", resultadosSuma);
console.log("resultado resta", resultadosResta);
console.log("resultado multiplicacion", resultadosMultiplicacion);
console.log("resultado division", resultadosDivision);

// let saludo = "Hola";
// let nombre = "Camila";
// let saludoCompleto = saludo + " " + nombre;

//console.log(saludoCompleto);

let nombre = prompt("Ingrese su nombre");
alert(nombre);