
$(function(){
    //Nav Bar shirink
    $(window).scroll(function(){
       if($(window).scrollTop() >=50){
           $('nav').addClass('scrolled');          
       }else{
           $('nav').removeClass('scrolled');           
       } 
    });
    
});

/*!
 * Start Bootstrap - Agency v5.0.7 (https://startbootstrap.com/template-overviews/agency)
 * Copyright 2013-2019 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-agency/blob/master/LICENSE)
 */

! function (o) {
    "use strict";
    o('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
            var a = o(this.hash);
            if ((a = a.length ? a : o("[name=" + this.hash.slice(1) + "]")).length) return o("html, body").animate({
                scrollTop: a.offset().top - 54
            }, 1e3, "easeInOutExpo"), !1
        }
    }), o(".js-scroll-trigger").click(function () {
        o(".navbar-collapse").collapse("hide")
    }), o("body").scrollspy({
        target: "#mainNav",
        offset: 56
    });   
}(jQuery);