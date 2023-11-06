function mobileNavClick(){
    $("nav").slideToggle();
    $('.menu-icon').toggleClass("active");
};
var imgContent;
function showImgContent(e) {
    for(var i = 0; i < imgContent.length; i++) {
      x = e.pageX;
      y = e.pageY;
      imgContent[i].style.transform = `translate3d(${x}px, ${y}px, 0)`;
    }
  };  
  function setTextAnimation(delay, duration, strokeWidth, timingFunction, strokeColor,repeat) {
    let paths = document.querySelectorAll("path");
    let mode=repeat?'infinite':'forwards'
    for (let i = 0; i < paths.length; i++) {
        const path = paths[i];
        const length = path.getTotalLength();
        path.style["stroke-dashoffset"] = `${length}px`;
        path.style["stroke-dasharray"] = `${length}px`;
        path.style["stroke-width"] = `${strokeWidth}px`;
        path.style["stroke"] = `${strokeColor}`;
        path.style["animation"] = `${duration}s svg-text-anim ${mode} ${timingFunction}`;
        path.style["animation-delay"] = `${i * delay}s`;
    }
}

  document.addEventListener("DOMContentLoaded", function() {
    imgContent = document.querySelectorAll('.img-content-hover');
    document.addEventListener('mousemove', showImgContent);
    setTextAnimation(0.1,10,2,'ease-in-out','#b9b9b9',false);
  });

    



