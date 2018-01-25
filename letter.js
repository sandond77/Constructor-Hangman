var LetterGenerator = function(arg){
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
	this.repeat = function(){
		if (this.guessed === true){
			console.log("You have already guessed this letter!")
		}
	}

}

module.exports = LetterGenerator;

