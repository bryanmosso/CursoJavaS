//Declaracion de una funcion
function miFunction(a,b){
    //cuerpo o instrucciones que realizara la funcion
    console.log(arguments.length) //Es una propiedad que nos dice cuantos argumentos esta recibiendo nuestra funcion
    return a+b;
}

//Llamando a la funcion
//Tenemos que darle los argumentos que declaramos y va a utilizar
let resultado = miFunction(2,3);
console.log(resultado);

console.log(typeof miFunction);
//Tambien podemos utilizar metodos como en los objetos
var miFunctionTexto = miFunction.toString();
console.log(miFunctionTexto);