//Declaracion de una funcion expresion
let sumar= function (a,b) {return (a+b)};
resultado= sumar(3,3);
console.log(resultado);

//Funcion tipo flecha
//No es necesario usar la palabra function ni return
const sumarFuncionTipoFlecha = (a,b) => (a+b);
resultado = sumarFuncionTipoFlecha;
console.log(resultado(5,3));
