var randomCount = require('./count');
var str = '集中第六版的发展始于2009年,第五版正在准备出版。然而,这之前是重要的实验和语言增强设计努力约会在1999年出版的第三版。在一个非常真实的意义上,完成第六版是一百一十五年的顶峰。的目标还包括为大型应用程序提供更好的支持,图书馆创建和使用ECMAScript的编译目标其他语言。它的一些主要改进包括模块,类声明,词汇块范围,迭代器和发电机,异步编程承诺,解构模式和适当的尾部调用。ECMAScript扩大图书馆的内置支持额外的数据抽象包括地图、集合和数组的二进制数值以及额外支持Unicode补充字符在字符串和正则表达式。通过子类化的内置模板也可扩展。第六版提供了常规的基础,增量式语言和库增强。第六版是2015年6月联合国大会通过。';
var maxBits = 317;
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