let cursor;
let gif;

// Draw cursor trails on top of background canvas
let canvas;

function preload() {
	cursor = loadImage('assets/drive/cursor.png');
	gif = loadGif('assets/drive/drive.gif');
}

function setup() {
	createCanvas(600, 338);
	canvas = createGraphics(600, 338);
	
	window.onblur = function () {noLoop();}
	window.onfocus = function () {loop();}
}

function draw() {
	if (gif.loaded()) {
    	image(gif, 0, 0);
		image(canvas, 0, 0);
	}
	
	canvas.image(cursor, mouseX, mouseY);
}