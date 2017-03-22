var randomCount = require('./count');
var maxBits = 20;
var generalFNumber = 1;
var generalTNumber = 10;
function arrayRandom(arr, fNumber, sNumber, tNumber) {
	var count;
	var newArr;
	console.log(arr);
	count = randomCount(fNumber, sNumber, tNumber, generalFNumber, generalTNumber, maxBits);
	console.log('count');
	console.log(count);
	newArr = new Array(count);
	for (var i = 0; i < count; i++) {
		newArr[i] = arr[0]; 
	}
	return newArr;
}
module.exports = arrayRandom;