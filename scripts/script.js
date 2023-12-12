function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const listaOpciones = ["Piedra" , "Papel" , "Tijeras"];

const getComputerChoice = () => {
    return listaOpciones[getRandomInt(3)];
}
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
