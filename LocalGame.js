let board = new Array(-1, -1, -1, -1, -1, -1, -1, -1, -1)
let playerXTurn = true
let turnCount = 0
let xWins = 0
let oWins = 0
let ties = 0

let isButtonsClickable = true

// onClick where gridId = the button selected on the tic tac toe grid
function gridButtonClick(gridButtonId) {
    if (board[gridButtonId] != -1){
        return
    } 

    console.log("did return?")

    if (playerXTurn) {
        document.getElementById(gridButtonId).textContent = "X";
        board[gridButtonId] = 0
    }
    else {
        document.getElementById(gridButtonId).textContent = "O";
        board[gridButtonId] = 1
    }
    playerXTurn = !playerXTurn;
    turnCount++;

    let winner = checkForWin()
    if (winner) {
        // Disable the grid from being clicked
        toggleButtonClickable()
        
        // If X won
        if (winner[1] == 0) {
            xWins++;
            document.getElementById("xWins").innerHTML = "X Wins: " + xWins
        } // If O won
        else {
            oWins++;
            document.getElementById("oWins").innerHTML = "O Wins: " + oWins
        }
        displayEndScreen()
        return
    }

    // If we made it down here it is a tie
    if (turnCount == 9) {
        toggleButtonClickable()
        ties++
        document.getElementById("ties").innerHTML = "Ties: " + ties
        displayEndScreen()
    }
}

// Checks to see if a player has won
function checkForWin() {
    // Check horizonal
    if (board[0] != -1 && board[0] == board[1] && board[1] == board[2]) {
        return [true, board[0]]
    }
    if (board[3] != -1 && board[3] == board[4] && board[4] == board[5]) {
        return [true, board[3]]
    }
    if (board[6] != -1 && board[6] == board[7] && board[7] == board[8]) {
        return [true, board[6]]
    }

    // Check vertical
    if (board[0] != -1 && board[0] == board[3] && board[3] == board[6]) {
        return [true, board[0]]
    }
    if (board[1] != -1 && board[1] == board[4] && board[4] == board[7]) {
        return [true, board[3]]
    }
    if (board[2] != -1 && board[2] == board[5] && board[5] == board[8]) {
        return [true, board[6]]
    }

    // Check diagonal
    if (board[0] != -1 && board[0] == board[4] && board[4] == board[8]) {
        return [true, board[0]]
    }
    if (board[2] != -1 && board[2] == board[4] && board[4] == board[6]) {
        return [true, board[3]]
    } 

    return false
}

// Toggle clickability of grid buttons
function toggleButtonClickable() {
    if (isButtonsClickable) {
        for (let i = 0; i < 9; i++) {
            document.getElementById(i).disabled = true
        }
    }
    else {
        for (let i = 0; i < 9; i++) {
            document.getElementById(i).disabled = false
        }
    }
    isButtonsClickable = !isButtonsClickable;
}

// Shows the play again button
function displayEndScreen() {
    document.getElementById("playAgainButton").style.visibility = "visible"
}

function clearGrid() {
    for (let i = 0; i < 9; i++) {
        document.getElementById(i).textContent = ""
    }
}

// Reset the game and all html elements
function resetGame() {
    for (let i = 0; i < 9; i++) {
        board[i] = -1
    }

    clearGrid()
    toggleButtonClickable()
    
    playerXTurn = true;
    turnCount = 0

    document.getElementById("playAgainButton").style.visibility = 'hidden'
    
}

