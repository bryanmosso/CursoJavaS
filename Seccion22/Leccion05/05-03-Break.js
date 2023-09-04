/*
Podemos utilizar break para cortar un ciclo
Que querramos que ya no se ejecute
*/

//Ejercicio para imprimir numero pares del 2 al 10, solo el primer numero par
for(let contador=0; contador<=10; contador++){

    if(contador %2==0){
        console.log(contador);
        break; //Se utiliza para cortar el ciclo y solo imprime el primer numero
    }
}
console.log('Fin de ciclo for');