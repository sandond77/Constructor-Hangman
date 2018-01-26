var Letter = function(arg){
	this.letter = arg;
	this.blank = "_";
	this.currentShow = this.blank;
	this.status = false;
	this.changed = false;
	// this.guessed = false;
	this.checker = function(guess){
		// this.guessed = true;
		if (guess===this.letter){
			this.status = true;
			this.currentShow = this.letter;
			this.changed = true;
		} 
	}
	this.repeat = function(guess){
		if (this.status === false){
			this.checker(guess)
		} 
	}
}

module.exports = Letter;

