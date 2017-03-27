var gm =require('gm');
var defaultWidth = 400;
var defaultHeight = 400;
function randomImage(width, sNumber, height) {
	var iWidth = width? width: defaultWidth;
	var iHeight = height? height: defaultHeight;
	gm('./img.jpg')
		.resize(iWidth, iHeight)
		.toBuffer('PNG',function (err, buffer) {
			if (err) {
				console.log(err);
				return;
			}
		    var base64Img = buffer.toString('base64');
		    return base64Img;
		});
}
module.exports = randomImage;

