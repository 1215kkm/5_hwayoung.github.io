/*main*/

$(document).ready(function(){

    $('.gnb > ul > li').mouseover(function(){
        var km = $(this).find('.nav').length;
        if(km > 0){
            $('.gnb_bg').stop().slideDown();
            $('.gnb_bg').addClass('action');
            $('.search').hide();

        } else {

            $('.gnb_bg').slideUp();
            $('.search').hide();
        }

            
    })

    $('.gnb > ul > li').mouseleave(function(){
        $('.gnb_bg').stop().slideUp();
    })

    $(window).scroll(function(){
        if($('html').scrollTop() > 0){
            $('#header').addClass('active')

        } else {
            $('#header').removeClass('active')
        }
    })

    $('.icon_gnb .search_icon').click(function(){
        $('.search').stop().slideToggle();
        
    })


    $('.promotion_btns span').click(function(){
        var hh = $(this).index();

        $('.promotion_product li').eq(hh).addClass('plus_btns').siblings().removeClass('plus_btns')

        hh = hh * -520;
        console.log(hh);

        $('.promotion_product .slide').animate({top:hh})
        $(this).addClass('plus_btns').siblings().removeClass('plus_btns')
    })


    // $('.product_arrow .next').click(function(){
    //     var yy = $(this).index();

    //     yy = yy * -300;
    //     console.log(yy);

    //     $('.product_zone > ul').animate({left:yy})
    // })

    // $('.product_arrow .prev').click(function(){
    //     var yy = $(this).index();

    //     yy = yy * 300;
    //     console.log(yy);

    //     $('.product_zone > ul').animate({left:yy})
    // })




    $('.product_title li').eq(0).click(function(){
        $('.new_product').show();
        $('.best_product').hide();
        $('.product_title li span').eq(0).addClass('plus_color')
        $('.product_title li:eq(1) span').removeClass('plus_color')
    })

    $('.product_title li').eq(1).click(function(){
        $('.best_product').show();
        $('.new_product').hide();
        $('.product_title li span').eq(1).addClass('plus_color')
        $('.product_title li:eq(0) span').removeClass('plus_color')
    })





})






// $(document).ready(function(){
//     var slidP = 0;

//     var conW;
//     var view;
//     var widthSize;
//     var itemW;

//     var itemLength;

//     var liW;

//     var km = $(document).width();
//         if (km <= 812) {
//                 view = 1;
//             }
//         else {
//                 view = 3
//         }

//         conW = $('.product_zone').width()
//         widthSize = window.outerWidth;
//         itemW = parseInt(conW / view);
//         itemLength = $('.product_zone > ul.best_product > li').length;
//         $('.product_zone > ul').width(itemW * itemLength);
//         $('.product_zone > ul > li').width(itemW);



//         $(window).resize(function(){
//             if (widthSize <= 812) {
//                 conW = $('.product_zone').width()
//                 widthSize = window.outerWidth;
//                 view = 1;
//                 itemW = parseInt(conW / view);
//                 console.log(itemW)

//                 itemLength = $('.product_zone > ul.best_product > li').length;
//                 $('.product_zone > ul').width(itemW * itemLength);
//                 $('.product_zone > ul > li').width(itemW);
//                 liW = $('.product_zone > ul > li').width();
//             }
//             else {
//                 conW = $('.product_zone').width()
//                 widthSize = window.outerWidth;
//                 view = 3;
//                 itemW = parseInt(conW / view);
//                 console.log(itemW)

//                 itemLength = $('.product_zone > ul.best_product > li').length;
//                 $('.product_zone > ul').width(itemW * itemLength);
//                 $('.product_zone > ul > li').width(itemW);
//                 liW = $('.product_zone > ul > li').width();
//             }
//         })
    


    
//     $('.product_arrow .next').click(function(){
//         if(slidP <= -itemW * (itemLength-1)){
//             $('.product_arrow .next').hide();
//             return; 
//         }

//         slidP = slidP - itemW;
//         $('.product_wrap .product_zone > ul').stop().animate({marginLeft:slidP})
//         console.log(-itemW * (itemLength-1))


//         $('.product_arrow .prev').show();

//     })

//     $('.product_arrow .prev').click(function(){
//         if(slidP >= 0){
//             return;
//         }

//         slidP = slidP + itemW;
//         $('.product_wrap .product_zone > ul').stop().animate({marginLeft:slidP})
//         console.log(slidP)

//         if(slidP > -itemW){
//             $('.product_arrow .prev').hide();
//         }
//         $('.product_arrow .next').show();
//     })
// })




/*sub*/

$(document).ready(function(){

    $(window).scroll(function(){
        var scrT = $(window).scrollTop();
        $('.brand_story .brand_box > li').each(function(){
            if(scrT >= $(this).offset().top - $(window).height()/1.2){
                $(this).addClass('brand_ani')
            } else {
                $(this).removeClass('brand_ani')
    
            }
        })

    })



})

