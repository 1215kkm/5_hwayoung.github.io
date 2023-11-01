
/*main*/
$(document).ready(function(){

    $(window).scroll(function(){

        if($('html').scrollTop() > 0){
            $('#header').addClass('action')
        }  else {
            $('#header').removeClass('action')
        }
    })

    $(window).scroll(function(){

        if($('html').scrollTop() > 0){
            $('#header_sub').addClass('action02')
        }  else {
            $('#header_sub').removeClass('action02')
        }
    })




    var sildeW = $('.slide_wrap').width();
    var view = 1;
    var itemBox = sildeW/view;
    var itemLength = $('.slide li').length;

    $('.slide').css({width:itemBox*itemLength})
    $('.slide li').css({width:itemBox})

    $('.next_a').click(function(){
        $('.slide').stop().animate({marginLeft:-itemBox},function(){
            $('.slide li:first').appendTo('.slide');
            $('.slide').css({marginLeft:0})

        })
    })

    $('.prev_a').click(function(){
        $('.slide').css({marginLeft:-itemBox});
        $('.slide li:last').prependTo('.slide');
        $('.slide').stop().animate({marginLeft:0});
    })





})




// $(document).ready(function(){
//     var imgLength = $('.visual_slide li').length;
//     var index = 1;
//     var timerld;

//     $('.visual_slide li').eq(0).show().siblings().hide();
//     $('.visual_btns li').eq(0).addClass('active').siblings().removeClass('active');

//     $('.visual_btns li').click(function(){
//         clearTimeout(timerld)

//         if(index == imgLength){
//             index=0
//         }

//         index++;
//         $('.visual_slide li').eq(index-1).fadeIn().siblings().fadeOut();
//         $('.visual_btns li').eq(index-1).addClass('active').siblings().removeClass('active');

//         timerld = setTimeout(function(){
//             $('.visual_btns li').click()
//         }, 3000)
//     })

//     $('.visual_btns li').eq(0).addClass('active')

// 		$('.visual_btns li').click(function(){
// 			var buttonIndex = $(this).index()
// 			$('.visual_slide li').eq(buttonIndex).fadeIn().siblings().fadeOut();
// 			index = buttonIndex+1;
// 			$(this).addClass('active').siblings().removeClass('active')
// 		})


// })








