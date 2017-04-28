// GLOBAL VARIABLES
// ========================================================================
// Arrays and Variables for holding data
var wordOptions = ["pineapple", "papaya", "mango", "kiwi", "guava", "banana"]
var selectedWord = "";
var lettersinWord = [];
var numBlanks = 0;
var blankAndSuccess = []; // p _ _ _ _ _ _ _ _
var wrongLetters =[];

// Game Counters
var winCount = 0;
var lossCount = 0;
var guessesLeft = 9;


// FUNCTIONS (Reusable blocks of code that I will call upon when needed.)
// ========================================================================
// Start Game Function - print the logic with what happens in the very beginning of the game.
function startGame () {
	selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
	// Break the word apart into individual letters.  This will allow you to have an array of individual letters.
	lettersinWord = selectedWord.split("");

	// Testing / Debugging
	console.log(selectedWord);
	console.log(lettersinWord);
}


// MAIN PROCESS
// ========================================================================
// To make sure the main function will get run, you call the function
startGame();