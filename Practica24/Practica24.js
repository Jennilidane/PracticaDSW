// var num=10;
// if(num<10){
//     console.log("El número es menor a 10")
// }
// else if (num>10){
//     console.log("El número es mayor a 10")
// }else {
//     console.log("El número es igual a 10")
// }

// var estacion = prompt("Escribe una estación en minusculas: ");

// switch(estacion){
//     case "invierno":
//         alert("Todo es frío.");
//         break;
//         case "primavera":
//         alert("Todo florece.");
//         break;
//         case "verano":
//         alert("Todo es caliente.");
//         break;
//         case "otoño":
//         alert("Todo se marchita.");
//         break;
//         default:
//         alert("No es una estación pa.");
//         break;
// }


 var num1=prompt("Escribe un número: ");;
 var num2=prompt("Escribe otro número:");;
 if(num1<=num2){
     alert("El número 1 no es mayor a el número 2.")
 }
 else if (num1<=0){
    alert("El número es positivo.")
 }
 else if(++num1 < num2){
    alert("Incrementar 1 en mumero 1 no lo hace mayor que el numero 2")
 }
