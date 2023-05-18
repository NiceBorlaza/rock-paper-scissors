let result = ''
let computerScore = 0
let playerScore = 0
let round = 0
const outcomeDiv = document.querySelector(".outcomeDiv")

function getComputerChoice() {
    const choices = ["rock", "paper", "scissor"]
    const random = Math.floor(Math.random() * choices.length)
    return pick = choices[random]
}

function playRound(playerSelection, computerSelection) {
    console.log("1", playerSelection, "2", computerSelection)
    computerSelection = getComputerChoice()
    if (playerSelection === computerSelection) {
        const p = document.createElement("p")
        p.innerText = "tie"
        outcomeDiv.appendChild(p)

    }
    else if (playerSelection === "rock" && computerSelection === "scissor") {
        const p = document.createElement("p")
        p.innerText = "rock beats scissors";
        playerScore = playerScore + 1
        outcomeDiv.appendChild(p)
    }
    else if (playerSelection === "rock" && computerSelection === "paper") {
        const p = document.createElement("p")
        p.innerText = "paper beats rock"
        computerScore += 1
        outcomeDiv.appendChild(p)
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        const p = document.createElement("p")
        p.innerText = "paper beats scissors";
        playerScore = playerScore + 1
        outcomeDiv.appendChild(p)
    }
    else if (playerSelection === "paper" && computerSelection === "scissor") {
        const p = document.createElement("p")
        p.innerText = "scissors beats rock";
        computerScore += 1
        outcomeDiv.appendChild(p)
    }
    else if (playerSelection === "scissor" && computerSelection === "paper") {
        const p = document.createElement("p")
        p.innerText = "scissors beats paper";
        playerScore = playerScore + 1
        outcomeDiv.appendChild(p)
    }
    else if (playerSelection === "scissor" && computerSelection === "rock") {
        const p = document.createElement("p")
        p.innerText = "rock beats scissors";
        computerScore += 1
        outcomeDiv.appendChild(p)
    } 

}

function scores() {
    const p1 = document.createElement("p")
    p1.textContent = "Player Score: " + playerScore
    outcomeDiv.appendChild(p1)
    const p2 = document.createElement("p")
    p2.textContent = "Computer Score: " + computerScore
    outcomeDiv.appendChild(p2)
    if (playerScore === 5 ) {
        const p3 = document.createElement("p")
        p3.textContent = "player beats computer"
        outcomeDiv.appendChild(p3)
    }else if (computerScore === 5) {
        const p3 = document.createElement("p")
        p3.textContent = "computer beats computer"
        outcomeDiv.appendChild(p3)
    }
}

const rockBtn = document.querySelector("#rockBtn");
rockBtn.addEventListener("click", () => {
    computerSelection = getComputerChoice()
    playerSelection = rockBtn.textContent
    playRound(playerSelection, computerSelection)
    scores();
});

const paperBtn = document.querySelector("#paperBtn");
paperBtn.addEventListener("click", () => {
    computerSelection = getComputerChoice()
    playerSelection = paperBtn.textContent
    playRound(playerSelection, computerSelection)
    scores();
});

const scissorBtn = document.querySelector("#scissorBtn");
scissorBtn.addEventListener("click", () => {
    computerSelection = getComputerChoice()
    playerSelection = scissorBtn.textContent
    playRound(playerSelection, computerSelection)
    scores();
});
