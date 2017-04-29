// GLOBAL VARIABLES
// ========================================================================
var wordOptions = ["pineapple", "zucchini", "apple", "mango", "tomato", "pear", "spinach", "banana", "watermelon"]
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
// Start Game Function
function startGame () {
	selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
	// Break the word apart into individual letters.
	lettersinWord = selectedWord.split("");
	// get number of blanks required for the word.
	numBlanks = lettersinWord.length;
	
	// RESETS
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
	document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
	// Related to Game Counter Variables above.
	document.getElementById("numGuesses").innerHTML = guessesLeft;
	document.getElementById("winCounter").innerHTML = winCount;
	document.getElementById("lossCounter").innerHTML = lossCount;

	// Testing / Debugging
	console.log(selectedWord);
	console.log(lettersinWord);
	console.log(numBlanks);
	console.log(blanksAndSuccesses);
}

function checkLetters(letter) {
	// Check if letter exists in code at all.

	var isLetterInWord = false;

	for (var i = 0; i < numBlanks; i++) {
		if(selectedWord[i] == letter) {
			isLetterInWord = true;
		}
	}


	// Check where in the word the letter exists, then populate blanksAndSuccesses array.
	if(isLetterInWord) {
		for (var i = 0; i < numBlanks; i++) {
			if(selectedWord[i] == letter) {
				blanksAndSuccesses[i] = letter;
			}
		}

	}

	// Letter wasn't found.
	else {
		wrongLetters.push(letter);
		guessesLeft--
	}

	// Testing / Debugging
	console.log(blanksAndSuccesses);

}

function roundComplete() {
	console.log("Win Count: " + winCount + " | Loss Count: " + lossCount + " | Guesses Left: " + guessesLeft);

// Update the HTML to reflect the most recent count stats.
	document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
	document.getElementById("numGuesses").innerHTML = guessesLeft;
	document.getElementById("wrongGuesses").innerHTML = wrongLetters.join(" ");

// Check if user won
	if (lettersinWord.toString() == blanksAndSuccesses.toString()) {
		winCount++;
		alert("You Won!");

		// Update the win counter in the HTML. 
		document.getElementById("winCounter").innerHTML = winCount;

		startGame();
	}

	// Check if user lost
	else if (guessesLeft == 0) {
		lossCount++;
		alert("You Lost!");

		// update HTML
		document.getElementById("lossCounter").innerHTML = lossCount;

		startGame();
	}

}

// MAIN PROCESS
// ========================================================================

// Initiates the code the first time.
startGame();

// Register keyclicks
document.onkeyup = function(event) {
	var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
	checkLetters(letterGuessed);
	roundComplete();

	// Testing / Debugging
	console.log(letterGuessed);
}