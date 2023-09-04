//Esta es la sintaxis anterior que se utilizaba para arreglos
//let autos= new Array ('BMW, Mercedes Benz, Volvo');

//Sintaxis actual
const autos= ['BMW', 'Mercedes Benz', 'Volvo'];
console.log(autos);

//Para pode acceder a un solo elemento indicamos su indice
console.log(autos[0]);
console.log(autos[1]);

for(let i=0; i<autos.length; i++){
    console.log(i + ':' + autos[i]);

}
//Para modificar un elemento del arreglo indicamos su indice y su nuevo valor
autos[1]= 'Ford';
console.log(autos[1]);
//Para añadir un elemento usamos la funcion .push
autos.push('Audi');
console.log(autos);
//Otra forma de agregar elementos es utilizando el tamaño de nuestro arreglo
console.log(autos.length); //Imprimiento el tamaño
//Añadiendo elemento
autos[autos.length]='Cadillac';
console.log(autos);
//Podemos añadir elementos en espacios que elijamos e incluso dejar elementos vacios
autos[6]='Porshe';
console.log(autos);


