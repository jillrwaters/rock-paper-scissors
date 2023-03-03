const choices = ["rock", "paper", "scissors"]


function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3)
    return choices[choice]
}

// RPS BUTTONS
const rock = document.querySelector("#rock")
const paper = document.querySelector("#paper")
const scissors = document.querySelector("#scissors")


// DISPLAY RESULTS
const results = document.querySelector("#results")
const humanResult = document.createElement("p")
const computerResult = document.createElement("p")
const winner = document.createElement("p")
    results.appendChild(winner)
    winner.style.color = "blue"
const scores = document.querySelector("#scores")


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

    humanResult.textContent = `You chose ${humanChoice}.`
    computerResult.textContent = `I, The Computer, chose ${computerChoice}.`
    results.appendChild(humanResult)
    results.appendChild(computerResult)

    if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "scissors" && computerChoice === "paper") || (humanChoice === "paper" && computerChoice === "rock")) {
        winner.style.color = "blue"            
        winner.textContent = `You win this round, human.`
        keepScore("human")
    }
    else if (humanChoice === computerChoice) {
        winner.style.color = "green"
        winner.textContent = `Tie!`
        keepScore("tie")
    }
    else {
        winner.style.color = "red"
        winner.textContent = `I win this round, human!`
        keepScore("computer")
    }
    
}

let humanScore = 0
let computerScore = 0
let ties = 0

function keepScore(winner){
    switch(winner){
        case "human":
            humanScore++
            break;
        case "computer":
            computerScore++
            break;
        case "tie":
            ties++
            break;
    }
    scores.textContent = `Human: ${humanScore} | Computer: ${computerScore} | Ties: ${ties}`
}


function declareWinner(){
    console.log(`${endGame()}`)
    humanResult.textContent = ''
    computerResult.textContent = ''
}

function endGame(){
    if (humanScore === 5){
        return "You won the game, human."
    }
    else if (computerScore === 5){
        return "I beat you, human! I win the game."
    }
    else if (ties === 5){
        return "The game was a tie."
    }
}

declareWinner()















// function game(humanChoice) {
//     let computerScore = 0
//     let humanScore = 0
//     let ties = 0

//     for (let i = 0; i < 5; i++) {
//         let result = playRound(getComputerChoice(), humanChoice)
//         if (result === "human") {
//             humanScore++
//         }
//         else if (result === "computer") {
//             computerScore++
//         }
//         else {
//             ties++
//         }
//         scores.textContent = `Computer: ${computerScore} | Human: ${humanScore}`
        
//     }

//     console.log('FINAL SCORE:')
//     console.log(`Computer: ${computerScore} | You: ${humanScore}`)

//     if (computerScore > humanScore) {
//         console.log("YOU LOSE, HUMAN. I, THE COMPUTER, HAVE BEAT YOU. HA!")
//     }
//     else if (humanScore > computerScore) {
//         console.log("You win, human. Good game.")
//     }
//     else {
//         console.log("Tied game. Rematch?")
//     }

//     let button = document.querySelector("button")
//     button.innerText = "REMATCH"
// }

