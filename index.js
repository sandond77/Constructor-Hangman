var inquirer = require('inquirer');
var Word = require('./word.js')
var guesses = 10;
var seed = Math.floor((Math.random() * 5));
var flag = false;

var dogs = ["husky", "corgi", "beagle","shiba", "boxer"];
// var mammals = ["gorilla", "elephant", "dolphin", "monkey", "rabbit", "manatee", "squirrel", "hedgehog","otter","raccoon"];
// var animals = ["chameleon", "penguin", "jellyfish", "brachiosaurus", "kangaroo", "chinchilla", "walrus", "human","catfish","triceratops"];


function game(){
	inquirer.prompt([
		{
			type:"list",
			name:"Choose a Category",
			choices: ["Dogs(easy)","Mammals(intermediate)","Animals(Hard)"]

		}
	])
	var currentWord = new Word(dogs[seed]);
	currentWord.addArray();
	currentWord.underscorer();
	if (guess > 0) {
		prompter();
	}
}

// game();
// console.log(currentWord)

function prompter(){
	inquirer.prompt([
		{
			type:"input",
			name: "guess",
			message: "Guess a letter: "
		}
	]).then(function(response){
		flag = false;
		response.guess = response.guess.toLowerCase();
		for (var i = 0; i < dogs[seed].length; i++) {
			currentWord.word[i].repeat(response.guess)
		}

		for (var i = 0; i < dogs[seed].length; i++) {
			lives(currentWord.word[i].guessed)
		}

		if (flag!==true) {
			guesses --;
			console.log("Incorrect!");
			console.log("You have " + guesses + " remaining");;
		} else {
			console.log("Correct!");
		}
		
		currentWord.underscorer();
	}).then(function(){
		prompter();
	})
}


function lives(arg){
	if(arg===true){
		return flag = true;
	}
}

var currentWord = new Word(dogs[seed]);
currentWord.addArray();
currentWord.underscorer();
// console.log("word" , currentWord.word)
// console.log("showletter" , currentWord.showLetter)

// console.log(currentWord)
prompter();



//Remove guessed letter check. Reset the status every so flag variables don't get stuck on true each time a letter is checked