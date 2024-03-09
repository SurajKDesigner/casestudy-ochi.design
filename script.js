function locoscroll(){
  const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
}
  
locoscroll();


  var click = document.querySelector(".click");
  var closer = document.querySelector(".close");
  var head = document.querySelector(".headeroverlay");
click.addEventListener("click",function(){
    head.style.top = "0%"
})
closer.addEventListener("click",function(){
  head.style.top = "-200%"
})
  
function Eye(){
  document.querySelector("#main").addEventListener("mousemove", eyeball);

function eyeball() {
    var eye = document.querySelectorAll(".line");
    eye.forEach(function (eye) {
        let x = (eye.getBoundingClientRect().left) + (eye.clientWidth / 2)
        let y = (eye.getBoundingClientRect().top) + (eye.clientHeight / 2);
        let radian = Math.atan2(event.pageX - x, event.pageY - y);
        let rot = (radian * (180 / Math.PI) * -1) + 270;
        eye.style.transform  = "rotate("+ rot +"deg)"
    })

};
}

Eye();

