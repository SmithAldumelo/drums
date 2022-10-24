var NumberofDrumButton = document.querySelectorAll (".drums").length;
for (var i=0; i < NumberofDrumButton; i++){
    document.querySelectorAll(".drums")[i].addEventListener("click",function () {
        var buttonInnerHTML = this.innerHTML;
        makesound(buttonInnerHTML)
    });
    
}
document.addEventListener("keypress",function(event){
    makesound(event.key);
}
)
function makesound(key){
    switch(key){
        case "W":
            var tom1= new Audio ("tom-1.mp3");
            tom1.play();
            break;
            case "A":
            var tom2= new Audio ("tom-2.mp3");
            tom2.play();
            break;
            case "S":
            var tom4= new Audio ("tom-4.mp3");
            tom4.play();
            break;
            case "D":
            var tom3= new Audio ("tom-3.mp3");
            tom3.play();
            break;
            case "J":
            var snare= new Audio ("snare.mp3");
            snare.play();
            break;
            case "K":
            var crash= new Audio ("crash.mp3");
            crash.play();
            break;
            case "L":
            var kick= new Audio ("kick-bass.mp3");
            kick.play();
            break;

            default:console.log(buttonInnerHtml)

    }
   
}