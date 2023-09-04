//Funcion constructor de objetos tipo persona
function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
}

//Creando objeto pero utilizando el constructor
let padre = new Persona('Juan', 'Perez', 'jperez@mail.com');
console.log(padre);
//Creamos otro objeto distinto pero utilizando el constructor
let madre = new Persona('Ana', 'Salgado', 'asalgado@mail.com');
console.log(madre);

//Podemos modificar los parametros de un objeto sin afectar al otro
padre.apellido = 'Mosso';
//Imprimienod para ver los cambios
console.log(padre);
console.log(madre);