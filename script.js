console.log("Welcome to Tic Tac Toe");

// Setting variables;
let turn = "X";
let reset = document.getElementById("reset");
let userTurn = document.getElementsByClassName("userTurn");
let winner = document.getElementById("winner");
let win = "False";
let gif = document.getElementById("gif");

// function for the reset button to reset everything.
const resetGame = () => {
    turn = "X";
    win = "False";
    userTurn[0].textContent = `TURN: ${turn}`;
    winner.textContent = "";
    gif.style.opacity = 0;
    allBoxes = document.getElementsByClassName("boxtext");
    Array.from(allBoxes).forEach(element => {
        element.innerText = "";
    })
}


// function to change the turn;
const changeTurn = () => {
    if (turn == "X") {
        turn = "0";
    }
    else {
        turn = "X";
    }
    return turn;
}


// Function to check whether the player wins or not.
const checkWin = () => {
    // code to check 
    console.log("Checking for win")
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    wins.forEach(e => {
        if ((boxes[e[0]].innerText === boxes[e[1]].innerText) && (boxes[e[1]].innerText === boxes[e[2]].innerText) && (boxes[e[0]].innerText != "")) {
            win = "True";
        }
    })

    if (win == "True") {
        winner.textContent = `${turn} wins the match.`;
    }

}




// Logic for the Game
// Logic for the Game
// Logic for the Game
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    element.addEventListener('click', () => {
        let boxtext = element.querySelector('.boxtext');
        if (boxtext.innerText === "") {
            boxtext.innerText = turn;
            checkWin();
            turn = changeTurn();
            if (win == "False"){
                userTurn[0].textContent = `TURN: ${turn}`;
            }

            if (win == "True"){
                userTurn[0].textContent = `Game Over!`;
                gif.style.opacity = 1;
            }
        }
    })
})



// if someone clicked the reset button.
reset.addEventListener('click', resetGame);