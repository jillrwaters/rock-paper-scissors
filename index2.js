    const game = {
        choices: ["rock", "paper", "scissors"],
        win: "You win! ",
        lose: "You lose! ",
        tie: "Tie! Try again.",
        invalidEntry:
            "Invalid entry. You must choose rock, paper, or scissors. Try again.",
        rockWinMsg: "Rock beats Scissors.",
        scissorsWinMsg: "Scissors beats Paper",
        paperWinMsg: "Paper beats Rock"
    };

    function getComputerChoice() {
        let choice = Math.floor(Math.random() * 3);
        return game.choices[choice];
    }

    function getHumanChoice() {
        // return prompt("Enter your choice, human").toLowerCase();
        let choice = Math.floor(Math.random() * 3);
        return game.choices[choice];
    }

    function playRound(humanChoice, computerChoice) {

        let winner = null;

        if (!game.choices.includes(humanChoice)) {
            console.log(game.invalid);
            playRound(getHumanChoice(), getComputerChoice());
        } else if (humanChoice === computerChoice) {
            winner = "tie";
            console.log(game.tie);
            playRound(getHumanChoice(), getComputerChoice());
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            winner = "human";
            console.log(game.win + game.paperWinMsg);
        } else if (humanChoice === "rock" && computerChoice === "paper") {
            winner = "computer";
            console.log(game.lose + game.paperWinMsg);
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            winner = "human";
            console.log(game.win + game.scissorsWinMsg);
        } else if (humanChoice === "paper" && computerChoice === "scissors") {
            winner = "computer";
            console.log(game.lose + game.scissorsWinMsg);
        } else if (humanChoice === "rock" && computerChoice === "scissors") {
            winner = "human";
            console.log(game.win + game.rockWinMsg);
        } else if (humanChoice === "scissors" && computerChoice === "rock") {
            winner = "computer";
            console.log(game.lose + game.rockWinMsg);
        }

        return winner;
    }

    function playGame() {
        let humanScore = 0;
        let computerScore = 0;


        for (let i = 5; i > 0; i--) {
            if (playRound(getHumanChoice(), getComputerChoice()) === "human") {
                humanScore++;
            }
            else if (playRound(getHumanChoice(), getComputerChoice()) === "computer") {
                computerScore++;
            }
            if (humanScore === 5) {
                console.log(game.win.toUpperCase());
            }
            else if (computerScore === 5) {
                console.log(game.lose.toUpperCase());
            }
        }
        console.log(`Computer: ${computerScore} | You: ${humanScore}`)
    }

    playGame()