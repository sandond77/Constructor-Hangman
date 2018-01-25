var Letter = function(arg){
	this.letter = arg;
	this.blank = "_";
	this.currentShow = this.blank;
	this.status = false;
	this.guessed = false;
	this.checker = function(guess){
		this.guessed = true;
		if (guess===this.letter){
			this.status = true;
			this.currentShow = this.letter;
			console.log("Correct!")
		} else {
			console.log("Incorrect!")
		}
	}
	this.repeat = function(guess){
		if (this.guessed === true){
			console.log("You have already guessed this letter!")
		} else {
			console.log("Letter has not been used")
			this.checker(guess);
		}
	}

}

module.exports = Letter;

