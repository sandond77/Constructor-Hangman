var LetterGenerator = require('./letter.js')

// var dogs = ["husky", "corgi", "beagle", "poodle", "shiba", "bulldog","terrier", "pug", "boxer", "chihuahua"];

// var seed = Math.floor((Math.random() * 10));

// var word = dogs[seed];

var WordGenerator = function(word){
	this.word = [];
	this.showLetter = [];
	this.addArray = function(){
		for (var i = 0; i < word.length; i++) {
			this.word.push(new LetterGenerator(word[i]));
		}
	}
	this.underscorer = function(){
		for (var i = 0; i < word.length; i++) {
			this.showLetter.push(this.word[i].currentShow);
		}
	
	}
}

var test = new WordGenerator("husky");
test.addArray();
test.underscorer();
console.log(typeof(test.showLetter[0]));

module.exports = WordGenerator;