let buttonContact = document.querySelectorAll('.buttons-contact button img');
let borderButtonContact = document.querySelectorAll('.buttons-contact button');
let buttonSrc = "";
let slice = "";
let buttonContactChanged = "";

for(let i=0; i<buttonContact.length;i++){
    borderButtonContact[i].addEventListener('mouseover', buttonHover);
    borderButtonContact[i].addEventListener('mouseout', buttonOut);

    function buttonHover(){

        buttonSrc = buttonContact[i].getAttribute('src');
        testSlice = buttonSrc.slice(-4)
        slice = buttonSrc.slice(0, -4)
        buttonContactChanged = slice + 'hover.png';
        buttonContact[i].src= buttonContactChanged 
        buttonContact[i].style.transition= "0.4s";      
    }

    function buttonOut(){

        buttonContact[i].src =  buttonSrc      
    }
}


let overlay = document.querySelectorAll('.overlay');
let imgZoom = document.querySelectorAll('.img-zoom');
let textInfo = document.querySelectorAll('.text-info');
let infoTitle = document.querySelectorAll('.info-title');
let paragraphInfo = document.querySelectorAll('.paragraph-info');
let arrow = document.querySelectorAll('.arrow img');



for(let i=0; i<arrow.length;i++){
    arrow[i].addEventListener('mouseover', arrowHover);
    arrow[i].addEventListener('mouseout', arrowOut);


    function arrowHover(){
        arrow[i].src="images/icons/arrowhover.png";
    }
    function arrowOut(){
        arrow[i].src="images/icons/arrow.png";
    }
}



for(let i=0; i<overlay.length;i++){

    textInfo[i].addEventListener('mouseover', boxHoverOn);
    overlay[i].addEventListener('mouseover', boxHoverOn);
    textInfo[i].addEventListener('mouseout', boxHoverOff);
    overlay[i].addEventListener('mouseout', boxHoverOff);
    
    function boxHoverOn()
    {
        imgZoom[i].style.transform="scale(1.1)" ;
        overlay[i].style.opacity="1";
        overlay[i].style.cursor="pointer";
        textInfo[i].style.boxShadow="0 0 5px rgb(154, 117, 173, 0.4)";
        infoTitle[i].style.color="rgb(182, 133, 204, 1)"; 
        infoTitle[i].style.transition="0.4s";
        infoTitle[i].style.transform="translateX(3px)";
        paragraphInfo[i].style.color="#c0c0c0";
        paragraphInfo[i].style.transform="translateX(3px)";
        arrow[i].style.transform="translateX(3px)";
        arrow[i].style.cursor="pointer";


    }

    function boxHoverOff()
    {
        imgZoom[i].style.transform="none" ;
        overlay[i].style.opacity="0";
        textInfo[i].style.boxShadow="none";
        infoTitle[i].style.color="rgb(121,88,138,1)";
        infoTitle[i].style.transition="0.4s";
        infoTitle[i].style.transform="translateX(-3px)";
        paragraphInfo[i].style.color="grey";
        paragraphInfo[i].style.transform="translateX(-3px)";
        arrow[i].style.transform="translateX(-3px)";

    }

}


let retangleOverlay = document.querySelectorAll('.retangle-overlay');
let imageGallery = document.querySelectorAll('.image-gallery');
let expand = document.querySelectorAll('.expand');


for(let i=0; i<retangleOverlay.length; i++){

    retangleOverlay[i].addEventListener('mouseover', galleryHoverOn);
    imageGallery[i].addEventListener('mouseover', galleryHoverOn);
    retangleOverlay[i].addEventListener('mouseout', galleryHoverOff);
    imageGallery[i].addEventListener('mouseout', galleryHoverOff);

    function galleryHoverOn(){
        retangleOverlay[i].style.opacity="1";
        retangleOverlay[i].style.transform="translateX(0px)";
        imageGallery[i].style.transform="scale(1.1)";
        imageGallery[i].style.filter="blur(0.5px)";
        imageGallery[i].style.cursor="pointer";
        retangleOverlay[i].style.cursor="pointer";
        expand[i].style.transform="translateX(5px)";
    }

    function galleryHoverOff(){
        retangleOverlay[i].style.opacity="0";
        retangleOverlay[i].style.transform="translateX(-5px)";
        imageGallery[i].style.transform="none";
        imageGallery[i].style.filter="blur(0px)";
        expand[i].style.transform="translateX(-5px)";
    }



}



let modal = document.getElementById('modal');
let modalImg = document.getElementById('modal-img');
let btnClose = document.getElementById('btn-close');
let srcVal="";

for(let i =0; i<imageGallery.length; i++){
    retangleOverlay[i].addEventListener('click', openModal);
    imageGallery[i].addEventListener('click', openModal);

    function openModal(){
        srcVal = imageGallery[i].getAttribute('src');
        modalImg.setAttribute('src', srcVal);
        modal.style.visibility="visible";
        modal.style.opacity="1";
    }
    
}

btnClose.addEventListener('click', function(){
    modal.style.visibility="hidden";
    modal.style.opacity="0";

})


const debounce = function(func, wait, immediate){
    let timeout;
    return function(...args){
        const context = this;
        const later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

function animeScroll(){
    const windowTop = window.pageYOffset + (window.innerHeight * 0.85);
    target.forEach(function (element) {

        if((windowTop) > element.offsetTop) {
            element.classList.add(animationClass);
        } else{
            element.classList.remove(animationClass);
        }
       
    })
}

animeScroll();

if(target.length){
window.addEventListener('scroll', debounce(function (){
    animeScroll();
}, 15));
}
