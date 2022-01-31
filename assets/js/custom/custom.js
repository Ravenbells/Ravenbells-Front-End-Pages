/** SCROLL **/
let scroll = ".scroll-button";
let hover  = "hover";


/** CAROUSEL **/

let slidesClass = ".jobsway";
let slidesActive = "slider-active";
let slidesContent = "content-carousel";
let dropdownContent =".blocks-content";

let initial = "initial";
let active = "active";
let prev   = "prev";
let next   = "next";
let open   = "open";
let before = "before";
let after  = "after";

let dotsCarousel = ".dots-carousel";
let dotsAll      = "dots-carousel";
let dots         = "dots";
let filled        = "filled";


/** SCROLL **/
function isOnScreen(element)
{
    screenHeight = $(window).height();
    curTop = element.offset().top;
    return (curTop > screenHeight ? false : true);
}
scrollBall();
function scrollBall() {
    if($(scroll).hasClass(hover) && $(isOnScreen($(scroll)))) {
        $(scroll).removeClass(hover);    
    }
    else {
        $(scroll).addClass(hover);    
    }
    setTimeout(scrollBall, 900);
}

/** CAROUSEL **/

$(slidesClass).click(function() {
    let carouselId = $(this).attr("id");
    let slideID = carouselId.match( /\d+/)[0];
    //console.log(slideID);
    if($(window).width() >= 992) {
        $(slidesClass).hasClass(slidesActive) ? $(slidesClass).removeClass(slidesActive) && $(this).addClass(slidesActive) : $(this).addClass(slidesActive);
        carouselArray(slideID);
    }
    else {
        $(this).toggleClass(open);
        $(this).next(dropdownContent).toggleClass(open);
    }
});

//Conditions to count dots
countingDots();
function countingDots () {
    let carouselItems = document.getElementsByClassName(slidesContent);
    
    for(i = 0; i < carouselItems.length; i++) {

        //start with one initial slide
        !$(carouselItems[0]).hasClass(initial) ? $(carouselItems[i]).addClass(initial) : "";

        if($(dotsCarousel)[0]) {
            carouselDotsSpan = document.createElement("span");
            carouselDots = document.getElementsByClassName(dotsAll);
            $(carouselDotsSpan).addClass(dots);
            $(carouselDots).append(carouselDotsSpan);
            //carouselDots[0].appendChild(carouselDotsSpan);
        }
    }
    dot = document.getElementsByClassName(dots);
    $(carouselItems[0]).hasClass(initial) ? $(dot[0]).addClass(filled) : "";
}

//Conditions to verify carousel
function carouselArray(slideID) {
    let carouselItems = document.getElementsByClassName(slidesContent);
    let thePrevItem;
    let theNextItem;
    slideID = parseInt(slideID);

    for (let i = 0; i < carouselItems.length; i++) {

        //Add prev attribute
        if($(carouselItems[i]).hasClass(active) && carouselItems[i] != carouselItems[slideID]) {
            thePrevItem = carouselItems[i];
            $(thePrevItem).addClass(prev);
        }

        //Remove active and next attributes and only remove used prev attribute
        if(carouselItems[i] != thePrevItem) { 
            $(carouselItems[i]).removeClass(active).removeClass(prev).removeClass(next).removeClass(after).removeClass(before);
        }
        else {
            $(carouselItems[i]).removeClass(active).removeClass(next).removeClass(after).removeClass(before);
        }

        //Remove Initial class
        if($(carouselItems[i]).hasClass(initial)) {
            $(carouselItems[i]).addClass(prev).removeClass(initial);
        }
    }
    //Add new active and choose next slide
    $(carouselItems[slideID]).addClass(active);
    theNextItem = carouselItems[slideID + 1];
    theNextItem != null ? theNextItem.classList.add(next) : $(carouselItems[0]).addClass(after);
    $(theNextItem).hasClass(prev) ? $(theNextItem).removeClass(prev).removeClass(next).addClass(before) : "";

    //Fill/Empty Dots
    let dot = document.getElementsByClassName(dots);
    $(dot).hasClass(filled) != null ? $(dot).removeClass(filled) && $(dot[slideID]).addClass(filled) : $(dot[slideID]).addClass(filled);
}

/** CAROUSEL END **/


/** PHONE FIELD FORM **/

//Verify if certain keys are pressed and return false if it does
const isNumericInput = (event) => {
    const key = event.keyCode;
    return ((key >= 48 && key <= 57) || (key >= 96 && key <= 105)
    );
};
const isModifierKey = (event) => {
    const key = event.keyCode;
    return (event.shiftKey === true || key === 35 || key === 36)
    || (key === 8 || key === 9 || key === 13 || key === 46) 
    || (key > 36 && key < 41) ||
    (
        (event.ctrlKey === true || event.metaKey === true)
        && (key === 65 || key === 67 || key === 86 || key === 88 || key === 90)
    )
}
//Verify if the boolean about the input keys is true or false. 
//If false, no typing is allowed
const enforceFormat = (event) => {
    if(!isNumericInput(event) && !isModifierKey(event)) {
        event.preventDefault();
    }
};
//Format numbers in input
const formatToTelephone = (event) => {
    if(isModifierKey(event)) {return;}

    const target = event.target;
    const input = event.target.value.replace(/\D/g, '').substring(0, 11); //Only eleven numbers can be typed in input
    const zip = input.substring(0,2); //the number in "()"
    const middle = input.substring(2,7); //the number before "-"
    const last = input.substring(7,11); //the number after "-"

    if(input.length > 7) {target.value = `(${zip}) ${middle} - ${last}`;}
    else if(input.length > 2){target.value = `(${zip}) ${middle}`;}
    else if(input.length > 0){target.value = `(${zip}`;}
};
//Add events to the input by element's ID
//If there aren't some user typing keys that are allowed, input will enforce phone format
const inputPhone = document.getElementById("telefone");
inputPhone.addEventListener('keydown', enforceFormat);
inputPhone.addEventListener("keyup", formatToTelephone);

/** PHONE FIELD FORM END **/