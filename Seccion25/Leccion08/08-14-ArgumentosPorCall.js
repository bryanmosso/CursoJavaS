//Call nos ayuda para usar metodos que no definimos en todos
// los objetos que hemos declarado, ejemplo:

//Creando un objeto
let persona1 = {
    nombre: 'Kevin',
    apellido: 'Mosso',
    //Agregamos parametros
    nombreCompleto: function(titulo,tel){
        return titulo+ ': '+ this.nombre + ' ' + this.apellido+ ', '+ tel;
    }
}

//Creando otro objeto
let persona2 = {
    nombre: 'Bryan',
    apellido: 'Mosso'
}
console.log(persona1.nombreCompleto('Lic', '11223344'));
//Usando call para aplicar el metodo a persona 2
//Como podemos ver tambien se pasan los parametros que asignamos
//Pero con distintos valores ya que estamos usando el metodo en otro objeto
console.log(persona1.nombreCompleto.call(persona2,'Ing', '55667788'));
