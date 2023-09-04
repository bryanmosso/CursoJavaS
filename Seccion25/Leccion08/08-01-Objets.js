/*Un objeto cuenta con propiedades y metodos
*/

//Un tipo primitivo no tiene propiedades ni metodos, por ejemplo:
let x=10;
console.log(x.length);

//Creando un objeto
let persona= {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'perez@mail.com',
    edad: 25
}

//Podemos acceder a las propiedades de forma individual:
console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.email);

//Podemos imprimir todo el objeto
console.log(persona);