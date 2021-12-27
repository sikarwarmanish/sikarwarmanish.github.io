
var menuBtn = document.querySelector(".menu-button");
var cancelBtn = document.querySelector(".cancel-button");
var navBar = document.querySelector(".navbar");
menuBtn.onclick = function(){
    menuBtn.style.opacity="0";
    menuBtn.style.pointerEvents = "none";
    navBar.classList.add("active");
    
}
cancelBtn.onclick = function(){
    menuBtn.style.opacity="1";
    menuBtn.style.pointerEvents = "auto";
    navBar.classList.remove("active");
}

var nav = document.querySelector("nav");
window.onscroll = function(){
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("sticky");
    }else{
        nav.classList.remove("sticky")
    }
}