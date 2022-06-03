img="";
status="";
function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    object_detector= ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML="Status:Detecting Objects";
}
function preload(){
    img=loadImage("dog_cat.jpg");
}
function modelLoaded(){
    console.log("model loaded");
    status=true;
    object_detector.detect(img, gotResult);
}
function gotResult(result, error){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
    }
}
function draw(){
    image(img, 0, 0, 640, 420);
    fill("black");
    text("dog", 45, 75);
    noFill();
    stroke("black");
    rect(30, 60, 450, 350);

    fill("lime");
    text("cat", 320, 120);
    noFill();
    stroke("lime");
    rect(300, 90, 270, 320);
}