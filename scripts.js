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
    computerResult.textContent = `I, the computer, chose ${computerChoice}.`
    results.appendChild(humanResult)
    results.appendChild(computerResult)

    if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "scissors" && computerChoice === "paper") || (humanChoice === "paper" && computerChoice === "rock")) {
        winner.style.color = "blue"            
        winner.textContent = `You win, human.`
        return "human"
    }
    else if (humanChoice === computerChoice) {
        winner.style.color = "green"
        winner.textContent = `Tie!`
        return "tie"
    }
    else {
        winner.style.color = "red"
        winner.textContent = `I beat you, human!`
        return "computer"
    }
    
}






// function game() {
//     let computerScore = 0
//     let humanScore = 0
//     let ties = 0

//     for (let i = 0; i < 5; i++) {
//         let result = playRound(getComputerChoice(), getHumanChoice())
//         if (result === "human") {
//             humanScore++
//         }
//         else if (result === "computer") {
//             computerScore++
//         }
//         else {
//             ties++
//         }
//         console.log(`Computer: ${computerScore} | Human: ${humanScore}`)
//         console.log("-----------------------------")
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

