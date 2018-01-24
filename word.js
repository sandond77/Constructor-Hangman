var LetterGenerator = require('./letter.js')

var dogs = ["husky", "corgi", "beagle", "poodle", "shiba", "bulldog","terrier", "pug", "boxer", "chihuahua"];

var seed = Math.floor((Math.random() * 10));

var word = dogs[seed];

var WordGenerator = function(word){
	this.word = word
	this.holder = [];
	this.guesses = 10;
  	this.addBlanks = function() {
    	this.holder.push(new LetterGenerator(word));
  	};

}

var test = new WordGenerator(word);

// console.log(test)
test.addBlanks();
console.log(test.holder)

module.exports = WordGenerator;