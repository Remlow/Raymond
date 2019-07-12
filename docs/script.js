// Conditionally load the sticky navigation
if (screen.width >= 1024) {
    window.onscroll = function() {stickynav()};
    
    var header = document.getElementById("myTopnav");
    var sticky = header.offsetTop;
    
    function stickynav() {
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    }
}

// If the screen is less than 768px then load this script
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}