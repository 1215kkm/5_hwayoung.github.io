$(document).ready(function(){
    var slidP = 0;

    var conW = $('.mobile_product_zone').width()
    var view = 1;
    var itemW = conW / view;
    var itemLength = $('.mobile_product_zone > ul > li').length;

    $('.mobile_product_zone > ul').width(itemW * itemLength);
    $('.mobile_product_zone > ul > li').width(itemW)

    var liW = $('.mobile_product_zone > ul > li').width();
    
    $('.product_arrow .next').click(function(){
        // if(slidP < -itemW){
        //     return;
        // }

        $('.product_wrap .mobile_product_zone > ul').stop().animate({marginLeft:-itemW})

        // slidP = slidp - itemW;
        // console.log(slidP)

        // if(slidP <= -itemW * itemLength){
        //     $('.product_arrow .next').hide();
        // }

        // $('.product_arrow .prev').show();

    })

    $('.product_arrow .prev').click(function(){
        if(slidP >= 0){
            return;
        }

        slidP = slidP + liW;
        $('.product_wrap .mobile_product_zone > ul').stop().animate({marginLeft:slidP})
        console.log(slidP)

        if(slidP > -liW){
            $('.product_arrow .prev').hide();
        }
        $('.product_arrow .next').show();
    })
})