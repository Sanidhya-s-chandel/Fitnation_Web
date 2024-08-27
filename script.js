var navr = document.querySelector(".nav-responsive")
var menu = document.querySelector(".menu")

var flag = 0

menu.addEventListener("click",()=>{
    if(flag == 0){
        navr.style.top = 0;
        menu.classList.remove("ri-menu-line");
        menu.classList.add("ri-close-large-line");
        flag = 1;
    }else{
        navr.style.top = "-100%";
        menu.classList.remove("ri-close-large-line");
        menu.classList.add("ri-menu-line");
        flag = 0
    }
})