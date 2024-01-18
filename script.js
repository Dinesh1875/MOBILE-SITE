
//Dark mode

let modebtn=document.querySelector("#button");
let body=document.querySelector("body");
let curmode="light";
modebtn.addEventListener("click",()=>{
    if(curmode==="light"){
        curmode="dark";
        body.classList.add("darkmode");
        body.classList.remove("lightmode");

    }else{
        curmode="light";
        body.classList.add("lightmode");
        body.classList.remove("darkmode");

    }
    console.log(curmode);
})

//Image slider

const slides=document.querySelectorAll(".slides img");
let slideIndex=0;
let intervalId=null;

// initializeSlider();
document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider(){
    if(slides.length>0){
    slides[slideIndex].classList.add("displaySlide");
    intervalId=setInterval(nextSlide,5000);
    }
}

function showSlide(index){
    if(index>=slides.length){
        slideIndex=0;
    }else if(index<0){
        slideIndex=slide.length-1;
    }
    slides.forEach(slide=>{
    slide.classList.remove("displaySlide");
});
    slides[slideIndex].classList.add("displaySlide");
}

function prevSlide(){
    clearInterval(intervalId);
    slideIndex--;
    showSlide(slideIndex);
}

function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);
}
