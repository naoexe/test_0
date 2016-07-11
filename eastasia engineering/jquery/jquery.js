// JavaScript Document

$(function(){
    
    $("body").addClass("hold_x");
    
    $("[class*='lang_b']").addClass("hide");
    $("[class*='lang_c']").addClass("hide");
    
    //------------------------------------------------------------------------------------------------------//
    //----言語切り替え【日本語】----//
    
    $(".sn_right_1").click(function() {
        
        $("[class*='lang_a']").removeClass("hide");
        $("[class*='lang_b']").addClass("hide");
        $("[class*='lang_c']").addClass("hide");
        
    });
    
    //------------------------------------------------------------------------------------------------------//
    //----言語切り替え【English】----//
    
    $(".sn_right_2").click(function() {
        
        $("[class*='lang_a']").addClass("hide");
        $("[class*='lang_b']").removeClass("hide");
        $("[class*='lang_c']").addClass("hide");
        
    });
    
    //------------------------------------------------------------------------------------------------------//
    //----言語切り替え【中文】----//
    
    $(".sn_right_3").click(function() {
        
        $("[class*='lang_a']").addClass("hide");
        $("[class*='lang_b']").addClass("hide");
        $("[class*='lang_c']").removeClass("hide");
        
    });
    
    //------------------------------------------------------------------------------------------------------//
    //----スクロールによるサイトアクション----//
    
    $(window).on('scroll', function() {
        
        //----メニューバー固定化----//
        
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
        
        //------------------------------------------------------------------------------------------------------//
        //----背景画像のぼかし----//
        
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
        
        //------------------------------------------------------------------------------------------------------//
    
    });
    
    //------------------------------------------------------------------------------------------------------//
    
});