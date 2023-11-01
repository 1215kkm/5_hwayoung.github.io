$(document).ready(function(){
    $('.gnb > ul > li').mouseover(function(){
        $(this).find('.lnb').stop().slideDown();
    })

    $('.gnb > ul > li').mouseout(function(){
        $(this).find('.lnb').stop().slideUp();
    })
    
})

/*슬라이드*/
// $(document).ready(function(){
//     var slideBox = $('.slide_wrap').width();
//     var view = 1;
//     var itemBox = slideBox/view;
//     var liLength = $('.slide_wrap li').length;

//     $('.slide_wrap ul').css({width:itemBox*liLength})
//     $('.slide_wrap ul li').css({width:itemBox})

//     $('.slide_wrap .next').click(function(){
//         $('.slide_wrap ul').stop().animate({left:-itemBox},function(){
//         $('.slide_wrap ul li:first').appendTo('.slide_wrap ul');
//         $('.slide_wrap ul').css({left:0})

//         })

//         setTimeout("$('.slide_wrap .next').click()",1000)
//     })

//     $('.slide_wrap .prev').click(function(){
//         $('.slide_wrap ul').css({left:-itemBox})
//         $('.slide_wrap ul li:last').prependTo('.slide_wrap ul');
//         $('.slide_wrap ul').stop().animate({left:0})
        

//     })

// })

// setTimeout("$('.slide_wrap .next').click()",1000)




// setInterval 반대 clearInterval
// setTimeout 반대 clearTimeout

// function alarm(){
//     alert('rrrrr')
// }

// var hh = 0;
// function num(){
//     hh++;
//     $('#visual_main').text(hh)

//     if(hh == 3){
//         clearInterval(timer2);
//     }
// }

// var timer2 = setInterval(function(){
//     num()
// },1000)



// 예약타임을 거는 내장 함수

// var timer = setTimeout(function(){
//     alarm()
// },1000)

// clearTimeout(timer)


// $(document).ready(function(){
//     var slideBox = $('.slide_wrap').width();
//     var view = 3;
//     var itemBox = slideBox/view;
//     var liLength = $('.slide_wrap li').length;

//     $('.slide_wrap ul').css({width:itemBox*liLength})
//     $('.slide_wrap ul li').css({width:itemBox})
    
//     $('.slide_wrap .next').click(function(){
//         $('.slide_wrap ul').stop().animate({left:-itemBox},function(){
//         $('.slide_wrap ul li:first').appendTo('.slide_wrap ul');
//         $('.slide_wrap ul').css({left:0})

//         })
//     }) 

//     $('.slide_wrap .prev').click(function(){
//         $('.slide_wrap ul').css({left:-itemBox});
//         $('.slide_wrap ul li:last').prependTo('.slide_wrap ul')
//         $('.slide_wrap ul').stop().animate({left:0})
//     })
// })

$(document).ready(function(){

    var slideW = $('.slide_wrap').width();
    var view = 1;
    var itemboxW = slideW/view;
    var itemLength = ('.slide_wrap li').length;
    
    $('.slide_wrap ul').css({width:itemboxW*itemLength})
    $('.slide_wrap li').css({width:itemboxW})
    var st;

    $('.next').click(function(){
        clearTimeout(st)
        $('.slide_wrap ul').stop().animate({left:'-1920px'},
        function(){
            $('.slide_wrap li:first').appendTo('.slide_wrap ul');
            $('.slide_wrap ul').css({left:0})
        })
    st = setTimeout("$('.next').click()",3000)
    })

    $('.prev').click(function(){
        clearTimeout(st)
        $('.slide_wrap ul').css({left:'-1920px'});
        $('.slide_wrap li:last').prependTo('.slide_wrap ul');
        $('.slide_wrap ul').stop().animate({left:'0'});

        st = setTimeout("$('.next').click()",3000)
    })

    st = setTimeout("$('.next').click()",3000)

})

/*퀵메뉴*/

$(document).ready(function(){
var quickT = parseInt($('.quick_menu').css('top'));

    $(window).scroll(function(){
        var scrT = $(this).scrollTop();
        
        // #('header').height(); 헤더 높이
        console.log(scrT)

        $('.quick_menu').stop().animate({top:scrT+quickT})

    })
})    

// parseInt 숫자만 뽑아냄
    // $(window).scroll(function(){
    //     $('.quick_menu').stop().css({position:'fixed'})
    // })
    // 고정 따라다니기

/*클릭이동*/
$(document).ready(function(){
    $('.detail_navi a').click(function(){
        var naviT = $($(this).attr('href')).offset().top;
        $('html,body').stop().animate({scrollTop:naviT})

        return false;
    })
})

// offset 위에서 부터 위치를 알아야 할때
// position 부모 요소 부터의 상대적 위치

// $(document).ready(function(){
//     $('.up_a').click(function(){
//         var n = $('.up_a').index(this);
//         var num = $(".num:eq("+n+")").val();
        
//         num = $(".num:eq("+n+")").val(num*1+1);

//     })

//     $('.down_a').click(function(){
//         var n = $('.down_a').index(this);
//         var num = $(".num:eq("+n+")").val();

//         num = $(".num:eq("+n+")").val(num*1+1);
//     })

    
// })

$(document).ready(function(){
    var optionCount = $('.num').val();
    var totalp = $('#total').val();
    $('#total').val(numberWithCommas(totalp))

    $('.up_a').click(function(){
        optionCount++;
        $('.num').val(optionCount);
        $('.gea').text(optionCount);
        $('.total').val(numberWithCommas(totalp*optionCount));
    })

    $('.down_a').click(function(){
        optionCount--;

        if(optionCount <= 0){
            optionCount = 1;

        }

        $('.num').val(optionCount);
        $('.gea').text(optionCount);
        $('.total').val(numberWithCommas(totalp*optionCount));
    })

    $('#ml').change(function(){
    var cilckOption = $(this).val();
    $('.capacity').text(cilckOption);
    
    })

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    
    
})

$(document).ready(function(){
    $('.product_photo li').click(function(){
        var imgS = $(this).find('img').attr('src');
        $('.main_photo img, .big_photo img').attr('src',imgS);
        $(this).addClass('active').siblings().removeClass('active');
        })

    var imgLeft = $('.main_photo img').offset().left;
    var imgTop = $('.main_photo img').offset().top;

    $('.main_photo img').mousemove(function(e){
        //e.pageX 마우스 x축 값
        //e.pageY 마우스 y축 값

        $('.big_photo img').css({left:(-e.pageX+imgLeft),top:(-e.pageY+imgTop)});
        $('.big_photo').show();
    })

    $('.main_photo img').mouseleave(function(){
        $('.big_photo').hide();
    })
})