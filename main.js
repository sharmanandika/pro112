Webcam.set({
width:350,
height:300,
image_format:'png',
png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach(camera);
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<>img id="capture_image" src="'+data_uri+'"> ';

    });
}
console.log("ml5 version", ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/-xyK1TKsr/model.json",modelLoaded);
function modelLoaded(){
    console.log('model loaded');
}
prediction_1="";
prediction_2="";
function speak(){
    var synth=window.speechSynthesis;
    speak_data_one="the firsth prediction is-"+prediction_1;
    speak_data_two="and the second prediction is-"+prediction_2;
    var utterthis=new SpeechSynthesisUtterance(speak_data_one+speak_data_two);
    synth.speak(utterthis);
}

function check(){
    img=document.getElementById("Get_image");
    classifier.classify(img,gotResult);
}
function gotResult(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        document.getElementById("results_gesture_name").innerHTML=results[0].label;
        document.getElementById("results_gesture_name").innerHTML=results[1].label;
        prediction_1=results[0].label;
        prediction_2=results[1].label;
        speak();
        if(results[0].label=="Sounds good"){
            document.getElementById("update emoji").innerHTML="&#128077;";
        }
if(results[0].label=="Victory"){
    document.getElementById("update emoji").innerHTML="&#9996;";
}
if(results[0].label=="good"){
    document.getElementById("update emoji").innerHTML="&#128076;";
}
if(results[1].label=="Sounds good"){
    document.getElementById("update emoji").innerHTML="&#128077;";
}
if(results[1].label=="Victory"){
    document.getElementById("update emoji").innerHTML="&#9996;";
}
if(results[1].label=="good"){
    document.getElementById("update emoji").innerHTML="&#128077;";
}

    }
    
}
