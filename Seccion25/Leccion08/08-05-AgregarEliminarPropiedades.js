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
//Agregando propiedades
persona.tel = '7331529519';
//Modificando propiedad
persona.tel = '556789032';
console.log(persona);
//Eliminando una propiedad del objeto
delete persona.tel;
console.log(persona);
