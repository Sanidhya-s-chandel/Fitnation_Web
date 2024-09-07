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

const pics = [
    "https://i.pinimg.com/564x/48/96/c2/4896c29a479322f05bf34cb69393ba4a.jpg",
    "https://i.pinimg.com/736x/0f/4e/bd/0f4ebd3ee380f678d1cd9b009a1f5561.jpg",
    "https://i.pinimg.com/736x/3a/31/ed/3a31ed9bc6dad9abf445018971451342.jpg",
    "https://i.pinimg.com/736x/29/6d/45/296d4560392919bb0d830d03e3810ef7.jpg",
    "https://i.pinimg.com/736x/bc/f8/93/bcf8935c1cdf1ad5c3c3d117b5d4f91a.jpg",
    "https://i.pinimg.com/736x/16/9b/01/169b01433eac1872902e8e194d60e78d.jpg"
];

let i = 0;
const image = document.querySelector(".M1-img");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

function changeImage(index) {
    image.style.opacity = 0; // Start the fade out effect
    setTimeout(() => {
        image.setAttribute("src", pics[index]);
        image.style.opacity = 1; // Fade back in after the image has changed
    }, 1000); // This should match the duration of the transition
}

next.addEventListener("click", () => {
    i = (i + 1) % pics.length;
    changeImage(i);
});

prev.addEventListener("click", () => {
    i = (i - 1 + pics.length) % pics.length;
    changeImage(i);
});