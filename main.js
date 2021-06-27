noseX=0;
noseY=0;

function preload() {
main_nose=loadImage('https://www.pngarts.com/files/10/Clown-Nose-PNG-Image.png');
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(main_nose, noseX, noseY, 25, 25);
}

function setup() {
    canvas=createCanvas(300, 300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results) {
    if(results.length>0) {
        console.log(results);
        noseX=results[0].pose.nose.x-12;
        noseY=results[0].pose.nose.y-12;
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
    }
}

function modelLoaded(){
    console.log('poseNet is Initialized');
}

function take_snapshot() {
    save('red_nose.png');
}