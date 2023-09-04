//Ejemplo para sumar todos los argumentos de una funcion
//Pero sin dar parametros

let resultado= sumarTodo(10, 5, 9, 8, 7,20);
console.log(resultado);

function sumarTodo(){
    let suma=0
    for(i=0; i< arguments.length; i++){

    suma+= arguments[i];
    }
    return suma;

}