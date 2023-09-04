//Set nos ayuda a modificar valores del objeto
//El metodo get es para obtener valores de nuestro objeto
let persona= {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'perez@mail.com',
    edad: 25,
    idioma: 'es',
    get lang(){
        return this.idioma.toUpperCase(); //ToUpperCase es un metodo que convierte un string en mayusculas

    },
    set lang(lang){
        this.idioma = lang.toUpperCase();
    },
    //Creando un metodo(funcion) en el objeto
    //Agregamos get y ya no es necesario agregar el function
    get nombreCompleto(){
        //Para acceder a los atributos utilizamos this
        return this.nombre + ' ' + this.apellido
    }
}
//Para imprimir la funcion ya no es necesario agregar parentesis
console.log(persona.nombreCompleto);

console.log(persona.lang);
//Para modificar valor
persona.lang = 'en';
console.log(persona.lang);
//Para ver si esta realizando el cambio
console.log(persona.idioma);
