// JavaScript Document

$(function(){
    
    $("body").addClass("hold_x");
    $(".site_nav").addClass("absolute");
    
    $("[class*='lang_b']").addClass("hide");
    $("[class*='lang_c']").addClass("hide");
    
    //------------------------------------------------------------------------------------------------------//
    //----メニューバーのリアクション----//
    
    $(".sn_center_2_list").css({"opacity":"0","height":"0"});
    
    $("[class*='sn_center_2_0'] p").hover(function(){
        
        $(".snc2_li_1").addClass("on");
        $(".sn_center_2_list").css({"opacity":"1","z-index":"100"},1000);
        
    },function(){
        
        $(".snc2_li_1").removeClass("on");
        $(".sn_center_2_list").css({"opacity":"0","z-index":"1"},1000);
        
    });
    
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
    //----スクロールによるサイトリアクション----//
    
    $(window).on('scroll', function() {
        
        if ($(this).scrollTop() > 90) {
            
            //----メニューバー固定化----//
            $(".site_nav").addClass("fixed");
            
            //----ヘッダー画像ぼかし----//
            $(".header_area").css({
                "-webkit-filter":"blur(5px)","-ms-filter":"blur(5px)",
                "filter":"blur(5px)"
            });
            
            
        } else {
            
            //----メニューバー固定化【解除】----//
            $(".site_nav").removeClass("fixed");
            
            //----ヘッダー画像ぼかし【解除】----//
            $(".header_area").css({
                "-webkit-filter":"blur(0)","-ms-filter":"blur(0)",
                "filter":"blur(0)"
            });
            
        }
        
        //------------------------------------------------------------------------------------------------------//
        //----背景画像のぼかし----//
        
        if ($(this).scrollTop() > 900) {
            
            //----背景画像ぼかし----//
            $(".back_zone").css({
                "-webkit-filter":"blur(5px)","-ms-filter":"blur(5px)",
                "filter":"blur(5px)"
            });
            
            
        } else {
            
            //----背景画像ぼかし【解除】----//
            $(".back_zone").css({
                "-webkit-filter":"blur(0)","-ms-filter":"blur(0)",
                "filter":"blur(0)"
            });
            
        }
        
        //------------------------------------------------------------------------------------------------------//
    
    });
    
    //------------------------------------------------------------------------------------------------------//
    
});