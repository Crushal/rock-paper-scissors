function computer_play() {
    game = ["Rock", "Paper", "Scissors"]
    return game[Math.floor(Math.random() * game.length)]
}

function play_round(player_selection, computer_selection) {
    if(player_selection.toLowerCase() === "rock" && computer_selection.toLowerCase() === "scissors" ||
    player_selection.toLowerCase() === "paper" && computer_selection.toLowerCase() === "rock" ||
    player_selection.toLowerCase() === "scissors" && computer_selection.toLowerCase() === "paper") {
        return `You Won! ${player_selection} beats ${computer_selection}`
    }
    return `You Lost! ${computer_selection} beats ${player_selection}`
}