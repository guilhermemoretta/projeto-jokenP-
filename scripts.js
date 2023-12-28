const result = document.querySelector('.result')
const humanScore = document.querySelector('#human-score')
const machineScore = document.querySelector('#machine-score')

let humanScoreNumber = 0
let machineScoreNuumber = 0

//ENUMS
const GAME_OPTIONS = {
    ROCK: 'rock',
    PAPER: 'paer',
    SCISSORS: 'scissors'

}

const playHuman = (humanChoice) => {

    playTheGame(humanChoice, playMachine())
    

}

const playMachine = () => {
    const choices = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor( Math.random() * 3)


    return choices[randomNumber]
}

const playTheGame = (human, machine) => {
    console.log('Humano: ' + human + 'Maquina: ' + machine)

    if(human ===machine){
        result.innerHTML = "Deu empate!"
    } else if ( 
      (human === 'paper' && machine ==='rock') ||
      (human === 'rock' && machine === 'scissors') ||
      (human === 'scissors' && machine === 'paper')
    ) {
      humanScoreNumber++
      humanScore.innerHTML = humanScoreNumber
      result.innerHTML = "Você ganhou!"
    } else {
      machineScoreNuumber++
      machineScore.innerHTML = machineScoreNuumber
      result.innerHTML = "Você perdeu perdeu para a Alexa!"
    }
}