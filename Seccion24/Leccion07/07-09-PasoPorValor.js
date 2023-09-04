//Tipo primitivo

let x=10;

function cambiarValor(a){
    a=20;
}
//Llamando a la funcion
//Paso por valor
cambiarValor(x);
console.log(x);
//console.log(a); Como se le pasa el valor nuestra variable a se destruye
