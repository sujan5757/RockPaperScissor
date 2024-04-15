let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".ch");
const msg = document.querySelector("#msg");
const userPara = document.querySelector("#user");
const ComputerPara = document.querySelector("#comp");


const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
}
const draw = () => {
    // console.log("Draw game");
    msg.innerText = "Draw Game. Play Again.";
};
const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userPara.innerText = userScore;
        // console.log("Winner");
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        // console.log("Loser");
        ComputerPara.innerText = compScore;
        msg.innerText = `You Lose!${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};
const playGame = (userChoice) => {
    // console.log("User Choice=", userChoice);
    const compChoice = genCompChoice();
    // console.log("Comp Choice=", compChoice);
    if (userChoice === compChoice) {
        //draw game
        draw();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissor" ? false : true;
        } else {

            compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((ch) => {
    ch.addEventListener("click", () => {
        const userChoice = ch.getAttribute("id");
        // console.log("Choice was clicked", userChoice);
        playGame(userChoice);
    });
});