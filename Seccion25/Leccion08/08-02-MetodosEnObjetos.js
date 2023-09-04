//Creando un objeto
let persona= {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'perez@mail.com',
    edad: 25,
    //Creando un metodo(funcion) en el objeto
    nombreCompleto: function(){
        //Para acceder a los atributos utilizamos this
        return this.nombre + ' ' + this.apellido
    }
}

//Podemos acceder a las propiedades de forma individual:
console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.email);
console.log(persona.nombreCompleto());

//Podemos imprimir todo el objeto
console.log(persona);