let miNumero=18;
console.log(miNumero);

//Conversion
let edad=Number(miNumero);

//Ejemplo para preguntar si alguien puede votar
if (edad>=18){
    console.log("Puede votar");
}
else{
    console.log("No puede votar");
}
//Mismo ejemplo usando el operador ternario
let resultado=(edad>=18)? "Puede votar":"No puede votar";
console.log(resultado);
