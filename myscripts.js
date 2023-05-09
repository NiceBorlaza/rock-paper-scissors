const playerSelection = ''
const computerSelection = ''
let result = ''
let computerScore = 0
let playerScore = 0


function getComputerChoice() {
    const choices = ["rock", "paper", "scissor"]
    const random = Math.floor(Math.random() * choices.length)
    return pick = choices[random]
}

function playRound(playerSelection, computerSelection) {
    playerSelection = prompt("Enter your pick")
    computerSelection = getComputerChoice()
    if (playerSelection === computerSelection) {
        result = "tie"
    }
    else if (playerSelection === "rock" && computerSelection === "scissor") {
        result = "player scores";
        playerScore = playerScore + 1
    }
    else if (playerSelection === "rock" && computerSelection === "paper") {
        result = "computer scores"
        computerScore += 1
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        result = "player scores";
        playerScore = playerScore + 1
    }
    else if (playerSelection === "paper" && computerSelection === "scissor") {
        result = "computer scores";
        computerScore += 1
    }
    else if (playerSelection === "scissor" && computerSelection === "paper") {
        result = "player scores";
        playerScore = playerScore + 1
    }
    else if (playerSelection === "scissor" && computerSelection === "rock") {
        result = "computer scores";
        computerScore += 1
    }
    return result 

}

function game() {
    console.log("round result " + playRound(playerSelection, computerSelection))
    console.log("player score " + playerScore)
    console.log("computer score " + computerScore)
    console.log("round result " + playRound(playerSelection, computerSelection))
    console.log("player score " + playerScore)
    console.log("computer score " + computerScore)
    console.log("round result " + playRound(playerSelection, computerSelection))
    console.log("player score " + playerScore)
    console.log("computer score " + computerScore)
    console.log("round result " + playRound(playerSelection, computerSelection))
    console.log("player score " + playerScore)
    console.log("computer score " + computerScore)
    console.log("round result " + playRound(playerSelection, computerSelection))
    console.log("player score " + playerScore)
    console.log("computer score " + computerScore)

    if (playerScore > computerScore) {
        console.log("player wins the game")
    }
    else if (playerScore < computerScore) {
        console.log("computer wins the game")
    }
    else {
        console.log("tie game")
    }
}
game()




