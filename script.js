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

Products = [{
    name: "Jacket",
    image : "./jacket-removebg-preview.png"
},{
    name: "Watch",
    image: "./watch-removebg-preview.png"
},{
    name: "Bag",
    image: "./bag-removebg-preview.png"
},{
    name: "Bottel",
    image: "./bottel-removebg-preview.png" 
},{
    name: "Protiens",
    image: "./protiens-removebg-preview.png"
},{
    name: "Shoes",
    image: "./shoes-removebg-preview.png"
}];

var slider = document.querySelector(".slider")
container = "";

Products.forEach((e)=> {
    container += `<div class="p1 h-full max-sm:h-[50vh] max-sm:w-[300px] w-[500px] text-center">
                    <img src="${e.image}" alt="err" class="h-full w-full object-contain object-center border-b-4 border-[#96FC04]">
                    <h1 class="m-4 text-2xl font-semibold">${e.name}</h1>
                </div>`
});

slider.innerHTML = container

var tl = gsap.timeline()

tl.from(".nav h1",{
    y : 50,
    opacity: 0,
    duration: 1.5,
    delay: 0.5,
    stagger: 0.5
})

tl.from(".nav-responsive h1",{
    y : 50,
    opacity: 0,
    duration: 1.5,
    delay: 0.1,
    stagger: 0.5
})

gsap.to(".products .slider",{
    transform: "translateX(-240%)",
    scrollTrigger:{
        trigger: ".products",
        scroller: "Body",
        start: "top 250",
        end: "top -40%",
        scrub: 5,
        pin: true,
        duration:2,
    }
})