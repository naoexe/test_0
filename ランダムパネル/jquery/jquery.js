// JavaScript Document

$(function(){
    
    var TIMER;
 
    function move(){
        //0～90の乱数
        $(".target").animate({
            'top': Math.round( Math.random()*90 ) + "%",
            'left': Math.round( Math.random()*90 ) + "%"
        },200);
    }
    
    $('.target').click(function(){
        alert("CLICK!");
        clearInterval(TIMER);
    });
     
    $('#start_button').click(function(){
        clearInterval(TIMER);
        TIMER = setInterval(function(){move()}, 500);
    });
     
    $('#stop_button').click(function(){
        clearInterval(TIMER);
    });
     
});