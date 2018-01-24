var LetterGenerator = function(word){
	this.blanks = function(word){
		var empty = [];
		for (var i = 0; i < word.length; i++) {
			empty.push("_ ");
		}
		empty = empty.join("");
		empty = empty.replace(/ /g," ")
		console.log(empty)
	}
}

module.exports = LetterGenerator;

