const PLAYER_X_CLASS = 'X'
const PLAYER_O_CLASS = 'O'

// Game board - visible
let board = Array.from(document.getElementsByClassName('cell'));
let restartButton = document.getElementById('restartButton');
let winningMessageText = document.getElementById('winningMessageText');
let currToPlayText = document.getElementById('currPlayerToPlay');

//Player X is set to play first by default
let currToPlay = PLAYER_X_CLASS;
// back stage board
let whoIsOnCell = Array(9).fill(null);
currToPlayText.innerHTML = "Turn " + currToPlay;

let winningCombColor = getComputedStyle(document.body).getPropertyValue('--winningComb')

const WINNING_COMBINATIONS = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6]
]

function startGame () {
	board.forEach(cell => cell.addEventListener('click', onCellClicked))
}

function onCellClicked(e){
	const cellClickedId = e.target.id;
	// if an open cell was clicked
	if(!whoIsOnCell[cellClickedId]){
		whoIsOnCell[cellClickedId] = currToPlay;
		e.target.innerHTML = currToPlay;
		
		if(isThereAWinner()){
			winningMessageText.innerHTML = currToPlay + " Has Won!"
            board.forEach(cell => cell.removeEventListener('click',onCellClicked))
            let winningComb = isThereAWinner();
            winningComb.forEach(cell => board[cell].style.color = winningCombColor)
		}
	}
	// if x playing switch to o else o playing switch to x
	currToPlay = currToPlay === PLAYER_X_CLASS ? PLAYER_O_CLASS : PLAYER_X_CLASS
    currToPlayText.innerHTML = "Turn " + currToPlay
}

restartButton.addEventListener('click', onRestartButtonClicked);

function onRestartButtonClicked (e) {
	whoIsOnCell.fill(null);
	winningMessageText.innerHTML = ''; 
	board.forEach(cell => {
		cell.innerText = ''  // there are no HTML inside a cell so we will remove only text
        cell.style.color = ''
	})
	startGame();
}

function isThereAWinner(){
	for(const comb of WINNING_COMBINATIONS){
        let [a, b, c] = comb
        if(whoIsOnCell[a] == currToPlay && whoIsOnCell[b] == currToPlay && whoIsOnCell[c] == currToPlay){
            return [a, b, c]
        }
    }
    return false;
}
startGame()