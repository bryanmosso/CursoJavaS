let a=3, b=2;
let z=a+b;
//Incremento
//Pre-incremento
z=++a;
console.log(a);
console.log(z); //Incrementa y despues asigna por eso tienen el mismo valor

//Post-incremento
z=b++;
console.log(b);
console.log(z); //Se queda con el primer valor asignado

//Decremento, funciona igual solo que dismuye valores
//Pre-decremento
z=--a;
console.log(a);
console.log(z);

//Pos-decremento;
z=b--;
console.log(b);
console.log(z);