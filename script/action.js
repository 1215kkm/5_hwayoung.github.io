$(document).ready(function(){
    $('.hamberg_box .hamberg').click(function(){
        $('.hamberg_box .menu_bg').stop().animate({marginRight:'0'})
        $('.hamberg_box .hamberg').stop().animate({right:'26%'})
        $('.hamberg_box .hamberg span:first').css({top:'31px'})
        $('.hamberg_box .hamberg span:last').css({top:'31px'})
        $('.hamberg_box .hamberg span').css({opacity:'0'})
        $('.hamberg_box .menu_bg .close_btn span').css({opacity:'1'})
        $('.hamberg_box .menu_bg .close_btn').css({display:'block'})
        $('.hamberg_box .menu_bg .close_btn').stop().animate({right:'26%'})
        $('.rotate_box').css({transform: 'rotate(0deg)'})

    })



    $('.hamberg_box .menu_bg .close_btn').click(function(){
        $('.hamberg_box .menu_bg').stop().animate({marginRight:'-500px'})
        $('.hamberg_box .hamberg').stop().animate({right:'0'})
        $('.hamberg_box .hamberg span:first').css({top:'19px'})
        $('.hamberg_box .hamberg span:last').css({top:'42px'})
        $('.hamberg_box .hamberg span').css({opacity:'1'})
        $('.hamberg_box .menu_bg .close_btn span').css({opacity:'0'})
        $('.hamberg_box .menu_bg .close_btn').css({display:'none'})
        $('.hamberg_box .menu_bg .close_btn').stop().animate({right:'0'})
        $('.rotate_box').css({transform: 'rotate(-50deg)'})

    })

    $('.content_bar > ul > li').click(function(){
		var value = $(this).attr('data-cate');
		$('.web_zone .content').hide();
		$('.web_zone').find('.'+value).show();
		$(this).addClass('active').siblings().removeClass('active')
	})


    $('.b_p li').eq(1).click(function(){
        $('.banner').show();
        $('.pop_up').hide();
        $('.b_p li').eq(1).addClass('action')
        $('.b_p li:eq(0)').removeClass('action')
    })

    $('.b_p li').eq(0).click(function(){
        $('.pop_up').show();
        $('.banner').hide();
        $('.b_p li').eq(0).addClass('action')
        $('.b_p li:eq(1)').removeClass('action')

    })


})




    $(document).ready(function(){
        $('.pop_up .bxslider').bxSlider( {
            mode: 'horizontal',// 가로 방향 수평 슬라이드
            speed: 500,        // 이동 속도를 설정
            pager: true,    // 현재 위치 페이징 표시 여부 설정
            moveSlides: 1,     // 슬라이드 이동시 개수
            slideWidth: 1500,   // 슬라이드 너비
            minSlides: 3,      // 최소 노출 개수
            maxSlides: 3,      // 최대 노출 개수
            slideMargin: 120,    // 슬라이드간의 간격
            auto: false,        // 자동 실행 여부
            autoHover: false,   // 마우스 호버시 정지 여부
            controls: false,   // 이전 다음 버튼 노출 여부
            wrapperClass: 'string',
            

            
        });
    });




    $(document).ready(function(){
        $('.slide_box .bxslider').bxSlider( {
            mode: 'horizontal',// 가로 방향 수평 슬라이드
            speed: 500,        // 이동 속도를 설정
            pager: false,      // 현재 위치 페이징 표시 여부 설정
            moveSlides: 1,     // 슬라이드 이동시 개수
            slideWidth: 1500,   // 슬라이드 너비
            minSlides: 1,      // 최소 노출 개수
            maxSlides: 1,      // 최대 노출 개수
            slideMargin: 120,    // 슬라이드간의 간격
            auto: false,        // 자동 실행 여부
            autoHover: false,   // 마우스 호버시 정지 여부
            controls: false,   // 이전 다음 버튼 노출 여부
            wrapperClass: 'string',

            
        });
    });





