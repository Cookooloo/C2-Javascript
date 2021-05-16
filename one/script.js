// easy game status access
const statusDisplay = document.querySelector('.game-status');
// gameActive will be used to pause the game at win or draw
let gameActive = true;
// save current player
let currentPlayer = "X";
// storing the played cells and validate game state
let gameState = ["", "", "", "", "", "", "", "", ""];
// stored messages for displaying the current state to the player
const winningMessage = () => `'Player ${currentPlayer} has won!`;
const drawMessage = () => `Game has ended in a draw`;
const currentPlayerTurn = () => `It's ${currentPlayer}'s turn.`;
// initial message to show the players who's turn it is
statusDisplay.innerHTML = currentPlayerTurn();
function handleCellPlayed(clickedCell, clickedCellIndex) {
    // update game state to reflect played move
    // update user interface to reflect played move
    gameState[clickedCellIndex] = currentPlayer;
    clickedCell.innerHTML = currentPlayer;

}
function handlePlayerChange() {

    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusDisplay.innerHTML = currentPlayerTurn();

}
    // cells that need to be populated to win
    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    function handleResultValidation() {
        let roundWon = false;
        // go through all winning conditions to check of state is met
        // else continue with game
        for (let i = 0; i <= 7; i++) {
            const winCondition = winningConditions[i];
            let a = gameState[winCondition[0]];
            let b = gameState[winCondition[1]];
            let c = gameState[winCondition[2]];
            if (a === '' || b === '' || c === '') {
                continue;
            }
            if (a === b && b === c) {
                roundWon = true;
                break;
            }
        }
        // show winning message on round won
        if (roundWon) {
            statusDisplay.innerHTML = winningMessage();
            gameActive = false;
            return;
        }
        // check if there are still unpopulated cells
        // if cells are populated and win conditions are not met display drawMessage
        let roundDraw = !gameState.includes("");
        if (roundDraw) {
            statusDisplay.innerHTML = drawMessage();
            gameActive = false;
            return;
        }
        // change player when none has won or drawn
        handlePlayerChange();
    }

function handleCellClick(clickedCellEvent){
    // saving clicked cell for easy access
    const clickedCell = clickedCellEvent.target;
    // converting attribute to Int instead of String
    const clickedCellIndex = parseInt(clickedCell.getAttribute('data-cell-index'));
    // checking if cell has been played before
    if (gameState[clickedCellIndex] !== "" || !gameActive) {
        return;
    }
    // continue with game flow when everything checks out
    handleCellPlayed(clickedCell, clickedCellIndex);
    handleResultValidation();

}
function handleRestartGame() {
    // reset to original state
    gameActive = true;
    currentPlayer = "X";
    gameState = ["", "", "", "", "", "", "", "", ""];
    statusDisplay.innerHTML = currentPlayerTurn();
    document.querySelectorAll('.cell').forEach(cell => cell.innerHTML = "");

}
// event listeners to game cells and restart button
document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', handleCellClick));
document.querySelector('.game-restart').addEventListener('click', handleRestartGame);