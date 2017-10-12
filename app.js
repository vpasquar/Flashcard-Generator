var BasicCard = require("./BasicCard.js");
var ClozeCard = require("./ClozeCard.js");

var inquirer = require("inquirer");


var basicCard = new BasicCard("George Washington","Who was the first president of the United States?");

var clozeCard = new ClozeCard ("George Washington was the first president of the United States","George Washington");

console.log(basicCard.front);
console.log(basicCard.back);

console.log(clozeCard.text);
clozeCard.partial();