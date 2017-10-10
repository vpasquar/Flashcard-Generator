var ClozeCard = function(text,cloze) {

	this.text = text;
	this.cloze = cloze;
	this.partialProc = function() {
		var pText = this.text.replace(this.cloze,"...");
		console.log(pText);//console.log(pText);
	};
	//this.partial = this.partialProc();	
	//this.fullText = this.text;	
}


var newCloze = new ClozeCard("George Washington was the first president of the US.","George Washington");
newCloze.partialProc();
