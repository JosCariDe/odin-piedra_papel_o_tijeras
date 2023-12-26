function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const listaOpciones = ["PIEDRA" , "PAPEL" , "TIJERA"];

const getComputerChoice = () => {
    return listaOpciones[getRandomInt(3)];
}


const playRound = (playerSelection , computerSelection) => {
    let selectionPla = playerSelection.toUpperCase();
    if( (selectionPla == listaOpciones[0] && computerSelection == listaOpciones[2]) ||
        (selectionPla == listaOpciones[1] && computerSelection == listaOpciones[0]) ||
        (selectionPla == listaOpciones[2] && computerSelection == listaOpciones[1]) ){
            return "You win, " + selectionPla + " wins against " + computerSelection;
    }else if (selectionPla == computerSelection) {
        return "Empate, " + selectionPla + " empata contra " + computerSelection;
    } else {
        return "You lose, " + selectionPla + " loses against " + computerSelection;
    }
}

const game = () => {

    let puntosJugador = 0;
    let puntosMaquina = 0;

    let opcionJugador;

    let resultadoRonda;
    
    for (let i = 0; i < 5 ; i++) {

        opcionJugador = prompt("Ingresa la Mano que desea jugar; piedra, papel o tijera",null);

        resultadoRonda = playRound(opcionJugador,getComputerChoice());

        resultadoRonda[4] == "w" ? puntosJugador++ : 
        resultadoRonda[4] == "l" ? puntosMaquina++ : null;

        console.log(resultadoRonda);
    }

    let mensajeVictoriaFinal =  puntosJugador > puntosMaquina ? "El jungador ganó"  : 
                                puntosMaquina > puntosJugador ? "La maquina ganó"   :
                                "Empate, no hay ganador";

    console.log(mensajeVictoriaFinal);
}

    let puntosJugador = 0;
    let puntosMaquina = 0;

    let resultadoRonda;

const btnOpciones = document.querySelectorAll('.btn');
const divResultado = document.querySelector('#resultado');


btnOpciones.forEach( (btn) => {
    btn.addEventListener('click' , (e) => { 
        resultadoRonda = playRound(btn.textContent,getComputerChoice());
        divResultado.textContent = resultadoRonda;
        contadorPuntaje(resultadoRonda);
    })  
})

const jugadorProgreso = document.querySelector('#jugador-progreso');
const maquinaProgreso = document.querySelector('#maquina-progreso');

const contadorPuntaje = (resultadoRonda) => {

    if(resultadoRonda[4] == 'w') {
        puntosJugador++;
        jugadorProgreso.textContent = puntosJugador;
    } else if(resultadoRonda[4] == 'l') {
        puntosMaquina++;
        maquinaProgreso.textContent = puntosMaquina;
    }

    if(puntosJugador == 5 ) alert('El jugador ya consiguió 5 puntos y la maquina ' + puntosMaquina);
    if(puntosMaquina == 5 ) alert('La Maquina ya consiguió 5 puntos y el jugador ' + puntosJugador);
}




