//Call nos ayuda para usar metodos que no definimos en todos
// los objetos que hemos declarado, ejemplo:

//Creando un objeto
let persona1 = {
    nombre: 'Kevin',
    apellido: 'Mosso',
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido;
    }
}

//Creando otro objeto
let persona2 = {
    nombre: 'Bryan',
    apellido: 'Mosso'
}
console.log(persona1.nombreCompleto());
//Usando call para aplicar el metodo a persona 2
console.log(persona1.nombreCompleto.call(persona2));
