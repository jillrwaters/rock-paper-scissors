// VARIABLES
const choices = ["rock", "paper", "scissors"]
let humanScore = 0
let computerScore = 0
const rock = document.querySelector("#rock")
const paper = document.querySelector("#paper")
const scissors = document.querySelector("#scissors")
const results = document.querySelector("#results")
const roundResult = document.createElement("p")
const winner = document.createElement("p")
results.appendChild(winner)
const scores = document.querySelector("#scores")
const welcome = document.querySelector("#welcome")
const flexContainer = document.querySelector(".flex-container")


function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3)
    return choices[choice]
}

// START ROUND
rock.addEventListener("click", () => {
    playRound(getComputerChoice(), "rock")    
})
paper.addEventListener("click", () => {
    playRound(getComputerChoice(), "paper")
})
scissors.addEventListener("click", () => {
    playRound(getComputerChoice(), "scissors")
})

function playRound(computerChoice, humanChoice) {
    roundResult.textContent = `You chose ${humanChoice}. I, The Computer, chose ${computerChoice}.`
    results.appendChild(roundResult)

    if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "scissors" && computerChoice === "paper") || (humanChoice === "paper" && computerChoice === "rock")) {
        winner.style.color = "blue"            
        winner.textContent = `You win this round, human.`
        keepScore("human")
    }
    else if (humanChoice === computerChoice) {
        winner.style.color = "green"
        winner.textContent = `Tie! Try again.`
    }
    else {
        winner.style.color = "red"
        winner.textContent = `I win this round!`
        keepScore("computer")
    }
    checkScores()
    
}

function keepScore(winner){
    switch(winner){
        case "human":
            humanScore++
            break;
        case "computer":
            computerScore++
            break;
    }
    scores.textContent = `Human: ${humanScore} | Computer: ${computerScore}`
    
}

// END OF GAME
function checkScores(){
    if (humanScore === 5){
        clearScreen()
        winner.textContent = `You won the game, human.`
    }
    else if (computerScore === 5){
        clearScreen()
        winner.textContent = `I beat you, human! I win the game.`
    }
}

function clearScreen() {
    
    choicesContainer.removeChild(rock)
    choicesContainer.removeChild(paper)
    choicesContainer.removeChild(scissors)
    results.removeChild(roundResult)
    results.removeChild(computerResult)
    flexContainer.removeChild(welcome)
}
