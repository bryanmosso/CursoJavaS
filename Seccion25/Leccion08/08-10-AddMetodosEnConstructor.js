//Funcion constructor de objetos tipo persona
function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    //Agregando metodo al constructor de nombre completo
    //Al agregarlo aqui podemos utilizarlo en cualquier objeto que creemos
    this.nombreCompleto = function(){
        return this.nombre + ' ' + this.apellido;
    }
}

//Creando objeto pero utilizando el constructor
let padre = new Persona('Juan', 'Perez', 'jperez@mail.com');
//Imprimiendo el nuevo metodo
console.log(padre.nombreCompleto()); //Como es una funcion no olvidar los parentesis para los parametros
//Creamos otro objeto distinto pero utilizando el constructor
let madre = new Persona('Ana', 'Salgado', 'asalgado@mail.com');
console.log(madre.nombreCompleto());

//Podemos modificar los parametros de un objeto sin afectar al otro
padre.apellido = 'Mosso';
//Imprimienod para ver los cambios
console.log(padre);
console.log(madre);