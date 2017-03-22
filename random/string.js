var randomCount = require('./count');
var str = 'This Ecma Standard defines the ECMAScript 2016 Language. It is the seventh edition of the ECMAScript Language Specification. Since publication of the first edition in 1997, ECMAScript has grown to be one of the world\'s most widely used general purpose programming languages. It is best known as the language embedded in web browsers but has also been widely adopted for server and embedded applications.';
var maxBits = 403;
var generalFNumber = 5;
var generalTNumber = 20;
function randomString(fNumber, sNumber, tNumber) {
	var count;
	if (tNumber) {
		count = randomCount(fNumber, sNumber, tNumber, generalFNumber, generalTNumber, maxBits);
		if (str.length < count) {
			str = concatStr(str, count);
		}
		return str.substring(0, count); 
	}
	else if (sNumber) {
		count = randomCount(fNumber, sNumber, tNumber, generalFNumber, generalTNumber, maxBits);
		return str.substring(0, count); 
	}
	else if (fNumber) {
		if (str.length < fNumber) {
			str = concatStr(str, fNumber);
		}
		return str.substring(0, fNumber); 
	}
	else {
		count = randomCount(fNumber, sNumber, tNumber, generalFNumber, generalTNumber, maxBits);
		return str.substring(0, count);
	}
}
function concatStr(str, count) {
	var len = str.length;
	var needLen = Math.ceil((count - len) / len);
	for (var i = 0; i < needLen; i++) {
		str = str.concat(str);
	}
	return str;
}
module.exports = randomString;