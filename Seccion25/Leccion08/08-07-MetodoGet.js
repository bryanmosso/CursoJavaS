//El metodo get es para obtener valores de nuestro objeto
let persona= {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'perez@mail.com',
    edad: 25,
    //Creando un metodo(funcion) en el objeto
    //Agregamos get y ya no es necesario agregar el function
    get nombreCompleto(){
        //Para acceder a los atributos utilizamos this
        return this.nombre + ' ' + this.apellido
    }
}
//Para imprimir la funcion ya no es necesario agregar parentesis
console.log(persona.nombreCompleto);
