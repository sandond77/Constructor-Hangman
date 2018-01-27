var inquirer = require('inquirer');
var Word = require('./word.js')
var guesses = 10;
var seed = Math.floor((Math.random() * 5));
var flag = false;
var dogs = ["husky", "corgi", "beagle", "poodle", "shiba", "bulldog","terrier", "pug", "boxer", "chihuahua"];
var booleanArray = [];
var winCheck = false;
var currentWord = new Word(dogs[seed]);
var guessedLetters = [];

function game(){
	winCheck = false;
	guesses = 10;
	currentWord.addArray();
	currentWord.underscorer();
	prompter();
}

function prompter(){
	inquirer.prompt([
		{
			type:"input",
			name: "guess",
			message: "Guess a letter: "
		}
	]).then(function(response){
		response.guess = response.guess.toLowerCase();

		guessedLetters.push(response.guess);

		for (var i = 0; i < dogs[seed].length; i++) {
			currentWord.word[i].repeat(response.guess)
			booleanArray.push(currentWord.word[i].changed)
		}

		var results = booleanArray.every(isFalse)

		if (results===true){
			console.log("\nIncorrect! Guesses Remaining: " + guesses + " \n");
			guesses --;
		} else if (results===false) {
			console.log("\nCorrect! \n");		
		}

		booleanArray = [];
		currentWord.underscorer();
	}).then(function(){
		for (var i = 0; i < dogs[seed].length; i++) {
			currentWord.word[i].changed = false
		}

		var winCheckArray = currentWord.showLetter;
		winCheckArray = winCheckArray.replace(/\s/g,''); 

		if (winCheckArray === dogs[seed]) {
			winCheck = true;
		}

		if (winCheck === true) {
			console.log("You Win!") 
			console.log("---------------------------------------------------------------------")
			replay();
		} else if (guesses > 0 && winCheck===false){
			prompter();
		} else if (guesses === 0 && winCheck===false){
			console.log("You Lose!\n")
			replay();
		}
	})
}

function isFalse(arg) {
  return arg === false;
}

function replay(){
	seed = Math.floor((Math.random() * 5));
	currentWord = new Word(dogs[seed]);

	inquirer.prompt([
		{
		type:"confirm",
		name: "replay",
		message: "Would You Like to Play Again?: ",
		default: true
		}
	]).then(function(response){	
		if (response.replay) {
			game();
		}
	});
}

game();