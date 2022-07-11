function computerPlay() {
    let choice = ["rock", "paper", "scissors"]
    return choice[Math.floor(Math.random() * choice.length)]
}
function singleRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === computerSelection) {
        return "Draw!"
    }
    else if (playerSelection.toLowerCase() === "rock") {
        if (computerSelection === "scissors") {
            return true
        }
        else {
            return false
        }
    }
    else if (playerSelection.toLowerCase() === "paper"){
        if (computerSelection === "rock") {
            return true
        }
        else {
            return false
        }
    }
    else if (playerSelection.toLowerCase() === "scissors") {
        if (computerSelection === "paper") {
            return true
        }
        else {
            return false
        }
    }
}

function game() {
    let playerScore = 0
    let computerScore = 0
    for (let i = 0; i < 5; i++){
        let computer = computerPlay()
        let player = prompt("Rock, Paper or Scissors:")
        let oneRound = singleRound(player, computer)
        console.log(player)
        console.log(computer)
        console.log(oneRound)
        if (oneRound === true) {
            playerScore++
        }
        else if (oneRound === false) {
            computerScore++
        }
    }
    return [playerScore, computerScore]
}
console.log(game())