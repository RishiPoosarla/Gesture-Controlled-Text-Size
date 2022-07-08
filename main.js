
var noseX = 0;
var noseY = 0;
var rightWristX = 0;
var leftWristX = 0;
var difference = 0;
function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas = createCanvas(550, 550);
    canvas.position(480, 80);
    posenet = ml5.poseNet(video, modelloaded);
    posenet.on("pose" , gotposes);
}
function draw(){
    background('#969A97');
    textSize(difference);
    fill("FFE787");
    text('Rishi', noseX, noseY);
}
function modelloaded(){
    console.log("Posenet is initialized");
}
function gotposes(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX + ",noseY = " + noseY);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = Math.floor(leftWristX - rightWristX);
        console.log("leftWristX = " + leftWristX + ", rightWristX = " + rightWristX + ", difference = " + difference);
    }
    }