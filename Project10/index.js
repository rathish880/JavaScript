const slides=document.querySelectorAll('.slide');
const next=document.querySelector('#next');
const prev=document.querySelector('#prev');
var interval=2000;
var auto=true;
var slideInterval;

const nextSlide=()=>{
    var current=document.querySelector('.current');
    current.classList.remove('current');
    if(current.nextElementSibling){
        current.nextElementSibling.classList.add('current');
    }
    else{
        slides[0].classList.add('current');
    }
    // setTimeout(()=>{
    //     current.classList.remove('current');
    // })
}

const previousSlide=()=>{
    var current=document.querySelector('.current');
    current.classList.remove('current');
    if(current.previousElementSibling){
        current.previousElementSibling.classList.add('current');
    }
    else{
        slides[slides.length-1].classList.add('current');
    }
    // setTimeout(()=>{
    //     current.classList.remove('current');
    // });
}
if(auto){
    slideInterval=setInterval(nextSlide,interval)
}


next.addEventListener('click',()=>{
    nextSlide();
    clearInterval(slideInterval);
    slideInterval=setInterval(nextSlide,interval);

});
prev.addEventListener('click',()=>{
    previousSlide();
    clearInterval(slideInterval);
    slideInterval=setInterval(previousSlide,interval)
});