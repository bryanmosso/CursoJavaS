/*Los parametros son las variables que vamos asignando
a la funcion
Y los argumentos son los valores que asignamos para que
sean utilizados al mandar a llamar la funcion
*/
let sumar= function (a=5,b=7) {
  //Podemos acceder a los argumentos utilizando el metodo arguments
  console.log(arguments[0]);
  console.log(arguments[1]);  
    return (a+b+arguments[2]);
};
//Podemos agregar argumentos sin la necesidad de darlos como parametros
resultado= sumar(3,3,7);
console.log(resultado);


