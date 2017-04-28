// GLOBAL VARIABLES
// ========================================================================
// Arrays and Variables for holding data
var wordOptions = ["pineapple", "papaya", "mango", "kiwi", "guava", "banana"]
var selectedWord = "";
var lettersinWord = [];
var numBlanks = 0;
var blanksAndSuccesses = []; // p _ _ _ _ _ _ _ _
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
	// get number of blanks required for the word
	numBlanks = lettersinWord.length;

	// RESETS - even though these were set above, those only run on the first round of the program.
	// Reset number of guesses back to 9 after each round.
	guessesLeft = 9;
	// Reset to zero after each round.
	wrongLetters = [];
	// Make sure blanks and successes also cleared.
	blanksAndSuccesses = [];

	// Populate blanksAndSuccesses with the rigth number of initial blanks
	for (var i=0; i<numBlanks; i++){
		blanksAndSuccesses.push("_");
	}

	// Change HTML to reflect round conditions
	// .join removes commas between blank spaces.
	document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
	// Relate to Game Counter Variables above.
	document.getElementById("numGuesses").innerHTML = guessesLeft;
	document.getElementById("winCounter").innerHTML = winCount;
	document.getElementById("lossCounter").innerHTML = lossCount;



	// Testing / Debugging
	console.log(selectedWord);
	console.log(lettersinWord);
	console.log(numBlanks);
	console.log(blanksAndSuccesses);
}


// MAIN PROCESS
// ========================================================================
// To make sure the main function will get run, you call the function
startGame();