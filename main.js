var m="";
var m2="";
function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas=createCanvas(550, 550);
    canvas.positions(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function preload(){
    song= loadSound("music.mp3");
    song2= loadSound("music2.mp3");
}
