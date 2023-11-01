$(document).ready(function(){
    $('#header').mouseover(function(){
        $('.gnb_bg').stop().slideDown();
        $('.gnb_wrap ul li .nav').stop().slideDown();
        $('.gnb_wrap ul li span').css({display:'block'});
    })

    $('#header').mouseleave(function(){
        $('.gnb_bg').stop().slideUp();
        $('.gnb_wrap ul li .nav').stop().slideUp();
        $('.gnb_wrap ul li span').css({display:'none'});
    })


    $(window).scroll(function(){

    })
})



$(document).ready(function(){
    var quickT = parseInt($('#side_bar').css('top'));
    
        $(window).scroll(function(){
            var scrT = $(this).scrollTop();
            
            // #('header').height(); 헤더 높이
            console.log(scrT)
    
            $('#side_bar').stop().animate({top:scrT+quickT})
    
        })
    })    




$(document).ready(function(){
    $(window).scroll(function(){
        var scrT = $(window).scrollTop();
        $('.section01_wrap .text01 > ul').each(function(){
            if(scrT >= $(this).offset().top - $(window).height()/1.2){
                $(this).addClass('text_ani')
            } else {
                $(this).removeClass('text_ani')
    
                }
        })

    })


    $(window).scroll(function(){
        var scrT = $(window).scrollTop();
        $('.section01_wrap .text02 > ul').each(function(){
            if(scrT >= $(this).offset().top - $(window).height()/1.2){
                $(this).addClass('text_ani02')
            } else {
                $(this).removeClass('text_ani02')
    
                }
        })

    })

    $(window).scroll(function(){
        var scrT = $(window).scrollTop();
        $('.section02_wrap .text01 > ul').each(function(){
            if(scrT >= $(this).offset().top - $(window).height()/1.2){
                $(this).addClass('text_ani03')
            } else {
                $(this).removeClass('text_ani03')
    
                }
        })

    })


    $(window).scroll(function(){
        var scrT = $(window).scrollTop();
        $('.section02_wrap .text02 > ul').each(function(){
            if(scrT >= $(this).offset().top - $(window).height()/1.2){
                $(this).addClass('text_ani04')
            } else {
                $(this).removeClass('text_ani04')
    
                }
        })

    })

    
    $(window).scroll(function(){
        var scrT = $(window).scrollTop();
        $('.section03_wrap .text01 > ul').each(function(){
            if(scrT >= $(this).offset().top - $(window).height()/1.2){
                $(this).addClass('text_ani05')
            } else {
                $(this).removeClass('text_ani05')
    
                }
        })

    })


    
    $(window).scroll(function(){
        var scrT = $(window).scrollTop();
        $('.section03_wrap .text02 > ul').each(function(){
            if(scrT >= $(this).offset().top - $(window).height()/1.2){
                $(this).addClass('text_ani06')
            } else {
                $(this).removeClass('text_ani06')
    
                }
        })

    })



})
