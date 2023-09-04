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
//Podemos agregar propiedades o metodos nuevos al constructor para todos
// los objetos usan prototype:
Persona.prototype.tel =' 55443322';

//Creando objeto pero utilizando el constructor
let padre = new Persona('Juan', 'Perez', 'jperez@mail.com');
//Imprimiendo el nuevo metodo
//Modificando el valor de la propiedad tel para el objeto padre
padre.tel = '7331529519';
console.log(padre.tel); //Como es una funcion no olvidar los parentesis para los parametros

//Creamos otro objeto distinto pero utilizando el constructor
let madre = new Persona('Ana', 'Salgado', 'asalgado@mail.com');
//Modificando el valor del tel para el objeto madre
madre.tel= '7331574343';
console.log(madre.tel);