const choices = ["rock", "paper", "scissors"]

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3)
    return choices[choice]
}

function getHumanChoice(){
    let input = prompt("Enter your choice, human.")
    input = input.toLowerCase()
    return input
}

function validateHumanChoice(choice){
    return choices.includes(choice)
}

function playRound(computerChoice, humanChoice){
    
    console.log("I chose:",computerChoice, "| You chose:", humanChoice)
    if (validateHumanChoice(humanChoice)){
        if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "scissors" && computerChoice === "paper") || (humanChoice === "paper" && computerChoice === "rock")){
            console.log(`You win this round, human. ${humanChoice} beats ${computerChoice}.`)
            return "human"
        }
        else if (humanChoice === computerChoice){
            console.log("Tie")
            return "tie"
        }
        else {
            console.log(`You lose this round, human. ${computerChoice} beats ${humanChoice}.`)
            return "computer"
        }
    }
    else {
        alert(`You must choose rock, paper, or scissors, human. You typed "${humanChoice}". What were you thinking? Try again.`)
        
    }
    
}

function game(){
    let computerScore = 0
    let humanScore = 0
    let ties = 0

    for (let i=0; i<5;i++){
        let result = playRound(getComputerChoice(), getHumanChoice())
        if (result === "human"){
            humanScore++
        }
        else if (result === "computer"){
            computerScore++
        }
        else {
            ties++
        }
        console.log(`Computer: ${computerScore} | Human: ${humanScore}`)
        console.log("-----------------------------")
    }

    console.log('FINAL SCORE:')
    console.log(`Computer: ${computerScore} | You: ${humanScore}`)

    if (computerScore > humanScore){
        console.log("YOU LOSE, HUMAN. I, THE COMPUTER, HAVE BEAT YOU. HA!")
    }
    else if (humanScore > computerScore){
        console.log("You win, human. Good game.")
    }
    else {
        console.log("Tied game. Rematch?")
    }

    let button = document.querySelector("button")
    button.innerText = "REMATCH"
}

