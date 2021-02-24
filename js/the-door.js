let door;

let glitchLevel = 0;

function setup() {
	createCanvas(360, 432);

	glitch = new Glitch();
	setupGlitch();
}

function setupGlitch() {
	loadImage("assets/the-door/door.png", function(im) {
		// Random glitch type
		glitch.loadType(glitch.types[glitchLevel%glitch.types.length]);
		glitch.loadImage(im);
	});
}

function mousePressed() {
	glitchLevel++;
	setupGlitch();
}

function draw() {
	glitch.resetBytes();

	// Add jitter/movement
	glitch.randomBytes(glitchLevel);

	glitch.buildImage(function() {
		// Clear bkg when ready
		background(0);
	});
	
	image(glitch.image, 0, 0);
}