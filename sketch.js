$(document).ready(function(){
    $(".울버린").mouseover(function(){
    $(".울버린i").show();
    $(".울버린i").stop().animate({top:window.innerHeight-800});
    });
    $(".울버린").mouseout(function(){
    $(".울버린i").stop().animate({top:"100%"});
    
    });
    });

$(document).ready(function(){
    $(".수업").mouseover(function(){
    $(".수업i").show();
    $(".수업i").stop().animate({top:window.innerHeight/2-288})
    });
    $(".수업").mouseout(function(){
    $(".수업i").stop().animate({top:"100%"})
    });
    });



$(document).ready(function(){
    $(".시즌").mouseover(function(){
    $(".시즌i").show();
    $(".시즌i").stop().animate({top:0})
    });
    $(".시즌").mouseout(function(){
    $(".시즌i").stop().animate({top:"100%"})
    });
    });
