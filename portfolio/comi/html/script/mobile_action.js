$(document).ready(function(){
    $('.hamberg').click(function(){
        $('.hamberg_bg').show();
        $('.hamberg_bg').stop().animate({width:'100%'});
        $('.hamberg span').addClass('hide_span');
    })

    $('.mobile_close').click(function(){
        $('.hamberg_bg').hide();
        $('.hamberg_bg').stop().animate({width:'0'});
        $('.hamberg span').removeClass('hide_span');
    })

    $('.hamberg_bg > ul > li').click(function(){
        $(this).find('.mo_navi').slideToggle();
    })

})

