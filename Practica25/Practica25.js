var peso= prompt("Ingresa tu peso: ");
var opcion=prompt("1 Peso en marte\n2 Peso en jupiter\nIngresa la opción a comparar: ");
var pesoT=9.807;
var pesoM=3.71;
var pesoJ=24.79;
var resultado=0;
// switch(opcion){
//          case "1":
//             resultado= (peso*pesoM)/pesoT;
//                 alert("Su peso es: "+resultado);
//             break;
//              case "2":
//                 resultado= (peso*pesoJ)/pesoT;
//                 alert("Su peso es: "+resultado);
//              break;
//              default:
//                 alert("No es una opción.");
//              break;
//      }

if(opcion==1){
    resultado= (peso*pesoM)/pesoT;
    alert("Su peso es: "+resultado);
}
else if (opcion==2){
    resultado= (peso*pesoJ)/pesoT;
    alert("Su peso es: "+resultado);
}
else {
   alert("No es una opción")
}