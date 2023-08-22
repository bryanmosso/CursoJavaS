//Operador Or (||)
//Ejemplo para saber si un padre puede asistir a un juego
let vacaciones=true, diaDescanso=false;
if (vacaciones || diaDescanso){ //Solo necesita un valor verdadero para que mande un resultado verdadero
    console.log("El padre puede asistir");
}
else{
    console.log("El padre esta ocupado");
}
