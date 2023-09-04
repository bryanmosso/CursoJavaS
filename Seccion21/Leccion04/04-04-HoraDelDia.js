/*
6am-11am buenos dias
12pm-18pm buenas tardes
19pm-24pm buenas noches
0-6am durmiendo*/

let hora=20;
let mensaje;

if(hora>=6 && hora<=11){
    mensaje= "Buenos dias";
}
else if (hora>=12 && hora<=18){
    mensaje= "Buenas tardes";
}
else if (hora>=19 && hora<=24){
    mensaje= "Buenas noches";
}
else if (hora>=0 && hora<6){
    mensaje= "Durmiendo";
}
else{
    mensaje= "Hora indicada erronea";
}
console.log(mensaje);
