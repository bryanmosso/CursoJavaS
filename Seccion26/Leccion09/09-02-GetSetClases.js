//Creando una clase
class Persona {
    //Creando un constructor
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }
    //Metodo get para obtener valores
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
}

//Creando un objeto de nuestra clase persona
let persona1 = new Persona('Juan', 'Perez');
persona1.nombre = 'Juan Carlos'; //Usando el metodo set para modificar el nombre
//Imprimiendo el primer objeto de la clase persona
console.log(persona1.nombre); //Utilizando el metodo get para obtener el nombre
