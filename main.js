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

const rock = document.querySelector(".rock")
rock.addEventListener("click", function(e){
    singleRound("rock", computerPlay())
    console.log("rock")
})

const paper = document.querySelector(".paper")
paper.addEventListener("click", function(e){
    singleRound("paper", computerPlay())
    console.log("paper")
})

const scissors = document.querySelector(".scissors")
scissors.addEventListener("click", function(e){
    singleRound("scissors", computerPlay())
    console.log("scissors")
})


// const paper = document.querySelector(".paper")
// paper.addEventListener("click", function(e){
//     singleRound("paper", computerPlay())
// })


// const scissors = document.querySelector(".scissors")
// scissors.addEventListener("click", function(e){
//     singleRound("scissors", computerPlay())
// })
// function game() {
//     let playerScore = 0
//     let computerScore = 0
//     for (let i = 0; i < 5; i++){
//         let computer = computerPlay()
//         let player = prompt("Rock, Paper or Scissors:")
//         let oneRound = singleRound(player, computer)
//         console.log(player)
//         console.log(computer)
//         console.log(oneRound)
//         if (oneRound === true) {
//             playerScore++
//         }
//         else if (oneRound === false) {
//             computerScore++
//         }
//     }
//     return [playerScore, computerScore]
// }