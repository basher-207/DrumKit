let buttons = document.getElementsByTagName("button");

let tom1 = new Audio("sounds/tom-1.mp3");
let tom2 = new Audio("sounds/tom-2.mp3");
let tom3 = new Audio("sounds/tom-3.mp3");
let tom4 = new Audio("sounds/tom-4.mp3");
let snare = new Audio("sounds/snare.mp3");
let kickBass = new Audio("sounds/kick-bass.mp3");
let crash = new Audio("sounds/crash.mp3");


for(i = 0; i <= buttons.length; i++){
    buttons[i].addEventListener("click", function (){

        this.classList.add("pressed");
        setTimeout(() => {
            this.classList.remove("pressed");    
        }, 100);

        switch (this.innerHTML){
            case "w":
                tom1.play();
                break;
            case "a":
                tom2.play();
                break;
            case "s":
                tom3.play();
                break;
            case "d":
                tom4.play();
                break;
            case "j":
                kickBass.play();
                break;
            case "k":
                crash.play();
                break;
            case "l":
                snare.play();
                break;

        default: console.log(this.innerHTML);
        }
    });
};