let videoIndex = 0;
let tv;

let canvas;
let video

function preload() {
	tv = loadImage('assets/tv/img/tv.png');
	canvas = createGraphics(250, 250);
}

function  getNewVideo() {
	// Circular video buffer
	let index = videoIndex % 6;
	
	let paths = ["tv_1", "tv_2", "tv_3", "tv_4", "tv_5", "tv_6", "tv_7"]
	let videoPath = "assets/tv/mp4/" + paths[index] + ".mp4";
	videoIndex++;
	
	video = canvas.createVideo(videoPath);
	video.size(250, 250);
	video.play();
}

function mousePressed() {
	getNewVideo();
	image(canvas, 0, 0);
	
}

function draw() {
	image(tv, 0, 0);
}


/*
// ================================================== PRELOADING =========================
function preloadVideos(prefix, suffix, paths) {
	for (i in paths) {
		let fullPath = 
		videos.push(createVideo(fullPath));
		videos[i].size(250, 250);
	}
}

function preload() {
	tv = loadImage('assets/tv/img/tv.png');
	canvas = createGraphics(250, 250);
}

function mousePressed() {
	
	preloadVideos(, ".mp4", [paths[videoIndex]]);
	canvas.videos[videoIndex].play();
	
	videoIndex++;
}

function draw() {
	image(canvas, 0, 0);
	image(tv, 0, 0);
}
*/


/*
function setup() { 
createCanvas(300, 300); 
text("Click on the buttons below to"+ 
	" play/pause the video", 20, 20); 

vidElement = createVideo("sample_video.mp4"); 
vidElement.position(20, 0); 
vidElement.size(300); 

playBtn = createButton("Play Video"); 
playBtn.position(30, 40); 
playBtn.mouseClicked(playVideo); 

pauseBtn = createButton("Pause Video"); 
pauseBtn.position(150, 40); 
pauseBtn.mouseClicked(pauseVideo); 
} 

function playVideo() { 
vidElement.play(); 
} 

function pauseVideo() { 
vidElement.pause(); 
} 
*/