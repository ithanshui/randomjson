var maxBits = 308;
var generalFNumber = 1;
var generalTNumber = 10;
function randomNumber(fNumber, sNumber, tNumber) {
	var conut;
	var numberRes;
	if (tNumber) {
		count = Math.floor(fNumber + Math.random() * (tNumber - fNumber + 1));
		return Math.floor(Math.pow(10, count-1) + Math.random() * (Math.pow(10, count) - Math.pow(10, count-1))); 
	}
	else if (sNumber) {
		count = Math.floor(fNumber + Math.random() * (maxBits - fNumber + 1));
		return Math.floor(Math.pow(10, count-1) + Math.random() * (Math.pow(10, count) - Math.pow(10, count-1))); 
	}
	else if (fNumber) {
		return Math.floor(Math.pow(10, fNumber-1) + Math.random() * (Math.pow(10, fNumber) - Math.pow(10, fNumber-1))); 
	}
	else {
		count = Math.floor(generalFNumber + Math.random() * (generalTNumber - generalFNumber + 1));
		return Math.floor(Math.pow(10, count-1) + Math.random() * (Math.pow(10, count) - Math.pow(10, count-1))); 
	}
}
module.exports = randomNumber;