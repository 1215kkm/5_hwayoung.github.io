$(document).ready(function(){

    $('.gnb li').mouseover(function(){
        $(this).find('.submenuBox').stop().show();
        $('.submenu_wrap').stop().show();
    })

    $('.gnb li').mouseout(function(){
        $('.submenuBox').stop().hide();
        $('.submenu_wrap').stop().hide();

    })


var gogotop = $('#gogo').offset().top; //위치값
$(window).scroll(function(){
    // 만약(html의스크롤값이 x보다 커지면) {
    //     어떻게되라
    // }
    // if($('html').scrollTop() > 0){
    //     $('#header').css({position:'fixed'});
    //     $('#header .top_box').css({background:'#fff'});
    //     $('#header .gnb li a').css({color:'#333'});
    //     $('#header .top_gnb h1 img').css({opacity:'0'});
    //     $consol.log($('html').scrollTop())
    // }

    // else {
    //     $('#header').css({position:''});
    //     $('#header .top_box').css({background:'rgba(0,0,0,0.2)'});
    //     $('#header .gnb li a').css({color:'#fff'});
    //     $('#header .top_gnb h1 img').css({opacity:'1'});

    // }

    if($('html').scrollTop() > 0){
        $('#header').addClass('action')

    }

    else{
        $('#header').removeClass('action')
    }

    // 부드럽게 따라다니는 사이드 메뉴
    var scrValue = $('html').scrollTop();

    $('#gogo').stop().animate({top:scrValue+gogotop}, 800)





    $('#gogo li').eq(3).click(function(){
        $('html').css({scrollTop:'0px'})

    })


})

    $('.btns li').eq(0).click(function(){
		$('.banner_1').show();
		$('.banner_2, .banner_3, .banner_4').hide();
		$('.btns li').eq(0).addClass('action')
		$('.btns li:eq(1), .btns li:eq(2), .btns li:eq(3)').removeClass('action')
	})

	$('.btns li').eq(1).click(function(){
		$('.banner_2').show();
		$('.banner_1, .banner_3, .banner_4').hide();
		$('.btns li').eq(1).addClass('action')
		$('.btns li:eq(0), .btns li:eq(2), .btns li:eq(3)').removeClass('action')
	})

	$('.btns li').eq(2).click(function(){
		$('.banner_3').show();
		$('.banner_1, .banner_2, .banner_4').hide();
		$('.btns li').eq(2).addClass('action')
		$('.btns li:eq(0), .btns li:eq(1), .btns li:eq(3)').removeClass('action')
    })
    
    $('.btns li').eq(3).click(function(){
		$('.banner_4').show();
		$('.banner_1, .banner_2, .banner_3').hide();
		$('.btns li').eq(3).addClass('action')
		$('.btns li:eq(0), .btns li:eq(1), .btns li:eq(2)').removeClass('action')
    })
    
    $('.y_btn').click(function(){
        $('.y_video').show();
        $('.y_video iframe').attr('src','https://www.youtube.com/embed/_Nf18H63c3Q?amp;autoplay=1')
        $('.y_btn').hide();
        $('.c_btn').show();
    })

    $('.y_video .c_btn').click(function(){
		$('.y_video').hide();
        $('.y_video iframe').attr('src','')
        $('.y_btn').show();
        $('.c_btn').hide();

    })

    $('#gogo .q_menu').click(function(){
        $('.modal').show();
    })

    $('.modal .btn_m').click(function(){
        $('.modal').hide();
    })

    $('.sub_gnb li img').eq(0).click(function(){
        // $('.sub_gnb li .sm_gnb').stop().slideUp();
        $('.sub_gnb li .sm_gnb').eq(0).slideToggle();
    })

    $('.sub_gnb li img').eq(1).click(function(){
        // $('.sub_gnb li .sm_gnb').stop().slideUp();
        $('.sub_gnb li .sm_gnb').eq(1).slideToggle();
    })

    $('.sub_gnb li img').eq(2).click(function(){
        // $('.sub_gnb li .sm_gnb').stop().slideUp();
        $('.sub_gnb li .sm_gnb').eq(2).slideToggle();
    })

    $('.shd_btns button').click(function(){
        var value = $(this).attr('data-link');
        $('.t_wrap table').hide();
        $('.t_wrap').find('table.'+value).show();
        $(this).addClass('q_light').siblings().removeClass('q_light');
    })

        var sb = 0
    $('#gogo .search').click(function(){
        // sb = sb+1;
        // if(sb==1){
        //     $('.search_box').stop().animate({right:'97',display:'block'});
        // }

        // if(sb==2){
        //     $('.search_box').stop().animate({right:'397'});
        //     sb = 0
        // }
        $('.search_box').toggleClass('action')
    })



})

