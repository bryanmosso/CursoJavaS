//NaN significa is not a number
//Se usa para ver si estamos trabajando con numeros despues de la conversion
let miNumero="18x";
console.log(miNumero);

//Conversion
let edad=Number(miNumero);

//Uso de is NaN
if(isNaN(edad)){
    console.log("No es un numero");
}
else{
    if (edad>=18){
        console.log("Puede votar");
    }
    else{
        console.log("No puede votar");
    }
}

//Mismo ejemplo usando el operador ternario y isNaN
if(isNaN(edad)){
    console.log("No es un numero");
}
else{
    let resultado=(edad>=18)? "Puede votar":"No puede votar";
    console.log(resultado);
}

