let a=3, b=2, c=1, d=4;

let z= a * b+c/d;
console.log(z);

//Las operaciones se evaluan de izquierda a derecha
//De acuerdo a la table de prioridad
z=c+a*b/d;
console.log(z);

//Podemos cambiar la prioridad usando parentesis
z=(c+a)*b/c;
console.log(z);

