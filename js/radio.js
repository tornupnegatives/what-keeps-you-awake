let img;
let slider;

let static;
let audio = [];

let slider_x = 80;
let slider_y = 21;

// ======================= PRELOADING =======================
function preloadAudio(prefix, suffix, staticPath, paths) {
	let fullPath;
	
	fullPath = prefix + staticPath + suffix;
	static = loadSound(fullPath);
	
	for (i in paths) {
		fullPath = prefix + paths[i] + suffix;
		audio.push(loadSound(fullPath));
	}
} 

function preload() {
  	img = loadImage('assets/radio/img/radio_plate.png');
	slider = loadImage('assets/radio/img/radio_needle_red.png')
	
	let paths = ['subterfuge', 'chatter', 'homewrecker', 's03', 'lly', 's06', 'e11', 'soothsayer', 'v07', 'block_me', 'whine', 'whistle', 'e07'];
	preloadAudio('assets/radio/mp3/', '.mp3', 'static', paths);
	
	window.onfocus = playAudio;
}

// ======================= AUDIO OPS  =======================
function changeChannel(index) {
	let zones = [220 /*subterfuge*/, 257 /*chatter*/, 296 /*homewrecker*/, 
				 329 /*s03*/, 363 /*love like you*/, 501 /*s06*/, 436 /*e11*/, 
				 475 /*soothsayer*/, 521 /*v07*/, 554 /*block me*/, 590 /*whine*/, 
				 625 /*whistle*/, 661 /*e07*/];
	
	// Default: static
	let target = -1;
	
	for (i in zones) {
		if (slider_x >= zones[i]) {
			target = i;
		}
	}
	
	if (target == -1) {
		muteExcept();
		static.setVolume(1);
	} else {
		muteExcept(target);
		static.setVolume(0.2);
		
		if (!audio[target].isPlaying()) {
			audio[target].play();
		}
	}
}

function playAudio() 
{
  // trigger sound
  static.play();
}

function muteExcept(index) {
	for (i in audio) {
		if (i != index && !audio[i].isPaused()) {
			audio[i].pause();
		}
	}
	
}

// =======================   SETUP    =======================
function setup() {
	createCanvas(850, 250);
	static.loop()
}

// ======================= EVENT HNDL =======================
function updateSlider() {
	if (keyIsDown(LEFT_ARROW)  && slider_x > 80) {
		slider_x -= 1;
	}
	
	else if (keyIsDown(RIGHT_ARROW) && slider_x < 735) {
		slider_x += 1;
	}
	
	image(slider, slider_x, slider_y);	
}

function draw() {
	image(img, 0, 0);
	updateSlider();
	changeChannel();	
}