let humanScore = 0;
let computerScore = 0;

function humanChoice(choice) {
    let computerChoice = getComputerChoice();
    console.log("Player choice: " + choice);
    console.log("Computer choice: " + computerChoice);
    let result = playRound(choice, computerChoice);
    if (result.includes("lose")) computerScore++;
    else if (result.includes("win")) humanScore++;
    console.log(result);
    console.log("Player score: " + humanScore);
    console.log("Computer score: " + computerScore + "\n\n");
    if (humanScore === 5 || computerScore === 5) {
        endGame();
    }
}

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice == 0) {
        return "rock";
    } else if (choice == 1) {
        return "paper";
    } else {
        return "scissors"
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == "rock") {
        if (computerChoice == "paper") return "You lose! Paper beats Rock";
        if (computerChoice == "scissors") return "You win! Rock beats Scissors";
    } else if (humanChoice == "paper") {
        if (computerChoice == "scissors") return "You lose! Scissors beats Paper";
        if (computerChoice == "rock") return "You win! Paper beats Rock";
    } else if (humanChoice == "scissors") {
        if (computerChoice == "rock") return "You lose! Rock beats Scissors";
        if (computerChoice == "paper") return "You win! Scissors beats paper";
    }
    return "It's a tie!";
}

function endGame() {
    if (humanScore > computerScore) {
        console.log("Player wins!");
    } else console.log("Computer wins!");
    humanScore = 0;
    computerScore = 0;
    console.log("Restarting: ");
}

