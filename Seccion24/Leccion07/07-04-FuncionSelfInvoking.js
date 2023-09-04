//Esta funcion se manda a llamar asi misma
//Pero solo se puede utilizar una sola vez porque no le damos nombre
(function (a,b){
    console.log('Ejecuntando la funcion: '+ (a+b));
})(6,7);