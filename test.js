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

const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        console.log(button.textContent);
        const choices = ["Rock", "Paper", "Scissors"]
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];
        console.log(computerChoice);
        if(button.textContent === computerChoice) {
            console.log("Tie!");
            console.log("Your score: " + userScore + ", " + "Computer's score: " + computerScore)
        } else if(button.textContent === "Rock" && computerChoice === "Paper" || button.textContent === "Paper" && computerChoice === "Scissors" || button.textContent === "Scissors" && computerChoice === "Rock") {
            console.log("You lose!");
            console.log("Your score: " + userScore + ", " + "Computer's score: " + computerPoint())
        } else {
            console.log("You win!");
            console.log("Your score: " + userPoint() + ", " + "Computer's score: " + computerScore)
        }
    }) 
}
)

