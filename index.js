var inquirer = require('inquirer');
var Word = require('./word.js')
var guesses = 10;
var seed = Math.floor((Math.random() * 5));
var flag = false;
var dogs = ["husky", "corgi", "beagle","shiba", "boxer"];
// var mammals = ["gorilla", "elephant", "dolphin", "monkey", "rabbit", "manatee", "squirrel", "hedgehog","otter","raccoon"];
// var animals = ["chameleon", "penguin", "jellyfish", "brachiosaurus", "kangaroo", "chinchilla", "walrus", "human","catfish","triceratops"];
var booleanArray = [];

var currentWord = new Word(dogs[seed]);

function game(){
	// inquirer.prompt([
	// 	{
	// 		type:"list",
	// 		name:"Choose a Category",
	// 		choices: ["Dogs(easy)","Mammals(intermediate)","Animals(Hard)"]

	// 	}
	// ])
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

		
		if (currentWord.showletter === dogs[seed]) {
			console.log("You Win!") 
		} else if (guesses > 0 && currentWord.showletter !== dogs[seed]){
			prompter();
		} else if (guesses === 0){
			console.log("You Lose!")
		}
	})
}

function isFalse(arg) {
  return arg === false;
}


game();

//Need to fix win conditional; lose and looped guessing is working properly.