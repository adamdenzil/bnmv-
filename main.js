noseX=0;
noseY=0;
marioX=0;
marioY=0;
function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
  canvas=createCanvas(1240,336);
  canvas.parent('canvas');
  instializeInSetup(mario);

 video=createCapture(VIDEO);
 video.size(800,600);
	

	poseNet=ml5.poseNet(video,modalLoaded);
	poseNet.on('pose',gotposes);

}

function draw() {
	game()
}


function modalLoaded(){
console.log('modal Loaded');	
}

function gotposes(results){
if (results.length>0) {
	
}


}

