nox = 0;
noy = 0;
jumpmar = "";
comar = "";
khatmar = "";
katlmar = "";
mardukh = "";


function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
	jumpmar = loadSound("jump.wav");
	comar = loadSound("coin.wav");
	khatmar = loadSound("gameover.wav");
	katlmar = loadSound("kick.wav");
	mardukh = loadSound("mariodie.wav");
}

function setup() {
	canvas = createCanvas(1240,336);
	instializeInSetup(mario);
	canvas.parent("canvas");

	video = createCapture(VIDEO);
	video.size(801, 399);
	video.parent("gansole");

	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on("pose", gotPoses);
}

function draw() {
	game()
}


function modelLoaded() {
	console.log("why?!??")
}

function gotPoses(results) {
	if(results.length > 0) {
		console.log(results);
		nox = results[0].pose.nose.x;
		noy = results[0].pose.nose.y;
		console.log("NoseX=" + nox + ", " + "NoseY=" + noy);
	}

}

