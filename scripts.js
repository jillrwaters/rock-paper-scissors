const choices = ["rock", "paper", "scissors"]
var humanChoice

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3)
    return choices[choice]
}

// RPS BUTTONS
const rock = document.querySelector("#rock")
const paper = document.querySelector("#paper")
const scissors = document.querySelector("#scissors")


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

    console.log("I chose:", computerChoice, "| You chose:", humanChoice)

    if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "scissors" && computerChoice === "paper") || (humanChoice === "paper" && computerChoice === "rock")) {
        console.log(`You win this round, human. ${humanChoice} beats ${computerChoice}.`)
        return "human"
    }
    else if (humanChoice === computerChoice) {
        console.log("Tie")
        return "tie"
    }
    else {
        console.log(`You lose this round, human. ${computerChoice} beats ${humanChoice}.`)
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

