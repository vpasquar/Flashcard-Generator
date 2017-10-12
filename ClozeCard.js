var ClozeCard = function(text,cloze) {

	this.text = text;
	this.cloze = cloze;
	this.partial = function() {
		var pText = this.text.replace(this.cloze,"...");
		console.log(pText);//console.log(pText);
	};
	//this.partial = this.partialProc();	
	//this.fullText = this.text;	
}


module.exports = ClozeCard;