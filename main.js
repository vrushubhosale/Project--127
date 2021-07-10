song =

function setup(){
    canvas = createCanvas(700,700);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide()
}

function preload()
{
	song= loadSound("music.mp3");
}

function draw(){
    image(video, 0, 0, 700, 700);
}

function play(){
    song.play();
};