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
