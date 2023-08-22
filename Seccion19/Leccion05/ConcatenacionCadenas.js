var nombre = "Bryan";
var apellido = "Mosso";

var nombrecompleto= nombre +" " + apellido;
console.log(nombrecompleto);

//No es necesario hacer variables
var nombrecompleto2= "Kevin" + " " + "Mosso";
console.log(nombrecompleto2);

//Detecta de izquiera a derecha
var x= nombre + 2 + 4;
console.log(x);
//Para que detecte la suma se usa parentesis
x= nombre + (2+4);
console.log(x);

//Primer dato que detecta empieza a evaluar
x= 2+2+nombre;
console.log(x);
