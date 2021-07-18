var button = document.getElementById("play");
var counter = 0;

button.addEventListener("click", function(button){
    button.target.classList.toggle("pausebutton");
    var ost = document.getElementById("song");
    if (counter%2 == 0){
        ost.play();
        counter++;
    }
    else{
        ost.pause();
        counter++;
    }
})