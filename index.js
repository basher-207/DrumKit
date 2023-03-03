let buttons = document.getElementsByTagName("button");

document.addEventListener("keydown", function(e){
    makeSound(e.key);
    buttonAnimation(document.getElementsByClassName(e.key)[0]);
});

for(i = 0; i <= buttons.length; i++){
    buttons[i].addEventListener("click", function() {
        buttonAnimation(this);
        makeSound(this.innerHTML);
    });
};

function buttonAnimation(element){
    element.classList.add("pressed");
        setTimeout(() => {
            element.classList.remove("pressed");    
        }, 100);
};

function makeSound(letter){
    switch (letter){
        case "w":
            let tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            let tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            let tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            let tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            let kickBass = new Audio("sounds/kick-bass.mp3");
            kickBass.play();
            break;
        case "k":
            let crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            let snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

    default: console.log(letter);
    }
};