//return false; 작동 기능 중지
//oppend 본인요소 안의 안쪽 뒤에 추가







    function check_agree(){
        var check1 = $('.agree_box input:nth-child(1)').is(':checked');
        

        if(!check1){
            alert('동의를 체크해주세요');
            $('.p1').focus()
            $('html').animate({scrollTop:'600'});
            return false;
        }
    }

    $('.agree_box input:nth-child(1)').click(function(){
        $('.rule_box button').addClass('b_color');
    });
    $('.agree_box input:nth-child(2)').click(function(){
        $('.rule_box button').removeClass('b_color');
    })















$(document).ready(function(){

        
        

    $('.enter .overlap').click(function(){
            $('.enter p').show();
    })

    // function inputtext() {
    //     $('.confirm input').on('input', $(this), function(){ // input에 변화가 있을 시 

    //         if($('#na').val == "" || $('#num').val == "" || $('#birth').val == "" || $('#mail').val == "") { // input value가 empty 이면 실행 

    //             $('.confirm button').removeClass('b_color');

            
    //         } else {  // input에 글자입력되면 실행 

    //             $('.confirm button').addClass('b_color');


                

    //         }

    //     });

    // }


    $('.confirm input').keyup(function(){ // input에 입력시
        if($('#na').val().length > 0 && 
        $('#num').val().length > 0 && 
        $('#birth').val().length > 0 && 
        $('#mail').val().length > 0) { // input value가 empty 이면 실행 
            $('.confirm button').addClass('b_color');
        } else {  // input에 글자입력되면 실행 
            $('.confirm button').removeClass('b_color');
        }
    });

    $('.enter input').keyup(function(){
        if($('#id').val().length > 0 &&
        $('#password').val().length > 0 &&
        $('#password_01').val().length > 0) {
            $('.enter button').addClass('b_color')
        } else {
            $('.enter button').removeClass('b_color')
        }
    })

    $('.login_box ul input').keyup(function(){
        if($('#id').val().length > 0 &&
        $('#pass').val().length > 0 ) {
            $('.login_box ul .log_btn button').addClass('b_color') 
        } else {
            $('.login_box ul .log_btn button').removeClass('b_color')
        }
    })

    $('.id_enter input').on('input',checkInput);

    function checkInput() {
        var enter = $('.id_enter input').val();

        if (enter === '') {
            $('.find_box > button').removeClass('b_color');
        } else {
            $('.find_box > button').addClass('b_color');
        }
    }


    

    $(window).scroll(function(){

        if($('html').scrollTop() > 100){
            $('.gradient_a img').addClass('active')
            $('.gradient_a img').css({opacity:'1'})
        } else {
            $('.gradient_a img').removeClass('active');
        }


        if($('html').scrollTop() > 200){
            $('.gradient').addClass('activee')
            $('.gradient').css({opacity:'1'})
        } else {
            $('.gradient').removeClass('activee');
        }

        // if($('html').scrollTop() > 30){
        //     $('.ani_wrap').addClass('em_ani')
        //     $('.ani_wrap').css({opacity:'1'})
        // } else {
        //     $('.ani_wrap').removeClass('em_ani');
        // }

        // if($('html').scrollTop() > 100){
        //     $('.r_ani').addClass('cc')
        //     $('.r_ani').css({opacity:'1'})
        // } else {
        //     $('.r_ani').removeClass('cc')
        // }

        
        $(window).scroll(function(){
            var scrT = $(Window).scrollTop();
                $('.start_wrap > div').each(function(){
                    if(scrT >= $(this).offset().top - $(window).height()/1.2){
                        $(this).addClass('start_ani')
                    } else {
                        $(this).removeClass('start_ani')
                    }
                })
        })

        $(window).scroll(function(){
            var scrT = $(window).scrollTop();
                $('.em_count > div' ).each(function(){
                if(scrT >= $(this).offset().top - $(window).height()/1.2){
                    $(this).addClass('em_ani')
                    } else {
                    $(this).removeClass('em_ani')
        
                    }
        
                })
            })

        $(window).scroll(function(){
        var scrT = $(window).scrollTop();
            $('.world_c > div > div' ).each(function(){
            if(scrT >= $(this).offset().top - $(window).height()/1.2){
                $(this).addClass('lab_ani')
                } else {
                $(this).removeClass('lab_ani')
    
                }
    
            })
        })

        $(window).scroll(function(){
            var scrT = $(window).scrollTop();
                $('.vision_a > div' ).each(function(){
                if(scrT >= $(this).offset().top - $(window).height()/1.2){
                    $(this).addClass('vi_ani')
                    } else {
                    $(this).removeClass('vi_ani')
        
                    }
        
                })
            })

            
        $(window).scroll(function(){
            var scrT = $(window).scrollTop();
                $('.info_box > ul' ).each(function(){
                if(scrT >= $(this).offset().top - $(window).height()/1.2){
                    $(this).addClass('infor_ani')
                    } else {
                    $(this).removeClass('infor_ani')
        
                    }
        
                })
            })

            $(window).scroll(function(){
                var scrT = $(window).scrollTop();
                    $('.info_box > div' ).each(function(){
                    if(scrT >= $(this).offset().top - $(window).height()/1.2){
                        $(this).addClass('infor_ani02')
                        } else {
                        $(this).removeClass('infor_ani02')
            
                        }
            
                    })
                })




    })


})

