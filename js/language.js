var dots = document.getElementsByClassName("dot");
let dotCurrentIndex;

for (var i = 0, len = dots.length; i < len; i++) {
    (function(index){
      let track = document.querySelector(".slider-track");
      dots[i].onclick = function(){
      let activeDot = document.querySelector(".active");
      track.style.right = 1106*index + "px";
      activeDot.classList.remove("active");
      dots[index].classList.add("active");
    } })(i);
      }

