
//Array para añadir los elementos de las imagenes
let maravillas = ["chichen-itza.svg", "coliseo.svg", "cristo-redentor.svg", "machu-picchu.svg", "muralla-china.svg","petra.svg","taj-mahal.svg"];
let correcta = [1,0,2,1,2,0,1];//Array para las respuestas correctas


let opciones = [];//array para las opciones

//Combinación de opciones para cada imagen
opciones.push(["Machu Picchu", "Chichen Itza", "Coliseo"]);
opciones.push(["Coliseo", "Petra", "Cristo Redentor"]);
opciones.push(["Muralla China", "Taj Mahal", "Cristo Redentor"]);
opciones.push(["Petra", "Machu Picchu", "Taj Mahal"]);
opciones.push(["Chichen Itza", "Petra", "Muralla China"]);
opciones.push(["Petra", "Machu Pichu", "Chichen Itza"]);
opciones.push(["Coliseo", "Taj Mahal", "Cristo Redentor"]);

//variable para laposición en la que se encuentra el jugador con respecto a la pregunta
let posActual = 0;
let cantidadAcertadas = 0;//contador de las respuestas que son correctas

//función para el inicio del juego iniciando con la posición y arrancando el 
//contador del jugador y esconde la pantalla inicial y muestra a pantalla de juego
function comenzarJuego(){
    posActual = 0;
    cantidadAcertadas = 0;
    document.getElementById("pantalla-inicial").style.display = "none";
    document.getElementById("pantalla-juego").style.display = "block";
    cargarMaravilla();
}

//despliega las opciones que le corresponden a la posición en la que se encuentra el jugador 
//con respecto a la que se encuentre
function cargarMaravilla(){
    if(maravillas.length <= posActual){//es hasta donde se quiere llegar con respecto a la posición
        terminarJuego();//termina el juego si las opciones se terminan
    }
    else{
        limpiarOpciones();//limpia las opciones para desplegar las nuevas

        document.getElementById("imgMaravilla").src = "img/" + maravillas[posActual];
        document.getElementById("n0").innerHTML = opciones[posActual][0];
        document.getElementById("n1").innerHTML = opciones[posActual][1];
        document.getElementById("n2").innerHTML = opciones[posActual][2];
    }
}


//Limpiar las opciones que se le muestran para presentar las nuevas
function limpiarOpciones(){
    document.getElementById("n0").className = "nombre";
    document.getElementById("n1").className = "nombre";
    document.getElementById("n2").className = "nombre";
    document.getElementById("l0").className = "letra";
    document.getElementById("l1").className = "letra";
    document.getElementById("l2").className = "letra";
}

//evaluación de las opciones elegidas por el usuario y las guarda en una variable que es la elegida  y la compara para ver 
//si es la correcta y si lo es el contador de cantidad acertada aumenta y si no aumenta la de cantidad no acertada y 
//aumenta la posición actual para la evaluación de la siguiente opción
function comprobarRespuesta(opElegida){
    if(opElegida==correcta[posActual]){//acertó
        document.getElementById("n" + opElegida).className = "nombre nombreAcertada";
        document.getElementById("l" + opElegida).className = "letra letraAcertada";
        cantidadAcertadas++;
    }else{
        document.getElementById("n" + opElegida).className = "nombre nombreNoAcertada";
        document.getElementById("l" + opElegida).className = "letra letraNoAcertada";
        document.getElementById("n" + correcta[posActual]).className = "nombre nombreAcertada";
        document.getElementById("l" + correcta[posActual]).className = "letra letraAcertada";
    }
    posActual++;
    setTimeout(cargarMaravilla,1000);//el tiempo de espera entre una pregunt y otra
}
//esconde la pantalla juego y muestra la pantalla del final que despliega el 
//resultado del juego y mostrsr el numero de las respuestas correctas y de las incorrectas
function terminarJuego(){
    document.getElementById("pantalla-juego").style.display = "none";
    document.getElementById("pantalla-final").style.display = "block";
    document.getElementById("numCorrectas").innerHTML = cantidadAcertadas;
    document.getElementById("numIncorrectas").innerHTML = maravillas.length - cantidadAcertadas;
}

//Esconde la pantalla del juego final muestra la pantada de inicio y esconde la patalla
// de juego hasta que inicia nuevamente el juego el usuario
function volverAlInicio(){
    document.getElementById("pantalla-final").style.display = "none";
    document.getElementById("pantalla-inicial").style.display = "block";
    document.getElementById("pantalla-juego").style.display = "none";
}