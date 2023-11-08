let Semana = ["Lunes", "Martes", "Miercoles","Jueves","Viernes","Sábado"];//Crear el arreglo

// let primero = frutas[0]; //VIZUALIZAR UN ELEMENTO DEL ARREGLO
// let ultimo = frutas[frutas.length - 1];//VIZUALIZAR EL ULTIMO ELEMENTO DEL ARREGLo
//alert(primero+" "+ultimo);Alert para mostrar los elementos

let nuevodía = Semana.push("Domingo"); //Agregar un nuevo elemento


//let ultimo = frutas.pop();//Eliminar un elemento del arreglo

let pos = Semana.indexOf("Martes");
let elementoEliminado = Semana.splice(pos,1);//Eliminar un elemento del arreglo

Semana.forEach(function (elemento, indice, array) {
    console.log(elemento+": "+indice);
});

