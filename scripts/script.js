function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const listaOpciones = ["PIEDRA" , "PAPEL" , "TIJERAS"];

const getComputerChoice = () => {
    return listaOpciones[getRandomInt(3)];
}


const playRound = (playerSelection , computerSelection) => {
    let selectionPla = playerSelection.toUpperCase();
    if( (selectionPla == listaOpciones[0] && computerSelection == listaOpciones[2]) ||
        (selectionPla == listaOpciones[1] && computerSelection == listaOpciones[0]) ||
        (selectionPla == listaOpciones[2] && computerSelection == listaOpciones[1]) ){
            console.log("You win, " + selectionPla + " wins against " + computerSelection);
    } else {
        console.log("You lose, " + selectionPla + " loses against " + computerSelection);
    }
}

console.log(playRound("papel",getComputerChoice()));


