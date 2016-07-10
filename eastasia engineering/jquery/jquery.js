// JavaScript Document

$(function(){
    
    $("body").addClass("hold_x");
    $(".hb1_sheet_1").addClass("hide");
    
    $(".select_image_board").addClass("hide");
    
    $(".gm_button_off").addClass("hide");
    $(".g_map").addClass("hide");
    
    setTimeout(function(){
        
        $(".hb1_sheet_1").removeClass("hide");
        
    },2500);
    
    $(window).on('scroll', function() {
        
        if ($(this).scrollTop() > 50) {
            
          $(".site_nav").addClass("fixed");
            
        } else {
            
          $(".site_nav").removeClass("fixed");
            
        }
        
    });
    
    //------------------------------------------------------------------------------------------------------//
    //--写真スライドボタン--//
    
    var bt_count = 0;
    
    $(".sb_left").css({"color":"#333333","opacity":"0.8"});
    
    $(".sb_left").click(function() {
        
        if(bt_count == 1){
            
            $(".ib1_list_1").animate({"margin-left":"0"});
            $(".sb_left").css({"color":"#333333","opacity":"0.8"});
            
            $("[class*='si_c']").addClass("sl_l");
            
            bt_count --;
            
        }
        
        if(bt_count == 2){
            
            $(".ib1_list_1").animate({"margin-left":"-400px"});
            
            $("[class*='si_c']").addClass("sl_l");
            
            bt_count --;
            
        }
        
        if(bt_count == 3){
            
            $(".ib1_list_1").animate({"margin-left":"-800px"});
            $(".sb_right").css({"color":"#ffffff","opacity":"1"});
            
            $("[class*='si_c']").addClass("sl_l");
            
            bt_count --;
            
        }
        
        setTimeout(function(){
            
            $("[class*='si_c']").removeClass("sl_l");
            
        },1000);
        
    });
    
    $(".sb_right").click(function() {
        
        if(bt_count == 2){
            
            $(".ib1_list_1").animate({"margin-left":"-1200px"});
            $(".sb_right").css({"color":"#333333","opacity":"0.8"});
            
            $("[class*='si_c']").addClass("sl_r");
            
            bt_count ++;
            
        }
        
        if(bt_count == 1){
            
            $(".ib1_list_1").animate({"margin-left":"-800px"});
            
            $("[class*='si_c']").addClass("sl_r");
            
            bt_count ++;
            
        }
        
        if(bt_count == 0){
            
            $(".ib1_list_1").animate({"margin-left":"-400px"});
            $(".sb_left").css({"color":"#ffffff","opacity":"1"});
            
            $("[class*='si_c']").addClass("sl_r");
            
            bt_count ++;
            
        }
        
        setTimeout(function(){
            
            $("[class*='si_c']").removeClass("sl_r");
            
        },1000);
        
    });
    
    
    //------------------------------------------------------------------------------------------------------//
    //--Google mapの表示・非表示ボタン--//
    
    $(".gm_button_on").click(function() {
        
        $(".inner_box_3").animate({"height":"900px"});
                               
        $(".g_map").removeClass("hide");
        
        $(".gm_button_off").removeClass("hide");
        $(".gm_button_on").addClass("hide");
        
    });
    
    $(".gm_button_off").click(function() {
        
        $(".g_map").addClass("hide");
        
        $(".inner_box_3").animate({"height":"420px"});
        
        $(".gm_button_on").removeClass("hide");
        $(".gm_button_off").addClass("hide");
        
    });
    
});