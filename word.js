var Letter = require('./letter.js')

var Word = function(word){
	this.word = [];
	this.showLetter = [];

	this.addArray = function(){
		for (var i = 0; i < word.length; i++) {
			this.word.push(new Letter(word[i]));
		}
	}

	this.underscorer = function(){
		this.showLetter = [];
		for (var i = 0; i < word.length; i++) {
			this.showLetter.push(this.word[i].currentShow);
		}
		this.showLetter = String(this.showLetter);
		var find = ",";
		var re = new RegExp(find, "g");
		this.showLetter = this.showLetter.replace(re," ");
		console.log('\n' + this.showLetter + '\n')
	}
}

// var test = new Word("husky");
// test.addArray();
// test.word[0].repeat("h")
// test.underscorer();
// console.log(test);
// console.log(test.showLetter);
// console.log("Testing repeated letter\n" + '------------------------------')
// test.word[0].repeat("h")

module.exports = Word;
