//Array para añadir los elementos de las imagenes
let series = ["bones.svg", "los-simpson.svg", "the-office.svg","lucifer.svg","got.svg","the-crown.svg","you.svg","hora-de-aventura.svg","friends.svg","big-bang-theory.svg"];
let correcta = [0,3,2,0,2,0,1,3,3,1];//Array para las respuestas correctas


let opciones = [];//array para las opciones

//Combinación de opciones para cada imagen
opciones.push(["Bones", "The crown", "The big bang theory", "Los simpson"]);
opciones.push(["Bones", "Hora de aventura", "The big bang theory", "Los simpson"]);
opciones.push(["Lucifer", "You", "The office", "Game of thrones"]);
opciones.push(["Lucifer", "You", "The office", "los simpson"]);
opciones.push(["The crown", "Friends", "Game of thrones", "Hora de aventura"]);
opciones.push(["The crown", "Friends", "Game of thrones", "The office"]);
opciones.push(["Hora de aventura", "You", "Los simpson", "The office"]);
opciones.push(["You", "The office", "Los simpson", "Hora de aventura"]);
opciones.push(["The big bang theory", "Game of thrones", "The crown", "Friends"]);
opciones.push(["Friends", "The big bang theory", "Game of thrones", "The crown"]);


//variable para laposición en la que se encuentra el jugador con respecto a la pregunta
let posActual = 0;
let cantidadAcertadas = 0;//contador de las respuestas que son correctas

//función para el inicio del juego iniciando con la posición y arrancando el 
//contador del jugador y esconde la pantalla inicial y muestra a pantalla de juego
function comenzarJuego2(){
    posActual = 0;
    cantidadAcertadas = 0;
    document.getElementById("pantalla-inicial").style.display = "none";
    document.getElementById("pantalla-juego").style.display = "block";
    cargarSerie();
}

//despliega las opciones que le corresponden a la posición en la que se encuentra el jugador con respecto a la que se encuentre
function cargarSerie(){
    if(series.length <= posActual){//es hasta donde se quiere llegar con respecto a la posición
        terminarJuego();//termina el juego si las opciones se terminan
    }
    else{
        limpiarOpciones();//limpia las opciones para desplegar las nuevas

        document.getElementById("imgSerie").src = "img/" + series[posActual];
        document.getElementById("n0").innerHTML = opciones[posActual][0];
        document.getElementById("n1").innerHTML = opciones[posActual][1];
        document.getElementById("n2").innerHTML = opciones[posActual][2];
        document.getElementById("n3").innerHTML = opciones[posActual][3];
    }
}


//Limpiar las opciones que se le muestran para presentar las nuevas
function limpiarOpciones(){
    document.getElementById("n0").className = "nombre";
    document.getElementById("n1").className = "nombre";
    document.getElementById("n2").className = "nombre";
    document.getElementById("n3").className = "nombre";
    document.getElementById("l0").className = "letra";
    document.getElementById("l1").className = "letra";
    document.getElementById("l2").className = "letra";
    document.getElementById("l3").className = "letra";
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
    setTimeout(cargarSerie,1000);//el tiempo de espera entre una pregunt y otra
}
//esconde la pantalla juego y muestra la pantalla del final que despliega el 
//resultado del juego y mostrsr el numero de las respuestas correctas y de las incorrectas
function terminarJuego(){
    document.getElementById("pantalla-juego").style.display = "none";
    document.getElementById("pantalla-final").style.display = "block";
    document.getElementById("numCorrectas").innerHTML = cantidadAcertadas;
    document.getElementById("numIncorrectas").innerHTML = series.length - cantidadAcertadas;
}

//Esconde la pantalla del juego final muestra la pantada de inicio y esconde la patalla
// de juego hasta que inicia nuevamente el juego el usuario
function volverAlInicio(){
    document.getElementById("pantalla-final").style.display = "none";
    document.getElementById("pantalla-inicial").style.display = "block";
    document.getElementById("pantalla-juego").style.display = "none";
}