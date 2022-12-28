function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3)
    if(randomNumber >= 2) {
        return "scissors"
    } else if (randomNumber <2 && randomNumber >= 1) {
        return "paper"
    } else {
        return "rock"
    }
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection === computerSelection) {
        return "It's a tie!"
    } else if(playerSelection === "rock" && computerSelection === "paper") {
        return "You lose! Paper beats rock!"
    } else if(playerSelection === "rock" && computerSelection === "scissors") {
        return "You win! Rock beats scissors!"
    } else if(playerSelection === "paper" && computerSelection === "rock") {
        return "You win! Paper beats rock!"
    } else if(playerSelection === "paper" && computerSelection === "scissors") {
        return "You lose! Scissors beats paper!"
    } else if(playerSelection === "scissors" && computerSelection === "rock") {
        return "You lose! Rock beats scissors!"
    } else if(playerSelection === "scissors" && computerSelection === "paper") {
        return "You win! Scissors beats paper!"
    } else {
        return "Please enter either \"rock\", \"paper\", or \"scissors\"!"
    }
}

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

            if(playerSelection === computerSelection) {
            console.log("Your score: " + userScore + ", " + "Computer's score: " + computerScore)
            } else if(playerSelection === "rock" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "scissors" || playerSelection === "scissors" && computerSelection === "rock") {
            console.log("Your score: " + userScore + ", " + "Computer's score: " + computerPoint())
            } else if(playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "paper" && computerSelection === "rock" || playerSelection === "scissors" && computerSelection === "paper") {
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

