//Creando una clase
class Persona {
    //Creando un constructor
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

//Creando un objeto de nuestra clase persona
let persona1 = new Persona('Juan', 'Perez');
//Imprimiendo el primer objeto de la clase persona
console.log(persona1);

//Creando otro objeto
let persona2 = new Persona('Bryan', 'Mosso');
console.log(persona2);