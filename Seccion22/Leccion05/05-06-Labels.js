//No es recomendable usar etiquetas

inicio:
for(let contador=0; contador<10; contador++){

    if(contador %2 !==0){
        continue inicio; //Ir a la siguiente iteracion
        //Regresa al ciclo que esta despues de la palabra inicio
    }

    console.log(contador);
}