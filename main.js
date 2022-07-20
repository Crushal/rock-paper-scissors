function computerPlay() {
    let computer = ["rock", "paper", "scissors"]
    let equal = computer[Math.floor(Math.random() * computer.length)]
    return equal  
}

function singleRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Draw!"
    }
    else if(playerSelection == "rock"){
        if (computerSelection == "scissors"){
            return true
        }
        else {
            return false
        }
    }
    else if(playerSelection == "paper"){
        if(computerSelection == "rock"){
            return true
        }
        else {
            return false
        }
    }
    else if(playerSelection == "scissors"){
        if(computerSelection == "paper"){
            return true
        }
        else {
            return false
        }
    }
}

function moreThanFive (playerScore, computerScore){
    if(playerScore >= 5 || computerScore >= 5) {
        return true
    }
    return false
}

let playerScore = 0
let computerScore = 0

const scoreBoard = document.querySelector(".scoreBoard")
const computerChoice = document.querySelector(".computerChoice")
const playerChoice = document.querySelector(".playerChoice")
const decider = document.querySelector(".decider")

scoreBoard.textContent = `Player Score : ${playerScore} | Computer Score : ${computerScore}`

function game (result) {
    if (result == true) {
        decider.textContent = "You Won!"
        playerScore++
        scoreBoard.textContent = `Player Score : ${playerScore} | Computer Score : ${computerScore}`
    }
    else if (result == false) {
        decider.textContent = "You Lost!"
        computerScore++
        scoreBoard.textContent = `Player Score : ${playerScore} | Computer Score : ${computerScore}`
    }
    else {
        decider.textContent = "Draw!"
    }
}

const rock = document.querySelector(".rock")
rock.addEventListener("click", function(e) {
    result = singleRound("rock", computerPlay())
    computerChoice.textContent = computerPlay()
    game(result)
})

const paper = document.querySelector(".paper")
paper.addEventListener("click", function(e) {
    result = singleRound("paper", computerPlay())
    computerChoice.textContent = computerPlay()
    game(result)
})

const scissors = document.querySelector(".scissors")
scissors.addEventListener("click", function(e) {
    result = singleRound("scissors", computerPlay())
    computerChoice.textContent = computerPlay()
    game(result)
})

