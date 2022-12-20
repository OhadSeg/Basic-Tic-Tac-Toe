const PLAYER_X_CLASS = 'X'
const PLAYER_O_CLASS = 'O'

// Game board - visible
const board = Array.from(document.getElementsByClassName('cell'));
const restartButton = document.getElementById('restartButton');
const winningMessageTextElement = document.getElementById('winningMessageText');
const currToPlayText = document.getElementById('currPlayerToPlay');

//Player X is set to play first by default
let currToPlay = PLAYER_X_CLASS;
// back stage board
let whoIsOnCellBoard = Array(9).fill(null);
currToPlayText.innerHTML = "Turn " + currToPlay + "to play";

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

