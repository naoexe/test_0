// JavaScript Document

$(function(){
    
    $("body").addClass("hold_x");
    
    $(window).on('scroll', function() {
        
        if ($(this).scrollTop() > 80) {
            
            $(".site_nav").addClass("fixed");
            $(".header_area").css({
                "-webkit-filter":"blur(5px)","-ms-filter":"blur(5px)",
                "filter":"blur(5px)"
            });
            
            
        } else {
            
            $(".site_nav").removeClass("fixed");
            $(".header_area").css({
                "-webkit-filter":"blur(0)","-ms-filter":"blur(0)",
                "filter":"blur(0)"
            });
            
        }
        
        if ($(this).scrollTop() > 900) {
            
            $(".back_zone").css({
                "-webkit-filter":"blur(5px)","-ms-filter":"blur(5px)",
                "filter":"blur(5px)"
            });
            
            
        } else {
            
            $(".back_zone").css({
                "-webkit-filter":"blur(0)","-ms-filter":"blur(0)",
                "filter":"blur(0)"
            });
            
        }
        
    });
    
    //------------------------------------------------------------------------------------------------------//
    
    //------------------------------------------------------------------------------------------------------//
    
});