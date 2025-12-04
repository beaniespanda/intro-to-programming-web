//kick
let kick = document.getElementById("kick");
kick.addEventListener('click', playkick);


function playkick() {
    let kickaudio = new Audio("Student Files/sounds/kick-bass.mp3");
	kickaudio.play();
}


//snare 
let snare = document.getElementById("snare");
snare.addEventListener('click', playsnare);


function playsnare() {
    let snareaudio = new Audio("Student Files/sounds/snare.mp3");
	snareaudio.play();
}


//tom1
let tom1 = document.getElementById("tom1");
tom1.addEventListener('click', playtom1);


function playtom1() {
    let tom1audio = new Audio("Student Files/sounds/tom-1.mp3");
	tom1audio.play();
}


//tom2
let tom2 = document.getElementById("tom2");
tom2.addEventListener('click', playtom2);


function playtom2() {
    let tom2audio = new Audio("Student Files/sounds/tom-2.mp3");
	tom2audio.play();
}


//crash
let crash = document.getElementById("crash");
crash.addEventListener('click', playcrash);


function playcrash() {
    let crashaudio = new Audio("Student Files/sounds/crash.mp3");
	crashaudio.play();
}