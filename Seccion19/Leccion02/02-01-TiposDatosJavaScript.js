//Tipos de datos

//Dato string
var nombre = "Bryan";
console.log(nombre);

//Podemos reutilizar variables
nombre = 100
//Al agregar typeof se sabe que tipo de dato es
console.log(typeof nombre);


//Dato numerico
var numero = "1000";
console.log(numero);

//Dato del tipo objeto
var objeto = {
    //Se utilizan dos puntos y la coma es para agregar propiedades al objeto
    nombre : "Mosso",
    apellido : "Lopez",
    telefono : "7331529519"
}
console.log(objeto);

//Dato boolean (verdadero o falso)
var bandera = false;
console.log(typeof bandera);

//Tipo de dato funcion
function miFuncion(){}
    console.log(typeof miFuncion);

//Tipo de dato simnbolo
var simbolo = Symbol("Mi simbolo");
console.log(typeof simbolo);

//Tipo de dato clase, que es una funcion
class Persona{
    //tiene atributos pero usa un constructor
    constructor(nombre, apellido){
    //Inicializando los atributos
    this.nombre = nombre; 
    this.apellido = apellido;

    }
}
console.log(typeof Persona);

//Tipo de dato undefine
var x;
console.log(typeof x);

//null (ausencia de valor)
var y = null;
console.log(typeof y);

//Tipo de dato arreglo
var autos = ["BMW", "Audi", "Volvo"];
console.log(autos);
console.log(typeof autos);

//Valores vacios
var z="";
console.log(z)
console.log(typeof z)
