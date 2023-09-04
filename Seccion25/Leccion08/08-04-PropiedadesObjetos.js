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

//Formas de acceder a las propiedades del objeto
console.log(persona.nombre);
console.log(persona['apellido']);

//Podemos recorrer todas las propiedades de nuestro objeto con un
//ciclo for, pero especial, for in

for(nombrePropiedad in persona){
    //Recorremos las propiedades
    console.log(nombrePropiedad);
    //Recorremos los valores de las propiedades
    console.log(persona[nombrePropiedad]);

}