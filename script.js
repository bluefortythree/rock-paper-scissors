

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3)
    if(randomNumber >= 2) {
        return "Scissors"
    } else if (randomNumber <2 && randomNumber >= 1) {
        return "Paper"
    } else {
        return "Rock"
    }
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection.toUpperCase() === computerSelection.toUpperCase()) {
        return "It's a tie!"
    } else if(playerSelection.toUpperCase() === "ROCK" && computerSelection.toUpperCase() === "PAPER") {
        return "You lose! Paper beats rock!"
    } else if(playerSelection.toUpperCase() === "ROCK" && computerSelection.toUpperCase() === "SCISSORS") {
        return "You win! Rock beats scissors!"
    } else if(playerSelection.toUpperCase() === "PAPER" && computerSelection.toUpperCase() === "ROCK") {
        return "You win! Paper beats rock!"
    } else if(playerSelection.toUpperCase() === "PAPER" && computerSelection.toUpperCase() === "SCISSORS") {
        return "You lose! Scissors beats paper!"
    } else if(playerSelection.toUpperCase() === "SCISSORS" && computerSelection.toUpperCase() === "ROCK") {
        return "You lose! Rock beats scissors!"
    } else if(playerSelection.toUpperCase() === "SCISSORS" && computerSelection.toUpperCase() === "PAPER") {
        return "You win! Scissors beats paper!"
    } else {
        return "Please enter either \"rock\", \"paper\", or \"scissors\"!"
    }
}

const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        console.log(button.id);
    })
})

let userScore = 0
let computerScore = 0

function userPoint() {
    userScore++
    return userScore;
}

function computerPoint() {
    computerScore++
    return computerScore;
}

function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Please choose \"rock\", \"paper\", or \"scissors\".");
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));

            if(playerSelection.toUpperCase() === computerSelection.toUpperCase()) {
            console.log("Your score: " + userScore + ", " + "Computer's score: " + computerScore)
            } else if(playerSelection.toUpperCase() === "ROCK" && computerSelection.toUpperCase() === "PAPER" || playerSelection.toUpperCase() === "PAPER" && computerSelection.toUpperCase() === "SCISSORS" || playerSelection.toUpperCase() === "SCISSORS" && computerSelection.toUpperCase() === "ROCK") {
            console.log("Your score: " + userScore + ", " + "Computer's score: " + computerPoint())
            } else if(playerSelection.toUpperCase() === "ROCK" && computerSelection.toUpperCase() === "SCISSORS" || playerSelection.toUpperCase() === "PAPER" && computerSelection.toUpperCase() === "ROCK" || playerSelection.toUpperCase() === "SCISSORS" && computerSelection.toUpperCase() === "PAPER") {
            console.log("Your score: " + userPoint() + ", " + "Computer's score: " + computerScore)
            } else {
            console.log("Please enter either \"rock\", \"paper\", or \"scissors\"!")
            i--
            }
        }
        
    if(userScore === computerScore) {
        console.log("You tied!")
    } else if(userScore > computerScore) {
        console.log("Congratulations, you won!")
    } else {
        console.log("Oh no, you lost!")
    }
    }

game();


