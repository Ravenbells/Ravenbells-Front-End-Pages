////***      Dropdowm List and Menu Mobile Vars        ***////
let dd_bubble =".dropdown-bubble";
let dd_pink = ".dropdown-pink";
let dd_text = ".description-hidden";
let open = "open";
let close = "close";

let menu_pos = ".menu-bar-pos";
let menu_bar = ".middle-bar";
let menu_items = ".menu-items";

////***      Dropdowm List Init        ***////
$(dd_pink).click(function() {
    $(dd_pink).append($(this).hasClass(open) ? $(this).removeClass(open) : $(this).addClass(open));
    $(this).closest(dd_bubble).children(dd_text).hasClass(open) ? $(this).closest(dd_bubble).children(dd_text).removeClass(open) : $(this).closest(dd_bubble).children(dd_text).addClass(open);
});
////***      Dropdowm List Final        ***////

////***      Menu Mobile Init        ***////
$(menu_pos).click(function() {
    if($(window).width() <= 992) {
        $(menu_bar).hasClass(open) ? $(menu_bar).removeClass(open) && $(menu_bar).addClass(close) : $(menu_bar).addClass(open) && $(menu_bar).removeClass(close);
        $(menu_items).hasClass(open) ?  closeMenuMobile() : openMenuMobile();
    }
});

function closeMenuMobile() {
    $(menu_items).removeClass(open);
    $(menu_items).addClass(close);
    document.getElementById("landing-page").style.overflowY = "visible";
    document.body.style.pointerEvents = "all";
}

function openMenuMobile() {
    $(menu_items).addClass(open);
    $(menu_items).removeClass(close);
    document.getElementById("landing-page").style.overflowY = "hidden";
    document.body.style.pointerEvents = "none";
}
////***      Menu Mobile Final        ***////

////***      Set Bubbles Height Init        ***////
function see_largest() {
    bgrd_pink_Class = document.getElementsByClassName(bgrd_pink);
    if($(window).width() >= 992 && !isHeightSet) {
        for(i = 0; i <= bgrd_pink_Class.length; i++ ) {
            if(i < bgrd_pink_Class.length) {
                getHeight.push(bgrd_pink_Class[i].clientHeight);
                //console.log(getHeight);
            }
            if(i == bgrd_pink_Class.length) {
                getlargest = Math.max.apply(null, getHeight);
                //console.log(getlargest);
                $(bgrd_pink_Class).css({"height": getlargest});
            }
        }
        isHeightSet = true
    }
    else {
        if($(window).width() < 992 && isHeightSet) {
            $(bgrd_pink_Class).css({"height": "auto"});
            isHeightSet = false;
        }
    }
    setTimeout (see_largest, 2000);
}
let bgrd_pink = "bubble-background";
let bgrd_pink_Class;
let getHeight = [];
let isHeightSet;  
see_largest();
////***      Set Bubbles Height Final        ***////

////***      Carousel Init        ***////
//visit https://github.com/ganlanyuan/tiny-slider for more info.
function Carousel() {
    if(!isSlidesHere && $(window).width() <= 992) {
        slider = tns({
            container: ".paw-carousel",
            nav: true,
            touch: true,
            mouseDrag: true,
            controls: false,
            navPosition: "bottom",
            navAsThumbnails: true,
            autoHeight: true,
            items: 1
        });
        isSlidesHere = true;
    }
    else {
        if ($(window).width() > 992) { 
            if(slider != null) {
                if(isSlidesHere) {
                    slider.destroy();
                    isSlidesHere = false;
                }
            }
        }
    }
    setTimeout(Carousel, 1000);
}
let isSlidesHere;
let slider;
Carousel();
////***      Carousel Final        ***////

