// JavaScript Document

$(function(){
    
    $("body").addClass("hold_x");
    $(".site_nav").addClass("absolute");
    
    $(".sn_lang_1").addClass("select");
    
    $("[class*='lang_b']").addClass("hide");
    $("[class*='lang_c']").addClass("hide");
    
    //------------------------------------------------------------------------------------------------------//
    //----メニューバーのクリックリアクション----//
    
    $(".sn_center_2_list").css({"opacity":"0","height":"0"});
    $(".sn_center_2_list").addClass("hide");
    
    var click_point = 0;
    
    $("[class*='sn_center_2_button']").click(function() {

        if(click_point == 0) {

            $(".sn_center_2_list").removeClass("hide");
            $(".snc2_li_1").addClass("on");
            $(".sn_center_2_list").css({"opacity":"1"},1000);
            
            $("[class*='sn_center_2_button']").css({"color":"#77bb55"});

            click_point = 1;

        } else {
        
            $(".snc2_li_1").removeClass("on");
            $(".sn_center_2_list").css({"opacity":"0"},1000);
            $(".sn_center_2_list").addClass("hide");
            
            $("[class*='sn_center_2_button']").css({"color":"#555555"});

            click_point = 0;

        }

    });
    
    //------------------------------------------------------------------------------------------------------//
    //----ヘッダー画像上のテキストアニメーション----//
    
    setTimeout(function(){
        
        $(".header_text_1").animate({"opacity":"0"});
        
    },4000);
    
    setTimeout(function(){
        
        $(".header_text_2").animate({"opacity":"0"});
        
    },5000);
    
    setTimeout(function(){
        
        $(".header_text_3").animate({"opacity":"0"});
        
    },6000);
    
    setTimeout(function(){
        
        $(".header_text_1").addClass("hide");
        $(".header_text_2").addClass("hide");
        $(".header_text_3").addClass("hide");
        
    },7000);
    
    //------------------------------------------------------------------------------------------------------//
    //--取扱いメーカーロゴのスライドボタン--//
    
    var bt_count = 0;
    
    $(".slide_button_left").css({"color":"#555555"});
    
    $(".slide_button_left").click(function() {
        
        if(bt_count == 1){
            
            $(".slider_a_list_1").animate({"margin-left":"0"});
            $(".slide_button_left").css({"color":"#555555"});
            
            bt_count --;
            
        }
        
        if(bt_count == 2){
            
            $(".slider_a_list_1").animate({"margin-left":"-400px"});
            $(".slide_button_right").css({"color":"#55aaff"});
            
            bt_count --;
            
        }
        
    });
    
    $(".slide_button_right").click(function() {
        
        if(bt_count == 1){
            
            $(".slider_a_list_1").animate({"margin-left":"-800px"});
            $(".slide_button_right").css({"color":"#555555"});
            
            bt_count ++;
            
        }
        
        if(bt_count == 0){
            
            $(".slider_a_list_1").animate({"margin-left":"-400px"});
            $(".slide_button_left").css({"color":"#55aaff"});
            
            bt_count ++;
            
        }
        
    });
    
    $(window).on('load resize', function(){
        
        $(".slider_a_list_1").css({"margin-left":"0"});
        $(".slide_button_left").css({"color":"#555555"});
        $(".slide_button_right").css({"color":"#55aaff"});
        
        bt_count =0;
        
    });
    
    //------------------------------------------------------------------------------------------------------//
    //----言語切り替え【日本語】----//
    
    $(".sn_lang_1").click(function() {
        
        $("[class*='lang_a']").removeClass("hide");
        $("[class*='lang_b']").addClass("hide");
        $("[class*='lang_c']").addClass("hide");
        
        $(".sn_lang_1").addClass("select");
        $(".sn_lang_2").removeClass("select");
        $(".sn_lang_3").removeClass("select");
        
    });
    
    //------------------------------------------------------------------------------------------------------//
    //----言語切り替え【English】----//
    
    $(".sn_lang_2").click(function() {
        
        $("[class*='lang_a']").addClass("hide");
        $("[class*='lang_b']").removeClass("hide");
        $("[class*='lang_c']").addClass("hide");
        
        $(".sn_lang_1").removeClass("select");
        $(".sn_lang_2").addClass("select");
        $(".sn_lang_3").removeClass("select");

    });
    
    //------------------------------------------------------------------------------------------------------//
    //----言語切り替え【中文】----//
    
    $(".sn_lang_3").click(function() {
        
        $("[class*='lang_a']").addClass("hide");
        $("[class*='lang_b']").addClass("hide");
        $("[class*='lang_c']").removeClass("hide");
        
        $(".sn_lang_1").removeClass("select");
        $(".sn_lang_2").removeClass("select");
        $(".sn_lang_3").addClass("select");
        
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