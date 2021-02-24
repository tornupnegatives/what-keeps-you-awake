let sky;
let sphynx;

let music;
let canvas;

let w = 720;
let h = 635;

function preload() {
	sphynx = loadImage('assets/catharsis/sphynx.png');
	sky = loadImage('assets/catharsis/sky.png');
	
	music = loadSound('assets/catharsis/taylor.mp3');
}

function setup() {
	createCanvas(w, h);
	canvas = createGraphics(w, h);
	canvas.noFill();
}

function drawSky() {
	for (let i = 0; i <= 0.5 * w; i++) {
		if (i % (w / 100) == 0) {
			canvas.clear();
		}
			
      	canvas.stroke(random(0, 255));
      	x = random(0, w);
      	y = random(0, w);
      	canvas.line(mouseX, y - random(0, mouseY), x + random(0, w), mouseY);
  	}
}

function playAudio() {
	music.play();
}

function draw() {
	if (!music.isPlaying()) {
		playAudio();
	}
	
	image(sky, 0, 0);
	
	image(canvas, 0, 0);
	drawSky();
	
	image(sphynx, 0, 0);
}