/*슬라이드*/
$(document).ready(function(){
    var slideW = $('.visual_img').width();
    var view = 1;
    var itemBoxW = slideW/view;
    var liLength = $('.visual_img li').length;

    $('.visual_img .slide').css({width:itemBoxW*liLength})
    $('.visual_img li').css({width:itemBoxW})
    var st;

    $('.visual_btns .next').click(function(){
        clearTimeout(st)
        $('.visual_img .slide').stop().animate({left:'-1920px'},
        function(){
            $('.visual_img li:first').appendTo('.visual_img ul');
            $('.visual_img .slide').css({left:0})
        })

        st = setTimeout("$('.visual_btns .next').click()",3000)
    })


    $('.prev').click(function(){
        clearTimeout(st)
        $('.visual_img .slide').css({left:"-1920px"})
        $('.visual_img li:last').prependTo('.visual_img ul');
        $('.visual_img .slide').stop().animate({left:'0'});

        st = setTimeout("$('.visual_btns .next').click()",3000)
        
    })
    
    st = setTimeout("$('.visual_btns .next').click()",3000)
})

/*커뮤니티*/ 
// $(document).ready(function(){

//     $('.btn_next .next').click(function(){
        
//     var findPage = $(this).index();

//     $('.community_btns ul li').eq(findPage).addClass('plus').siblings().removeClass('plus')

//     findPage = findPage * -668;
//     console.log(findPage);

//     $('.community_wrap table').show({top:-findPage})
//     $(this).addClass('plus').siblings().removeClass('plus')

//     })
// })

//스크롤 연습
// if(window).scroll(function(){
    
//  var scrT = $(window).scrollTop();

//     if(scrT > 300){
//         $('.tt').addClass('action')
//     } else {
            //$('.tt').removeClass('action')
    //}

//      $('.introduce).each(function(){

//          if(scrT > = $(this).offset().top - 700){
        //     $('.introduce').addClass('action')
        //   } else {
        //    $('.introduce').removeClass('action')

       // }

//      })
//        

// })



//alert($(document).height())
//alert($(window).height())

// $(window).scroll(function(){
    
    //  var scrT = $(window).scrollTop();
 //   $('.article_box > div' ).each(function(){
  //      if(scrT > = $(this).offset().top - $(window).height()/1.2){
            //     $(this).addClass('action')
            //   } else {
            //    $(this).removeClass('action')
    
           // }
    
    //      })



//})

