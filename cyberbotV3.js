var buttonDance=document.getElementById("buttonDance");
var botDiv=document.getElementById("startPos");
var bot=document.getElementById("bodyRect");
var rightArm=document.getElementById("rightArm");
var leftArm=document.getElementById("leftArm");
var rightShoulder=document.getElementById("rightShoulder");
var leftShoulder=document.getElementById("leftShoulder");
var form=document.getElementById("ttsForm");
var danceFlag=true;
var ttsFlag=true;
var moveFlag=true;
var creditsFlag=true;
var textDance=document.getElementById("textDance");
var buttonTts=document.getElementById("buttonTts");
var menu=document.getElementById("menu");
var audio=document.getElementById("myAudio");
var mouth=document.getElementById("mouth");
var danceMouth=document.getElementById("danceMouth");
var buttonMove=document.getElementById("buttonMove");
var buttonCredits=document.getElementById("buttonCredits");
var creditsText=document.getElementById("creditsText");
var eye1=document.getElementById("eye1");
var eye2=document.getElementById("eye2");
var face3=document.getElementById("face3");
var circl4=document.getElementById("circle4");
var face2=document.getElementById("face2");
var catEye1=document.getElementById("catEye1");
var catEye2=document.getElementById("catEye2");
var face=0;

function dance(){
	if(danceFlag){
		botDiv.id="dancePos";
		buttonDance.innerHTML="Make me stop";
		rightArm.id="dancingRightArm";
		leftArm.id="dancingLeftArm";
		bot.style.transform="scale(0.5)";
		rightShoulder.style.animationName="upAndDown";
		leftShoulder.style.animationName="upAndDown";
		rightShoulder.style.borderBottomRightRadius="140%";
		leftShoulder.style.borderBottomLeftRadius="140%";
		rightShoulder.style.borderTopRightRadius="80%";
		leftShoulder.style.borderTopLeftRadius="80%";
		buttonTts.style.visibility="hidden";
		buttonMove.style.visibility="hidden";
		buttonCredits.style.visibility="hidden";
		danceMouth.style.visibility="visible";
		textDance.style.visibility="visible";
		audio.play();
		if(face%3==2){
			danceMouth.style.visibility="hidden";
			circle4.style.animationDuration="4s";
		}
		catEye1.id="catEye1Dance";
		catEye2.id="catEye2Dance";
	}
	else{
		rightArm.id="rightArm";
		leftArm.id="leftArm";
		botDiv.id="startPos";
		buttonDance.innerHTML="Make me dance again";
		bot.style.transform="scale(1)";
		rightShoulder.style.animationName="";
		leftShoulder.style.animationName="";
		rightShoulder.style.borderBottomRightRadius="80%";
		leftShoulder.style.borderBottomLeftRadius="80%";
		rightShoulder.style.borderTopRightRadius="140%";
		leftShoulder.style.borderTopLeftRadius="140%";
		buttonTts.style.visibility="visible";
		buttonMove.style.visibility="visible";
		buttonCredits.style.visibility="visible";
		danceMouth.style.visibility="hidden";
		textDance.style.visibility="hidden";
		audio.pause();
		circle4.style.animationDuration="2s";
		catEye2.id="catEye2";
		catEye1.id="catEye1";
	}
	danceFlag=!danceFlag;
}


function ttsvisible(){
	if(ttsFlag){
		form.style.visibility="visible";
		buttonTts.innerHTML="Click here to shut me up";
		bot.style.bottom="200px";
		mouth.style.visibility="visible";
		buttonDance.style.visibility="hidden";
		buttonMove.style.visibility="hidden";
		buttonCredits.style.visibility="hidden";
		if(face!=0){
			mouth.style.visibility="hidden";
		}
	}
	else{
		form.style.visibility="hidden";
		buttonTts.innerHTML="Hear me talk again";
		bot.style.bottom="0px";
		mouth.style.visibility="hidden";
		buttonDance.style.visibility="visible";
		buttonMove.style.visibility="visible";
		buttonCredits.style.visibility="visible";
	}
	ttsFlag=!ttsFlag;
}

function tts(){
	var textInput=document.getElementsByTagName("input")[0].value;
	var u = new SpeechSynthesisUtterance();
    u.text = textInput;
    u.lang = 'en-US';
    speechSynthesis.speak(u);
}
function credits(){
	if(creditsFlag){
		buttonMove.style.visibility="hidden";
		buttonTts.style.visibility="hidden";
		buttonDance.style.visibility="hidden";
		buttonCredits.innerHTML="Go back";
		creditsText.style.visibility="visible";
		eye1.style.visibility="hidden";
		eye2.style.visibility="hidden";
		face2.style.visibility="hidden";
		bot.style.transform="scale(2)";
		face3.style.visibility="hidden";

	}
	else{
		buttonMove.style.visibility="visible";
		buttonTts.style.visibility="visible";
		buttonDance.style.visibility="visible";
		buttonCredits.innerHTML="Credits";
		creditsText.style.visibility="hidden";
		if(face==0){
			eye1.style.visibility="visible";
			eye2.style.visibility="visible";
		}
		else if(face==2){
			face3.style.visibility="visible";
		}
		else{
			face2.style.visibility="visible";
		}
		bot.style.transform="scale(1)";
	}
	creditsFlag=!creditsFlag;
}
function faceChange(){
	switch(face%3){
		case 0:
		eye1.id="eye1Face2";
		eye2.id="eye2Face2";
		mouth.id="mouth2";
		danceMouth.id="danceMouth2";
		face2.style.visibility="visible";
		break;
		case 1:
		face2.style.visibility="hidden";
		eye1.id="eye1";
		eye2.id="eye2";
		mouth.id="mouth";
		danceMouth.id="danceMouth";
		eye1.style.visibility="hidden";
		eye2.style.visibility="hidden";
		face3.style.visibility="visible";
		break;
		case 2:
		face3.style.visibility="hidden";
		eye1.style.visibility="visible";
		eye2.style.visibility="visible";
		break;
	}
	face=face+1;

}