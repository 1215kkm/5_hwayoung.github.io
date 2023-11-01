$(document).ready(function(){
    $('.jeonju .jj_hover').mouseover(function(){
        $('.map_jj img').eq(0).css({opacity:'0'})
    })


    $('.jeonju .jj_hover').mouseleave(function(){
        $('.map_jj img').eq(0).css({opacity:'1'})
    })




    $('.buan .ba_hover').mouseover(function(){
        $('.map_ba img').eq(0).css({opacity:'0'})
    })


    $('.buan .ba_hover').mouseleave(function(){
        $('.map_ba img').eq(0).css({opacity:'1'})
    })



    $('.gunsan .gs_hover').mouseover(function(){
        $('.map_gs img').eq(0).css({opacity:'0'})
    })


    $('.gunsan .gs_hover').mouseleave(function(){
        $('.map_gs img').eq(0).css({opacity:'1'})
    })


    $('.gnb_wrap a').click(function(){
        var naviT = $($(this).attr('href')).offset().top;
        $('html,body').stop().animate({scrollTop:naviT})

        return false;
    })



})




