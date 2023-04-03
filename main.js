var cabecaY = 0;
var cabecaX = 0;
var chapeu;
var canvas;
var video;
var poseNet;

function preload() {
   chapeu = loadImage("TOLW1043.4L.png");
}

function setup() {
   canvas = createCanvas(700, 500);
   canvas.center();
   video = createCapture(VIDEO);
   video.size(700, 500);
   video.hide();
   poseNet = ml5.poseNet(video, modelLoaded);
   poseNet.on("pose", gotPoses);
}

function modelLoaded() {
   console.log("poseNet foi inicializado😎😋");
}

function gotPoses(results) {
   if(results.length > 0) {
      console.log(results);
      cabecaX = results[0].pose.nose.x - 170;
      cabecaY = results[0].pose.nose.y - 440;
   }
}

function draw() {
   image(video, 0, 0, 700, 500);
   image(chapeu, cabecaX, cabecaY, 300, 400);
}

function tirarFoto() {
   save("VIRUS.png")
}