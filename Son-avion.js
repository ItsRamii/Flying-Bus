document.addEventListener("DOMContentLoaded", function () {

    var planeImage = document.getElementById("planeImage");
    var planeSound = document.getElementById("planeSound");

    var isPlaying = false;
    planeImage.addEventListener("click", function () {
       if (isPlaying) {
          planeSound.pause();
          planeSound.currentTime = 0;
       } else {
          planeSound.play();
       }
       isPlaying = !isPlaying;
    });
    });